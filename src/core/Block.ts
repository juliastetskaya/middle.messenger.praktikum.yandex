import { v4 as makeUUID } from 'uuid';
import Handlebars from 'handlebars';
import EventBus from './EventBus';

type EventType = Record<string, () => void>;

export interface BlockClass<P = {}> extends Function {
    new (props: P): Block<P>;
}

class Block<P = {}> {
    static EVENTS = {
        INIT: 'init',
        FLOW_CDM: 'flow:component-did-mount',
        FLOW_CDU: 'flow:component-did-update',
        FLOW_RENDER: 'flow:render',
    } as const;

    static componentName: string;

    public id = makeUUID();

    private _element: Nullable<HTMLElement> = null;

    protected readonly props: P;

    protected children: { [id: string]: Block<P> } = {};

    private eventBus: () => EventBus;

    protected refs: { [key: string]: Block<P> } = {};

    public constructor(props?: P) {
        const eventBus = new EventBus();

        this.props = this._makePropsProxy(props || {} as P);

        this.eventBus = () => eventBus;

        this._registerEvents(eventBus);

        eventBus.emit(Block.EVENTS.INIT);
    }

    _registerEvents(eventBus: EventBus) {
        eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
        eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    }

    init() {
        this.eventBus().emit(Block.EVENTS.FLOW_RENDER, this.props);
    }

    _componentDidMount() {
        this.componentDidMount();
    }

    componentDidMount() {}

    _componentDidUpdate() {
        const response = this.componentDidUpdate();
        if (!response) {
            return;
        }
        this._render();
    }

    componentDidUpdate() {
        return true;
    }

    setProps = (nextProps: Partial<P>) => {
        if (!nextProps) {
            return;
        }

        Object.assign(this.props as {}, nextProps);
    };

    get element() {
        return this._element;
    }

    _render() {
        const fragment = this._compile();

        const newElement = fragment.firstElementChild as HTMLElement;

        if (this._element) {
            this._removeEvents();
            this._element!.replaceWith(newElement);
        }

        this._element = newElement;
        this._addEvents();
    }

    protected render(): string {
        return '';
    }

    getContent():HTMLElement {
        // Хак, чтобы вызвать CDM только после добавления в DOM
        if (this.element?.parentNode?.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
            setTimeout(() => {
                if (this.element?.parentNode?.nodeType !== Node.DOCUMENT_FRAGMENT_NODE) {
                    this.eventBus().emit(Block.EVENTS.FLOW_CDM);
                }
            }, 100);
        }

        return this.element!;
    }

    _makePropsProxy(props: P): P {
        // Можно и так передать this
        // Такой способ больше не применяется с приходом ES6+
        const self = this;

        return new Proxy(props as unknown as object, {
            get(target: Record<string, unknown>, prop: string) {
                const value = target[prop];
                return typeof value === 'function' ? value.bind(target) : value;
            },
            set(target: Record<string, unknown>, prop: string, value: unknown) {
                const oldProps = { ...target };
                target[prop] = value;

                // Запускаем обновление компоненты
                // Плохой cloneDeep, в следующей итерации нужно заставлять добавлять cloneDeep им самим
                self.eventBus().emit(Block.EVENTS.FLOW_CDU, oldProps, target);
                return true;
            },
            deleteProperty() {
                throw new Error('Нет доступа');
            },
        }) as unknown as P;
    }

    _removeEvents() {
        const { events }: EventType = (this.props as unknown as EventType);

        if (!events || !this._element) {
            return;
        }

        Object.entries(events).forEach(([event, listener]) => {
            this._element!.removeEventListener(event, listener);
        });
    }

    _addEvents() {
        const { events }: EventType = (this.props as unknown as EventType);

        if (!events || !this._element) {
            return;
        }

        Object.entries(events).forEach(([event, listener]) => {
            this._element!.addEventListener(event, listener);
        });
    }

    _compile(): DocumentFragment {
        const fragment = document.createElement('template');

        //  Рендерим шаблон
        const template = Handlebars.compile(this.render());
        fragment.innerHTML = template({ ...this.props, children: this.children, refs: this.refs });

        // Заменяем заглушки на компоненты
        Object.entries(this.children).forEach(([id, component]) => {
            // Ищем заглушки
            const stub = fragment.content.querySelector(`[data-id="${id}"]`);

            if (!stub) {
                return;
            }

            const stubChilds = stub.childNodes.length ? stub.childNodes : [];

            // Заменяем заглушку на component._element
            const content = component.getContent();
            stub.replaceWith(content);

            // Ищем элемент layout-a, куда вставлять детей
            const layoutContent = content.querySelector('[data-layout="1"]');

            if (layoutContent && stubChilds.length) {
                layoutContent.append(...stubChilds);
            }
        });

        // Возвращаем фрагмент
        return fragment.content;
    }

    show() {
        this.getContent()!.style.display = 'block';
    }

    hide() {
        this.getContent()!.style.display = 'none';
    }
}

export default Block;

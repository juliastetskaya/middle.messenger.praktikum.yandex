import { v4 as makeUUID } from 'uuid';

import EventBus from './EventBus';

class Block {
    static EVENTS = {
        INIT: 'init',
        FLOW_CDM: 'flow:component-did-mount',
        FLOW_CDU: 'flow:component-did-update',
        FLOW_RENDER: 'flow:render',
    };

    public id = makeUUID();

    private _element: HTMLElement | null = null;

    protected props: any = {};

    protected children: Record<string, Block> = {};

    private eventBus: () => EventBus;

    constructor(propsAndChildren: unknown = {}) {
        const eventBus = new EventBus();

        const { props, children } = this.getChildren(propsAndChildren);

        this.children = children;
        this.props = this._makePropsProxy(props);
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
        this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }

    _componentDidMount() {
        this.componentDidMount();
    }

    componentDidMount() {}

    dispatchComponentDidMount() {
        this.eventBus().emit(Block.EVENTS.FLOW_CDM);
    }

    _componentDidUpdate(oldProps: any, newProps: any) {
        const response = this.componentDidUpdate(oldProps, newProps);
        if (!response) {
            return;
        }
        this._render();
    }

    componentDidUpdate(oldProps: any, newProps: any) {
        return true;
    }

    setProps = (nextProps: any) => {
        if (!nextProps) {
            return;
        }

        Object.assign(this.props, nextProps);
    };

    get element() {
        return this._element;
    }

    _render() {
        const fragment = this.render();

        const newElement = fragment.firstElementChild as HTMLElement;

        if (this._element) {
            this._element.replaceWith(newElement);
        }

        this._element = newElement;

        this._addEvents();
    }

    protected render(): DocumentFragment {
        return new DocumentFragment();
    }

    getContent() {
        return this.element;
    }

    _makePropsProxy(props: unknown) {
        // Можно и так передать this
        // Такой способ больше не применяется с приходом ES6+
        const self = this;

        return new Proxy(props as unknown as object, {
            get(target: Record<string, unknown>, prop: string) {
                const value = target[prop];
                return typeof value === 'function' ? value.bind(target) : value;
            },
            set(target: Record<string, unknown>, prop: string, value: unknown) {
                target[prop] = value;

                // Запускаем обновление компоненты
                // Плохой cloneDeep, в следующей итерации нужно заставлять добавлять cloneDeep им самим
                self.eventBus().emit(Block.EVENTS.FLOW_CDU, { ...target }, target);
                return true;
            },
            deleteProperty() {
                throw new Error('Нет доступа');
            },
        });
    }

    _removeEvents() {
        const events: Record<string, () => void> = (this.props as any).events;

        if (!events || !this._element) {
            return;
        }

        Object.entries(events).forEach(([event, listener]) => {
            this._element!.removeEventListener(event, listener);
        });
    }

    _addEvents() {
        const events: Record<string, () => void> = (this.props as any).events;

        if (!events || !this._element) {
            return;
        }

        Object.entries(events).forEach(([event, listener]) => {
            this._element!.addEventListener(event, listener);
        });
    }

    _createDocumentElement(tagName: string) {
        // Можно сделать метод, который через фрагменты в цикле создаёт сразу несколько блоков
        return document.createElement(tagName);
    }

    show() {
        this.getContent()!.style.display = 'block';
    }

    hide() {
        this.getContent()!.style.display = 'none';
    }

    getChildren(propsAndChildren: any): Record<string, Record<string, Block>> {
        const children: Record<string, Block> = {};
        const props: Record<string, any> = {};

        Object.entries(propsAndChildren).map(([key, value]) => {
            if (value instanceof Block) {
                children[key] = value;
            } else {
                props[key] = value;
            }
        });

        return { children, props};
    }

    compile(template: (context: any) => string, context: any) {
        const fragment = this._createDocumentElement('template') as HTMLTemplateElement;

        Object.entries(this.children).forEach(([key, child]) => {
            context[key] = `<div data-id="id-${child.id}"></div>`;
        });

        const htmlString = template(context);

        fragment.innerHTML = htmlString;

        Object.entries(this.children).forEach(([_, child]) => {
            const stub = fragment.content.querySelector(`[data-id="id-${child.id}}]`);

            if (!stub) {
                return;
            }

            stub.replaceWith(child.getContent()!);
        })

        return fragment.content;
    }
}

export default Block;

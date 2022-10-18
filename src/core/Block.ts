import { v4 as makeUUID } from 'uuid';
import Handlebars from 'handlebars';
import EventBus from './EventBus';

type Events = Values<typeof Block.EVENTS>;

class Block<P = any> {
    static EVENTS = {
        INIT: 'init',
        FLOW_CDM: 'flow:component-did-mount',
        FLOW_CDU: 'flow:component-did-update',
        FLOW_RENDER: 'flow:render',
    } as const;

    public id = makeUUID();

    private _element: Nullable<HTMLElement> = null;

    protected readonly props: P;

    protected children: {[id: string]: Block} = {};

    private eventBus: () => EventBus<Events>;

    protected state: any = {};
    protected refs: {[key: string]: HTMLElement} = {};

    public constructor(props?: P) {
        const eventBus = new EventBus<Events>();

        this.getStateFromProps(props);

        this.props = this._makePropsProxy(props || {} as P)
        this.state = this._makePropsProxy(this.state);

        this.eventBus = () => eventBus;

        this._registerEvents(eventBus);

        eventBus.emit(Block.EVENTS.INIT);
        // const { props, children } = this.getChildren(propsAndChildren);

        // this.children = children;
        
        // this.initChildren();
    }

    _registerEvents(eventBus: EventBus) {
        eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
        eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    }

    protected getStateFromProps(props?: P): void {
        this.state = {};
    }

    init() {
        this.eventBus().emit(Block.EVENTS.FLOW_RENDER, this.props);
    }

    _componentDidMount(props: P) {
        this.componentDidMount(props);
    }

    componentDidMount(props: P) {}

    // dispatchComponentDidMount() {
    //     this.eventBus().emit(Block.EVENTS.FLOW_CDM);
    // }

    _componentDidUpdate(oldProps: P, newProps: P) {
        const response = this.componentDidUpdate(oldProps, newProps);
        if (!response) {
            return;
        }
        this._render();
    }

    componentDidUpdate(oldProps: P, newProps: P) {
        return true;
    }

    setProps = (nextProps: P) => {
        if (!nextProps) {
            return;
        }

        Object.assign(this.props, nextProps);
    };

    setState = (nextState: any) => {
        if (!nextState) {
            return;
        }

        Object.assign(this.state, nextState);
    }

    get element() {
        return this._element;
    }

    _render() {
        const fragment = this._compile();

        console.log('FRAGMENT', fragment.firstElementChild);

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
                if (this.element?.parentNode?.nodeType !==  Node.DOCUMENT_FRAGMENT_NODE) {
                    this.eventBus().emit(Block.EVENTS.FLOW_CDM);
                }
            }, 100)
        }
    
        return this.element!;
    }

    _makePropsProxy(props: any): any {
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

    // _createDocumentElement(tagName: string) {
    //     // Можно сделать метод, который через фрагменты в цикле создаёт сразу несколько блоков
    //     return document.createElement(tagName);
    // }

    _compile(): DocumentFragment {
        const fragment = document.createElement('template');

        //  Рендерим шаблон
        const template = Handlebars.compile(this.render());
        fragment.innerHTML = template({ ...this.state, ...this.props, children: this.children, refs: this.refs });
    
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

    // getChildren(propsAndChildren: any): Record<string, Record<string, Block>> {
    //     const children: Record<string, Block> = {};
    //     const props: Record<string, any> = {};

    //     Object.entries(propsAndChildren).map(([key, value]) => {
    //         if (value instanceof Block) {
    //             children[key] = value;
    //         } else {
    //             props[key] = value;
    //         }
    //     });

    //     return { children, props};
    // }

    // compile(template: (context: any) => string, context: any) {
    //     const fragment = this._createDocumentElement('template') as HTMLTemplateElement;
        
    //     Object.entries(this.children).forEach(([key, child]) => {
    //         context[key] = `<div data-id="id-${child.id}"></div>`;
    //     });
        
    //     const htmlString = template(context);

    //     fragment.innerHTML = htmlString;

    //     Object.entries(this.children).forEach(([_, child]) => {
    //         const stub = fragment.content.querySelector(`[data-id="id-${child.id}"]`);

    //         if (!stub) {
    //             return;
    //         }

    //         stub.replaceWith(child.getContent()!);
    //     })

    //     return fragment.content;
    // }

    // protected initChildren() {}
}

export default Block;

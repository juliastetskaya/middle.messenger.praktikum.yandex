import { BlockClass, Store } from 'core';

type StateType = Record<string, any>;

export function withStore<P extends WithStateProps>(
    Component: BlockClass<P>,
    mapStateToProps?: (state: StateType) => StateType,
) {
    return class extends Component {
        constructor(props: P) {
            super({
                ...props,
                store: mapStateToProps ? mapStateToProps(window.store.getState()) : window.store,
            });
        }

        componentDidMount(props: P) {
            super.componentDidMount(props);
            window.store.on('changed', this.__onChangeStoreCallback);
        }

        componentWillUnmount() {
            super.componentWillUnmount();
            window.store.off('changed', this.__onChangeStoreCallback);
        }

        __onChangeStoreCallback = () => {
            this.setProps({ ...this.props, store: window.store });
        };
    } as unknown as BlockClass<Omit<P, 'store'>>;
}

export interface WithStateProps {
    store: Store<AppState>;
}

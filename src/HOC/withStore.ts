import { BlockClass, store } from 'core';

type StateType = Record<string, any>;

type MapStateToProps<MappedProps> = (state: AppState) => MappedProps;

export function withStore<P, MappedProps = any>(mapStateToProps?: MapStateToProps<MappedProps>) {
    return (Component: BlockClass<P>) => {
        let currentState: Nullable<StateType> = {};

        return class extends Component {
            constructor(props: P) {
                const state = store.getState();
                currentState = (mapStateToProps && mapStateToProps(state)) || {};
                super({ ...props, ...currentState });
            }

            componentDidMount(props: P) {
                super.componentDidMount(props);
                store.on('changed', this.__onChangeStoreCallback);
            }

            componentWillUnmount() {
                super.componentWillUnmount();
                store.off('changed', this.__onChangeStoreCallback);
            }

            __onChangeStoreCallback = () => {
                const state = store.getState();
                const propsFromState = (mapStateToProps && mapStateToProps(state)) || {};
                if (JSON.stringify(currentState) !== JSON.stringify(propsFromState)) {
                    this.setProps({ ...propsFromState });
                }
            };
        } as BlockClass<P>;
    };
}

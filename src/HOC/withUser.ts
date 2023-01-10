import { BlockClass, Store } from 'core';

type WithStateProps = { store: Store<AppState> };

export function withUser<P extends WithStateProps>(Component: BlockClass<P>) {
    return class extends Component {
        constructor(props: P) {
            super({
                ...props,
                user: window.store.getState().user,
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

        __onChangeStoreCallback = (prevState: AppState, nextState: AppState) => {
            if (JSON.stringify(prevState.user) !== JSON.stringify(nextState.user)) {
                console.log('USER CHANGED');
                this.setProps({ ...this.props, user: nextState.user });
            }
        };
    } as unknown as BlockClass<Omit<P, 'user'>>;
}

import { BlockClass, Store } from 'core';

type WithStateProps = { store: Store<AppState> };

type StateType = Record<string, any>;

export function withStore<P extends WithStateProps>(
    Component: BlockClass<P>,
    mapStateToProps?: (state: StateType) => StateType,
) {
    return class extends Component {
        constructor(props: P) {
            super({
                ...props,
                ...(mapStateToProps
                    ? mapStateToProps(window.store.getState())
                    : { store: window.store }),
            });
        }
    } as unknown as BlockClass<Omit<P, 'store'>>;
}

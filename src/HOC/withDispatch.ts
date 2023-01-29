import { BlockClass, Dispatch, store } from 'core';

export function withDispatch<P>(Component: BlockClass<P>) {
    return class extends Component {
        constructor(props: P & DispatchStateProps) {
            super({ ...props, dispatch: store.dispatch.bind(store) });
        }
    } as BlockClass<P>;
}

export interface DispatchStateProps {
    dispatch: Dispatch<AppState>;
}

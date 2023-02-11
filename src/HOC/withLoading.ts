import { BlockClass } from 'core';
import { withStore } from 'HOC';

export function withLoading<P>(Component: BlockClass<P>) {
    const mapStateToProps = (state: AppState) => ({ isLoading: state.isLoading });

    return withStore<P, LoadingStateProps>(mapStateToProps)(Component);
}

export interface LoadingStateProps {
    isLoading: boolean;
}

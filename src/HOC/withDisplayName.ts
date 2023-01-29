import { BlockClass } from 'core';
import { withStore } from 'HOC';

export function withDisplayName<P>(Component: BlockClass<P>) {
    const mapStateToProps = (state: AppState) => ({ displayName: state.user?.display_name || '' });

    return withStore<P, DisplayNameStateProps>(mapStateToProps)(Component);
}

export interface DisplayNameStateProps {
    displayName: string;
}

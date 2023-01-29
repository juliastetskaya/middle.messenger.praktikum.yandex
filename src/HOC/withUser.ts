import { BlockClass } from 'core';
import { withStore } from 'HOC';

export function withUser<P>(Component: BlockClass<P>) {
    const mapStateToProps = (state: AppState) => ({ user: state.user });

    return withStore<P, UserStateProps>(mapStateToProps)(Component);
}

export interface UserStateProps {
    user: Nullable<User>;
}

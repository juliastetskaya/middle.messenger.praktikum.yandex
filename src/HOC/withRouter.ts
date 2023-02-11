import { BlockClass, router } from 'core';

export function withRouter<P>(Component: BlockClass<P>) {
    return class extends Component {
        constructor(props: P & RouterStateProps) {
            super({ ...props, router });
        }
    } as BlockClass<P>;
}

export interface RouterStateProps {
    router: typeof router;
}

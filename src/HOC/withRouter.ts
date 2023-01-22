import { BlockClass } from 'core';
import { Router } from 'core/Router';

export function withRouter<P>(Component: BlockClass<P>) {
    return class extends Component {
        constructor(props: P & WithRouterProps) {
            super({ ...props, router: Router });
        }
    } as unknown as BlockClass<Omit<P, 'router'>>;
}

export interface WithRouterProps {
    router: typeof Router;
}

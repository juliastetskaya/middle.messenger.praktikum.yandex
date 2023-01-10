import { CoreRouter } from './CoreRouter';
import { PATHS } from '../../constants';

export class Router implements CoreRouter {
    private routes: Record<string, Function> = {};

    private isExist = false;

    private onRouteChange(pathname: string = window.location.pathname) {
        const [route] = Object.keys(this.routes).filter((path) => path === pathname);

        if (!route && this.routes[PATHS.NOT_FOUND]) {
            this.routes[PATHS.NOT_FOUND]();
            return;
        }

        this.routes[route]();
    }

    start() {
        if (!this.isExist) {
            this.isExist = true;

            window.onpopstate = () => {
                this.onRouteChange.call(this);
            };

            this.onRouteChange();
        }
    }

    use(pathname: string, callback: Function) {
        this.routes[pathname] = callback;

        return this;
    }

    go(pathname: string) {
        window.history.pushState({}, '', pathname);
        this.onRouteChange(pathname);
    }

    back() {
        window.history.back();
    }

    forward() {
        window.history.forward();
    }
}

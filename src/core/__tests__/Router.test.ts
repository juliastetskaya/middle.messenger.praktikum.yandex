import { Router } from '../Router';

describe('Router', () => {
    it('should call onRouteChange without any arguments', () => {
        const router = new Router();
        const mockFn = jest.fn();

        router.use('/', mockFn);
        router.start();

        expect(mockFn).toHaveBeenCalledTimes(1);
        expect(mockFn).toHaveBeenCalledWith();
    });

    it('should go to default route', () => {
        const router = new Router();
        const onRouteChangeSpy = jest.spyOn(router, 'onRouteChange');
        const mockFn = jest.fn();

        router.use('*', mockFn);
        router.start();
        router.go('/chats');

        expect(onRouteChangeSpy).toHaveBeenCalled();
        expect(onRouteChangeSpy).toHaveBeenCalledWith('/chats');
        expect(mockFn).toHaveBeenCalled();
    });

    it('should go to certain route', () => {
        const router = new Router();
        const onRouteChangeSpy = jest.spyOn(router, 'onRouteChange');
        const onPushStateSpy = jest.spyOn(window.history, 'pushState');
        const mockFn = jest.fn();

        router.use('*', jest.fn());
        router.use('/chat', mockFn);
        router.start();
        router.go('/chat');

        expect(mockFn).toHaveBeenCalled();
        expect(onRouteChangeSpy).toHaveBeenCalledWith('/chat');
        expect(onPushStateSpy).toHaveBeenCalled();
    });

    it('should go back', () => {
        const router = new Router();
        const backSpy = jest.spyOn(window.history, 'back');
        const mockFn = jest.fn();

        router.use('*', mockFn);
        router.start();
        router.back();

        expect(mockFn).toHaveBeenCalled();
        expect(backSpy).toHaveBeenCalled();
    });

    it('should go forward', () => {
        const router = new Router();
        const forwardSpy = jest.spyOn(window.history, 'forward');
        const mockFn = jest.fn();

        router.use('*', mockFn);
        router.start();
        router.forward();

        expect(mockFn).toHaveBeenCalled();
        expect(forwardSpy).toHaveBeenCalled();
    });
});

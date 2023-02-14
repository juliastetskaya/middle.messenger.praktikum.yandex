import { Store } from '../Store';

describe('Store', () => {
    it('should get state', () => {
        const store = new Store({ userId: 5, userName: 'Ivan' });

        expect(store.getState()).toEqual({ userId: 5, userName: 'Ivan' });
    });

    it('should set state', () => {
        const store = new Store({});

        store.set({ userId: 555 });

        expect(store.getState()).toEqual({ userId: 555 });
    });

    it('should emit event after store was update', () => {
        const store = new Store({ userId: 333 });
        const mockFn = jest.fn();

        store.on('changed', mockFn);

        store.set({ userId: 666 });

        expect(mockFn).toHaveBeenCalledTimes(1);
        expect(mockFn).toHaveBeenCalledWith({ userId: 333 }, { userId: 666 });
    });

    it('should call set in dispatch', () => {
        const store = new Store({ userId: 10, userName: 'Ivan' });
        store.set = jest.fn();

        store.dispatch({ userName: 'Vasya' });

        expect(store.set).toHaveBeenCalledTimes(1);
        expect(store.set).toHaveBeenCalledWith({ userId: 10, userName: 'Vasya' });
    });

    it('should call action in dispatch', () => {
        const store = new Store({ userId: 10, userName: 'Ivan' });
        const mockFn = jest.fn();

        store.dispatch(mockFn, { userName: 'Vasya' });

        expect(mockFn).toHaveBeenCalledTimes(1);
    });
});

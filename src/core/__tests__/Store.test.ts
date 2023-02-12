import { Store } from '../Store';

describe('core/Store', () => {
    it('should set state', () => {
        const store = new Store({});

        store.set({ userId: 555 });

        expect(store.getState()).toEqual({ userId: 555 });
    });
});

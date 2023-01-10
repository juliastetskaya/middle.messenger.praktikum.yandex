import { renderDOM, Store } from 'core';
import { Pages, getPageWithData } from 'utils/pageList';
import { CoreRouter } from 'core/Router';
import { PATHS } from './constants';

const routes = [
    {
        path: PATHS.START,
        block: Pages.Start,
        shouldAuthorized: false,
    },
    {
        path: PATHS.SIGNIN,
        block: Pages.Signin,
        shouldAuthorized: false,
    },
    {
        path: PATHS.SIGNUP,
        block: Pages.Signup,
        shouldAuthorized: false,
    },
    {
        path: PATHS.PROFILE,
        block: Pages.Profile,
        shouldAuthorized: true,
    },
    {
        path: PATHS.PROFILE_CHANGE,
        block: Pages.ProfileChange,
        shouldAuthorized: true,
    },
    {
        path: PATHS.PASSWORD_CHANGE,
        block: Pages.PasswordChange,
        shouldAuthorized: true,
    },
    {
        path: PATHS.CHAT,
        block: Pages.Chat,
        shouldAuthorized: true,
    },
    {
        path: PATHS.NOT_FOUND,
        block: Pages.NotFound,
        shouldAuthorized: false,
    },
    {
        path: PATHS.SERVER_ERROR,
        block: Pages.ServerError,
        shouldAuthorized: false,
    },
];

export const initRouter = (router: CoreRouter, store: Store<AppState>) => {
    routes.forEach(({ path, block }) => router.use(path, () => {
        const { Block, data } = getPageWithData(block);

        const page = new Block(data);
        renderDOM('#app', page);
    }));

    store.on('changed', (prevState: AppState, nextState: AppState) => {
        if (!prevState.isInited && nextState.isInited) {
            router.start();
        }
    });
};

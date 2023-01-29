import { renderDOM } from 'core';
import { Pages, getPageWithData } from 'utils/pageList';
import { CoreRouter } from 'core/Router';
import { ROUTES } from './constants';

const routes = [
    {
        path: ROUTES.SIGNIN,
        block: Pages.Signin,
    },
    {
        path: ROUTES.SIGNUP,
        block: Pages.Signup,
    },
    {
        path: ROUTES.PROFILE,
        block: Pages.Profile,
    },
    {
        path: ROUTES.PROFILE_CHANGE,
        block: Pages.ProfileChange,
    },
    {
        path: ROUTES.PASSWORD_CHANGE,
        block: Pages.PasswordChange,
    },
    {
        path: ROUTES.CHAT,
        block: Pages.Chat,
    },
    {
        path: ROUTES.NOT_FOUND,
        block: Pages.NotFound,
    },
    {
        path: ROUTES.SERVER_ERROR,
        block: Pages.ServerError,
    },
];

export const initRouter = (router: CoreRouter) => {
    routes.forEach(({ path, block }) => router
        .use(path, () => {
            const { Block, data } = getPageWithData(block);

            const page = new Block(data);
            renderDOM('#app', page);
        }));

    router.start();
};

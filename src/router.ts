import { renderDOM } from 'core';
import { Pages, getPageWithData } from 'utils/pageList';
import { CoreRouter } from 'core/Router';
import { ROUTES } from './constants';

const routes = [
    {
        path: ROUTES.START,
        block: Pages.Start,
        shouldAuthorized: false,
    },
    {
        path: ROUTES.SIGNIN,
        block: Pages.Signin,
        shouldAuthorized: false,
    },
    {
        path: ROUTES.SIGNUP,
        block: Pages.Signup,
        shouldAuthorized: false,
    },
    {
        path: ROUTES.PROFILE,
        block: Pages.Profile,
        shouldAuthorized: true,
    },
    {
        path: ROUTES.PROFILE_CHANGE,
        block: Pages.ProfileChange,
        shouldAuthorized: true,
    },
    {
        path: ROUTES.PASSWORD_CHANGE,
        block: Pages.PasswordChange,
        shouldAuthorized: true,
    },
    {
        path: ROUTES.CHAT,
        block: Pages.Chat,
        shouldAuthorized: true,
    },
    {
        path: ROUTES.NOT_FOUND,
        block: Pages.NotFound,
        shouldAuthorized: false,
    },
    {
        path: ROUTES.SERVER_ERROR,
        block: Pages.ServerError,
        shouldAuthorized: false,
    },
];

export const initRouter = (router: CoreRouter) => {
    routes.forEach(({ path, block }) => router
        .use(path, () => {
            const { Block, data } = getPageWithData(block);

            const page = new Block(data);
            renderDOM('#app', page);
        }));
};

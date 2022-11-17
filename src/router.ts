import { renderDOM } from 'core';
import { Pages, getPageComponent } from 'utils/pageList';
import { CoreRouter } from './Router/CoreRouter';
import { PATHS } from './constants';

const routes = [
    {
        path: PATHS.START,
        block: Pages.Start,
    },
    {
        path: PATHS.SIGNIN,
        block: Pages.Signin,
    },
    {
        path: PATHS.SIGNUP,
        block: Pages.Signup,
    },
    {
        path: PATHS.PROFILE,
        block: Pages.Profile,
    },
    {
        path: PATHS.PROFILE_CHANGE,
        block: Pages.ProfileChange,
    },
    {
        path: PATHS.PASSWORD_CHANGE,
        block: Pages.PasswordChange,
    },
    {
        path: PATHS.CHAT,
        block: Pages.Chat,
    },
    {
        path: PATHS.NOT_FOUND,
        block: Pages.NotFound,
    },
    {
        path: PATHS.SERVER_ERROR,
        block: Pages.ServerError,
    },
];

export const initRouter = (router: CoreRouter) => {
    routes.forEach(({ path, block }) => router.use(path, () => {
        const Block = getPageComponent(block);

        const page = new Block({});
        renderDOM('#app', page);
    }));

    router.start();
};

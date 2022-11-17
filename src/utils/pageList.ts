import { BlockClass } from 'core';
import {
    StartPage,
    SigninPage,
    SignupPage,
    ProfilePage,
    ProfileChangePage,
    PasswordChangePage,
    ServerErrorPage,
    ErrorPage,
    ChatPage,
} from 'blocks';

export enum Pages {
    Start = 'start',
    Signin = 'signin',
    Signup = 'signup',
    Profile = 'profile',
    ProfileChange = 'profile_change',
    PasswordChange = 'password_change',
    Chat = 'chat',
    NotFound = 'not_found',
    ServerError = 'server_error',
}

const pagesMapping: Record<Pages, BlockClass> = {
    [Pages.Start]: StartPage,
    [Pages.Signin]: SigninPage,
    [Pages.Signup]: SignupPage,
    [Pages.Profile]: ProfilePage,
    [Pages.ProfileChange]: ProfileChangePage,
    [Pages.PasswordChange]: PasswordChangePage,
    [Pages.Chat]: ChatPage,
    [Pages.NotFound]: ErrorPage,
    [Pages.ServerError]: ServerErrorPage,
};

export const getPageComponent = (page: Pages) => pagesMapping[page];

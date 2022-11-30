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

import {
    signinData,
    chatsData,
    startData,
    signupData,
    profileData,
    errorData,
} from 'data';

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

const pagesMapping: Record<Pages, BlockClass<any>> = {
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

const dataMapping: Record<Pages, Record<string, unknown>> = {
    [Pages.Start]: startData,
    [Pages.Signin]: signinData,
    [Pages.Signup]: signupData,
    [Pages.Profile]: profileData,
    [Pages.ProfileChange]: profileData,
    [Pages.PasswordChange]: profileData,
    [Pages.Chat]: chatsData,
    [Pages.NotFound]: errorData.four,
    [Pages.ServerError]: errorData.five,
};

export const getPageWithData = (page: Pages) => ({
    Block: pagesMapping[page],
    data: dataMapping[page],
});

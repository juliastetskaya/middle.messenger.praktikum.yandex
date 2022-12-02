import { authAPI } from 'API/auth-api';

const withErrorHandler = (callback: Function) => async (...args: unknown[]) => {
    const response = await callback.call(null, ...args);

    if (response.status !== 200) {
        throw new Error(JSON.parse(response.responseText).reason);
    }

    if (response.responseText === 'OK') {
        return response;
    }

    return JSON.parse(response.responseText);
};

export const signinWithErrorHandler = withErrorHandler(authAPI.signin);
export const signupWithErrorHandler = withErrorHandler(authAPI.signup);
export const logoutWithErrorHandler = withErrorHandler(authAPI.logout);
export const getUserWithErrorHandler = withErrorHandler(authAPI.getUser);

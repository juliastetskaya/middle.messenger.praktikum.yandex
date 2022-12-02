import { SignupData, SigninData } from 'API/auth-api';
import {
    signinWithErrorHandler,
    signupWithErrorHandler,
    getUserWithErrorHandler,
    logoutWithErrorHandler,
} from 'API/fetchAPI';
import { PATHS } from '../constants';

export const signin: DispatchState<SigninData> = async (dispatch, _, action) => {
    dispatch({ isLoading: true });

    try {
        await signinWithErrorHandler(action);

        const user = await getUserWithErrorHandler();

        dispatch({ user, isLoading: false, error: null });

        window.router.go(PATHS.CHAT);
    } catch (error) {
        dispatch({ error, isLoading: false, user: null });
    }
};

export const signup: DispatchState<SignupData> = async (dispatch, _, action) => {
    dispatch({ isLoading: true });

    try {
        await signupWithErrorHandler(action);

        const user = await getUserWithErrorHandler();

        dispatch({ user, isLoading: false, error: null });

        window.router.go(PATHS.CHAT);
    } catch (error) {
        dispatch({ error, isLoading: false, user: null });
    }
};

export const logout: DispatchState = async (dispatch) => {
    try {
        await logoutWithErrorHandler();

        window.router.go(PATHS.SIGNIN);
    } catch (error) {
        dispatch({ error, user: null });
    }
};

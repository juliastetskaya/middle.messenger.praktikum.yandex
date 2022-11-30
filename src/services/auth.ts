import { authAPI, SignupData, SigninData } from 'API/auth-api';
import { PATHS } from '../constants';

export const signin: DispatchState<SigninData> = async (dispatch, _, action) => {
    dispatch({ isLoading: true });
    try {
        await authAPI.signin(action);

        try {
            const user = await authAPI.getUser();

            dispatch({ user });

            window.router.go(PATHS.CHAT);
        } catch (error) {
            dispatch({ error, isLoading: false });
        }
    } catch (error) {
        dispatch({ error, isLoading: false });
    }
};

export const signup = async (data: SignupData) => {
    try {
        await authAPI.signup(data);

        try {
            await authAPI.getUser();

            window.router.go(PATHS.CHAT);
        } catch (error) {
            console.log('GET USER ERROR', error);
        }
    } catch (error) {
        console.log('SIGNUP ERROR', error);
    }
};

export const logout = async () => {
    try {
        const response = await authAPI.logout();

        console.log(response);

        window.router.go(PATHS.SIGNIN);
    } catch (error) {
        console.log('LOGOUT ERROR', error);
    }
};

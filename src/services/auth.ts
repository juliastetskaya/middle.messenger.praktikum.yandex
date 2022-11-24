import { authAPI, SignupData, SigninData } from 'API/auth-api';
import { PATHS } from '../constants';

export const signin = async (data: SigninData) => {
    try {
        await authAPI.signin(data);

        try {
            await authAPI.getUser();

            window.router.go(PATHS.CHAT);
        } catch (error) {
            console.log('GET USER ERROR', error);
        }
    } catch (error) {
        console.log('SIGNIN ERROR', error);
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
        await authAPI.logout();

        window.router.go(PATHS.SIGNIN);
    } catch (error) {
        console.log('LOGOUT ERROR', error);
    }
};

import { router } from 'core';
import { ProfileData, PasswordData } from 'API/user-api';
import {
    updateProfileWithErrorHandler,
    updateAvatarWithErrorHandler,
    updatePasswordWithErrorHandler,
    getUserByIdWithErrorHandler,
} from 'API/fetchAPI';
import { ROUTES } from '../constants';

export const updateProfile: DispatchState<ProfileData> = async (dispatch, _, action) => {
    dispatch({ isLoading: true });

    try {
        const user = await updateProfileWithErrorHandler(action);

        dispatch({ user, isLoading: false, error: null });

        router.go(ROUTES.PROFILE);
    } catch (error) {
        dispatch({ error, isLoading: false, user: null });
    }
};

export const updatePassword: DispatchState<PasswordData> = async (dispatch, _, action) => {
    dispatch({ isLoading: true });

    try {
        await updatePasswordWithErrorHandler(action);

        dispatch({ isLoading: false, error: null });

        router.go(ROUTES.PROFILE);
    } catch (error) {
        dispatch({ error, isLoading: false, user: null });
    }
};

export const updateAvatar: DispatchState = async (dispatch, _, action) => {
    dispatch({ isLoading: true });

    try {
        const user = await updateAvatarWithErrorHandler(action);

        dispatch({ user, isLoading: false, error: null });
    } catch (error) {
        dispatch({ error, isLoading: false, user: null });
    }
};

export const getUserById = async (action: number) => {
    try {
        return await getUserByIdWithErrorHandler(action);
    } catch (error) {
        console.error(error);

        return null;
    }
};

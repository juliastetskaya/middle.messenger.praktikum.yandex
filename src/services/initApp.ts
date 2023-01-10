import { getUserWithErrorHandler } from 'API/fetchAPI';

export const initApp: DispatchState = async (dispatch) => {
    dispatch({ isLoading: true });

    try {
        const user = await getUserWithErrorHandler();

        dispatch({ user, isLoading: false, error: null });
    } catch (error) {
        console.error(error);
    } finally {
        dispatch({ isInited: true });
    }
};

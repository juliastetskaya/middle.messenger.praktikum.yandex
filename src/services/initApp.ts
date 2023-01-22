import { getUserWithErrorHandler } from 'API/fetchAPI';

export const initApp: DispatchState = async (dispatch) => {
    dispatch({ isLoading: true });

    try {
        const user = await getUserWithErrorHandler();

        dispatch({ user, error: null });
    } catch (error) {
        console.error(error);
        dispatch({ user: null, error });
    } finally {
        dispatch({ isLoading: false });
    }
};

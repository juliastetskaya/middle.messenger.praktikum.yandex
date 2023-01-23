import {
    getChatsWithErrorHandler,
    createChatWithErrorHandler,
    deleteChatWithErrorHandler,
    addUsersToChatWithErrorHandler,
    deleteUsersToChatWithErrorHandler,
} from 'API/fetchAPI';

export const getChats: DispatchState = async (dispatch, _, action) => {
    dispatch({ isLoading: true });

    try {
        const chats = await getChatsWithErrorHandler(action);

        dispatch({ chats, isLoading: false, error: null });
    } catch (error) {
        dispatch({ error, isLoading: false, chats: null });
    }
};

export const createChat: DispatchState = async (dispatch, _, action) => {
    dispatch({ isLoading: true });

    try {
        await createChatWithErrorHandler(action);

        dispatch({ isLoading: false, error: null });
    } catch (error) {
        dispatch({ error, isLoading: false });
    }
};

export const deleteChat: DispatchState = async (dispatch, _, action) => {
    dispatch({ isLoading: true });

    try {
        await deleteChatWithErrorHandler(action);

        dispatch({ isLoading: false, error: null });
    } catch (error) {
        dispatch({ error, isLoading: false });
    }
};

export const addUsersToChat: DispatchState = async (dispatch, _, action) => {
    dispatch({ isLoading: true });

    try {
        await addUsersToChatWithErrorHandler(action);

        dispatch({ isLoading: false, error: null });
    } catch (error) {
        dispatch({ error, isLoading: false });
    }
};

export const deleteUsersToChat: DispatchState = async (dispatch, _, action) => {
    dispatch({ isLoading: true });

    try {
        await deleteUsersToChatWithErrorHandler(action);

        dispatch({ isLoading: false, error: null });
    } catch (error) {
        dispatch({ error, isLoading: false });
    }
};

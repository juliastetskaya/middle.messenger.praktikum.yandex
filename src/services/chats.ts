import {
    getChatsWithErrorHandler,
    getTokenWithErrorHandler,
    deleteChatWithErrorHandler,
    createChatWithErrorHandler,
    addUserToChatWithErrorHandler,
    deleteUsersWithErrorHandler,
    getChatsByTitleWithErrorHandler,
} from 'API/fetchAPI';
import { ActionType } from 'blocks/ChatPage';
import { Chat } from 'HOC/withChats';

export const getChats: DispatchState = async (dispatch) => {
    dispatch({ isLoading: true });

    try {
        const chats = await getChatsWithErrorHandler();

        dispatch({ chats, isLoading: false, error: null });
    } catch (error) {
        dispatch({ error, isLoading: false });
    }
};

export const createChat: DispatchState<{ title: string }> = async (dispatch, _, action) => {
    try {
        await createChatWithErrorHandler(action);

        const chats = await getChatsWithErrorHandler();
        const [activeChat] = await getChatsByTitleWithErrorHandler(action.title);

        dispatch({ chats, activeChat });
    } catch (error) {
        console.log(error);
    }
};

export const deleteChat: DispatchState = async (dispatch, state, id) => {
    try {
        await deleteChatWithErrorHandler({ chatId: id });

        const chats = state.chats?.filter((chat) => chat.id !== id);

        dispatch({ chats, activeChat: null });
    } catch (error) {
        console.error(error);
    }
};

export const addUserToChat = async (action: ActionType) => {
    try {
        await addUserToChatWithErrorHandler(action);
    } catch (error) {
        console.error(error);
    }
};

export const deleteUsers = async (action: ActionType) => {
    try {
        await deleteUsersWithErrorHandler(action);

        return await getChatsWithErrorHandler();
    } catch (error) {
        console.error(error);

        return null;
    }
};

export const getToken: DispatchState<Chat> = async (dispatch, _, chat) => {
    try {
        const token = await getTokenWithErrorHandler(chat.id);

        dispatch({ activeChat: { ...chat, token } });
    } catch (error) {
        dispatch({ error });
    }
};

export const getChatsByTitle: DispatchState = async (dispatch, _, action) => {
    try {
        const chats = await getChatsByTitleWithErrorHandler(action);

        dispatch({ chats });
    } catch (error) {
        console.error(error);
    }
};

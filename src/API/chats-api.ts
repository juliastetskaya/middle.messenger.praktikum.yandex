import { HTTPTransport } from 'core';
import { getRequestBody } from 'utils';
import { BASE_URL } from '../constants';

export type ChatData = {
    title: string;
};

export type PasswordData = {
    oldPassword: string;
    newPassword: string;
};

const chatsAPIInstance = new HTTPTransport(`${BASE_URL}/chats`);

export const chatsAPI = {
    getChats: () => chatsAPIInstance.get('', getRequestBody()),

    getChatsByTitle: (title: string) => chatsAPIInstance.get(`?title=${title}`, getRequestBody()),

    createChat: (data: { title: string }) => chatsAPIInstance.post('', getRequestBody(data)),

    deleteChat: (data: { chatId: number }) => chatsAPIInstance.delete('', getRequestBody(data)),

    addUserToChat: (data: { user: string, chatId: number }) => chatsAPIInstance.put('/users', getRequestBody(data)),

    deleteUsers: (data: { users: Array<string>, chatId: number }) => chatsAPIInstance.delete('/users', getRequestBody(data)),

    getToken: (chatId: number) => chatsAPIInstance.post(`/token/${chatId}`, getRequestBody()),
};

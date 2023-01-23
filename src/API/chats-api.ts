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

    createChat: (data: { title: string }) => chatsAPIInstance.put('', getRequestBody(data)),

    deleteChat: (data: { chatId: number }) => chatsAPIInstance.delete('', getRequestBody(data)),

    addUsersToChat: (data: { users: Array<string>, chatId: number }) => chatsAPIInstance.put('/users', getRequestBody(data)),

    deleteUsersToChat: (data: { users: Array<string>, chatId: number }) => chatsAPIInstance.delete('/users', getRequestBody(data)),
};

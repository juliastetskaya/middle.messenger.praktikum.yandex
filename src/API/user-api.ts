import { HTTPTransport } from 'core';
import { getRequestBody } from 'utils';
import { BASE_URL } from '../constants';

export type ProfileData = {
    first_name: string;
    second_name: string;
    display_name: string;
    login: string;
    email: string;
    phone: string;
};

export type PasswordData = {
    oldPassword: string;
    newPassword: string;
};

const userAPIInstance = new HTTPTransport(`${BASE_URL}/user`);

export const userAPI = {
    updateProfile: (data: ProfileData) => userAPIInstance.put('/profile', getRequestBody(data)),

    updateAvatar: (data: FormData) => userAPIInstance.put('/profile/avatar', { includeCredentials: true, data }),

    updatePassword: (data: PasswordData) => userAPIInstance.put('/password', getRequestBody(data)),

    searchUsers: (data: { login: string }) => userAPIInstance.get('/search', getRequestBody(data)),
};

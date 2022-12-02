import { HTTPTransport } from 'core';
import { BASE_URL } from '../constants';
import { baseHeaders } from './baseHeaders';

export type SigninData = {
    login: string;
    password: string;
};

export type SignupData = {
    first_name: string;
    second_name: string;
    login: string;
    email: string;
    password: string;
    phone: string;
};

const authAPIInstance = new HTTPTransport(`${BASE_URL}/auth`);

export const authAPI = {
    signin: async (data: SigninData) => authAPIInstance.post('/signin', {
        data: JSON.stringify(data),
        headers: baseHeaders,
    }),

    signup: async (data: SignupData) => authAPIInstance.post('/signup', {
        data: JSON.stringify(data),
        headers: baseHeaders,
    }),

    getUser: () => authAPIInstance.get('/user', { headers: baseHeaders }),

    logout: () => authAPIInstance.post('/logout', { headers: baseHeaders }),
};

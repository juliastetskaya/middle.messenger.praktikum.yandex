import { HTTPTransport } from 'core';
import { getRequestBody } from 'utils';
import { BASE_URL } from '../constants';

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
    signin: (data: SigninData) => authAPIInstance.post('/signin', getRequestBody(data)),

    signup: (data: SignupData) => authAPIInstance.post('/signup', getRequestBody(data)),

    getUser: () => authAPIInstance.get('/user', getRequestBody()),

    logout: () => authAPIInstance.post('/logout', getRequestBody()),
};

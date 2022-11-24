import { HTTPTransport } from 'core/fetch';
import { checkResponse } from 'utils';
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
    signin: async (data: SigninData) => {
        const response = await authAPIInstance.post('/signin', {
            data: JSON.stringify(data),
            headers: baseHeaders,
        });

        return checkResponse(response);
    },

    signup: async (data: SignupData) => {
        const response = await authAPIInstance.post('/signup', {
            data: JSON.stringify(data),
            headers: baseHeaders,
        });

        return checkResponse(response);
    },

    getUser: async () => {
        const response = await authAPIInstance.get('/user', { headers: baseHeaders });

        return checkResponse(response);
    },

    logout: async () => {
        const response = await authAPIInstance.post('/logout', { headers: baseHeaders });

        return checkResponse(response);
    },
};

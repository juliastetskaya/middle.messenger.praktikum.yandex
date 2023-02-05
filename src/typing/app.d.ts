import { Chat } from '../HOC/withChats';

declare global {
    export type Nullable<T> = T | null;

    export type Keys<T extends Record<string, unknown>> = keyof T;
    export type Values<T extends Record<string, unknown>> = T[Keys<T>];

    export type User = {
        login: string;
        first_name: string;
        second_name: string;
        display_name: string;
        phone: string;
        email: string;
        avatar: string;
    };

    export type AppState = {
        user: Nullable<User>;
        error: Nullable<string>;
        isLoading: boolean;
        chats: Nullable<Array<Chat>>;
        activeChat: Nullable<Chat>;
    };

    type DispatchState<T = {}> = (dispatch: Dispatch<AppState>, state: AppState, action: T) => Promise<void>;

    module '*.svg';
    module '*.json';
    module '*.png';
}

export {};

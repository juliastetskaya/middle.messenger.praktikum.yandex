declare global {
    export type Nullable<T> = T | null;

    export type Keys<T extends Record<string, unknown>> = keyof T;
    export type Values<T extends Record<string, unknown>> = T[Keys<T>];

    export type User = {
        login: string;
        firstName: string;
        secondName: string;
        displayName: string;
        phone: string;
        email: string;
    };

    export type AppState = {
        user: Nullable<User>;
        error: Nullable<string>;
        isLoading: boolean;
    };

    module '*.svg';
    module '*.json';
    module '*.png';
}

export {};

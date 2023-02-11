import { BlockClass } from 'core';
import { withStore } from 'HOC';

export function withChats<P>(Component: BlockClass<P>) {
    const mapStateToProps = (state: AppState) => ({ chats: state.chats });

    return withStore<P, ChatsStateProps>(mapStateToProps)(Component);
}

type LastMessage = {
    user: User;
    time: string;
    content: string;
};

export type Chat = {
    id: number;
    title: string;
    avatar: Nullable<string>;
    created_by: number;
    lastMessage: LastMessage;
    unread_count: number;
    token: string;
    users: User[];
};

export interface ChatsStateProps {
    chats: Nullable<Chat[]>;
}

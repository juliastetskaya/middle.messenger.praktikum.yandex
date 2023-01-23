import { BlockClass } from 'core';

export function withChats<P extends WithChatsProps>(Component: BlockClass<P>) {
    return class extends Component {
        constructor(props: P) {
            super({
                ...props,
                chats: window.store.getState().chats,
            });
        }

        componentDidMount(props: P) {
            super.componentDidMount(props);
            window.store.on('changed', this.__onChangeStoreCallback);
        }

        componentWillUnmount() {
            super.componentWillUnmount();
            window.store.off('changed', this.__onChangeStoreCallback);
        }

        __onChangeStoreCallback = (prevState: AppState, nextState: AppState) => {
            if (JSON.stringify(prevState.chats) !== JSON.stringify(nextState.chats)) {
                this.setProps({ ...this.props, chats: nextState.chats });
            }
        };
    } as unknown as BlockClass<Omit<P, 'chats'>>;
}

type LastMessage = {
    user: User;
    time: string;
    content: string;
};

export type Chats = {
    id: number;
    title: string;
    avatar: Nullable<string>;
    created_by: number;
    lastMessage: LastMessage;
    unread_count: number;
};

export interface WithChatsProps {
    chats: Chats;
}

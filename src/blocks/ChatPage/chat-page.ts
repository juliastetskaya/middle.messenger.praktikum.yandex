import { Block } from 'core';
import { Chat } from 'HOC/withChats';
import { withDispatch, withStore, DispatchStateProps } from 'HOC';
import {
    UserChangeProps,
    TextMessageProps,
    ImageMessageProps,
    ButtonProps,
    LinkProps,
} from 'components';
import {
    getChats,
    getToken,
    deleteChat,
    addUserToChat,
    deleteUsers,
    createChat,
} from 'services/chats';

import './chat.css';

enum UserMenuActions {
    CLOSE_CHAT = 'Закрыть чат',
    DELETE_CHAT = 'Удалить чат',
    ADD_USER = 'Добавить пользователя',
    DELETE_USER = 'Удалить пользователя',
}

export type ActionType = {
    users: string[];
    chatId: number;
};

interface ChatStateProps {
    user: User;
    chats: Chat[];
    isLoading: boolean;
    activeChat: Nullable<Chat>;
}

interface ChatPageProps extends DispatchStateProps, ChatStateProps {
    link: LinkProps;
    searchPlaceholder: string;
    rightSidePlaceholder: string;
    addUser: UserChangeProps;
    removeUser: UserChangeProps;
    message: TextMessageProps;
    myMessage: TextMessageProps;
    chatName: string;
    userMenu: LinkProps[];
    placeholder: string;
    messageMenu: LinkProps[];
    messageDate: string;
    imageMessage: ImageMessageProps;
    button: ButtonProps;
    searchValue: string;
    inputValue: string;
    getToken: (chat: Chat) => void;
    onSearchInput: (e: Event) => void;
    handleChatMenu: () => void;
    addUserToChat: (values: { user_id: string }) => void;
    deleteUserFromChat: (values: { user_id: string }) => void;
    createNewChat: (values: { title: string }) => void;
    handleClickCreateChat: () => void;
}

class ChatPage extends Block<ChatPageProps> {
    static componentName = 'ChatPage';

    userMenuActions: Record<string, () => void>;

    constructor(props: ChatPageProps) {
        super(props);

        this.userMenuActions = {
            [UserMenuActions.CLOSE_CHAT]: this.closeActiveChat,
            [UserMenuActions.DELETE_CHAT]: this.deleteChat,
            [UserMenuActions.ADD_USER]: this.handleClickAddUserToChat,
            [UserMenuActions.DELETE_USER]: this.handleCkickDeleteUserFromChat,
        };

        this.setProps({
            userMenu: this.props.userMenu.map((item) => ({ ...item, onClick: this.userMenuActions[item.text] })),
            getToken: this.getToken,
            createNewChat: this.createChat,
            addUserToChat: this.addUserToChat,
            onSearchInput: this.onSearchInput,
            handleChatMenu: this.handleChatMenu,
            deleteUserFromChat: this.deleteUserFromChat,
            handleClickCreateChat: this.handleClickCreateChat,
        });
    }

    componentDidMount() {
        if (!this.props.chats) {
            this.props.dispatch(getChats);
        }
    }

    getToken = (chat: Chat) => () => {
        if (chat.id !== this.props.activeChat?.id) {
            this.props.dispatch(getToken, chat);
            this.updateChats(chat);
        }
    };

    onSearchInput = (event: Event) => {
        const { value } = event.target as HTMLInputElement;

        const newChats = this.props.chats?.filter((chat) => chat.title.includes(value.trim()));

        this.refs.chatListRef.setProps({ chats: newChats });
    };

    updateChats = (chat: Chat) => {
        const currentChatIndex = this.props.chats.findIndex((item) => item.id === chat.id);
        this.props.chats[currentChatIndex] = { ...chat, unread_count: 0 };
    };

    handleChatMenu = () => {
        const userMenuEl = document.querySelector('.user-menu');
        userMenuEl?.classList.toggle('active-menu');
    };

    closeActiveChat = () => {
        this.props.dispatch({ activeChat: null });
    };

    deleteChat = () => {
        if (this.props.activeChat) {
            this.props.dispatch(deleteChat, this.props.activeChat.id);
        }
    };

    handleClickAddUserToChat = () => {
        const addUserEl = document.querySelector('.add-user');
        const overlayEl = document.querySelector('.overlay');
        const userMenuEl = document.querySelector('.user-menu');

        addUserEl?.classList.add('active-user-panel');
        overlayEl?.classList.add('active-overlay');
        userMenuEl?.classList.remove('active-menu');
    };

    handleCkickDeleteUserFromChat = () => {
        const removeUserEl = document.querySelector('.remove-user');
        const overlayEl = document.querySelector('.overlay');
        const userMenuEl = document.querySelector('.user-menu');

        removeUserEl?.classList.add('active-user-panel');
        overlayEl?.classList.add('active-overlay');
        userMenuEl?.classList.remove('active-menu');
    };

    addUserToChat = (values: { user_id: string }) => {
        const action = {
            users: [values.user_id],
            chatId: this.props.activeChat!.id,
        };
        addUserToChat(action);

        const addUserEl = document.querySelector('.add-user');
        const overlayEl = document.querySelector('.overlay');

        addUserEl?.classList.remove('active-user-panel');
        overlayEl?.classList.remove('active-overlay');
    };

    deleteUserFromChat = async (values: { user_id: string }) => {
        const action = {
            users: [values.user_id],
            chatId: this.props.activeChat!.id,
        };

        const newChats = await deleteUsers(action);

        const removeUserEl = document.querySelector('.remove-user');
        const overlayEl = document.querySelector('.overlay');

        removeUserEl?.classList.remove('active-user-panel');
        overlayEl?.classList.remove('active-overlay');

        if (this.props.chats.length !== newChats.length) {
            this.setProps({ activeChat: null, chats: newChats });
        } else {
            this.refs.removeUserRef.setProps({ inputValue: '' });
        }
    };

    handleClickCreateChat = () => {
        const createChatEl = document.querySelector('.create-chat');
        const overlayEl = document.querySelector('.overlay');

        createChatEl?.classList.add('active-user-panel');
        overlayEl?.classList.add('active-overlay');
    };

    createChat = (values: { title: string }) => {
        this.props.dispatch(createChat, { title: values.title });
    };

    render() {
        return `
            <div>
                <div class='container'>
                    {{#if isLoading}}
                        {{{ Spinner }}}
                    {{else}}
                        <div class="chat">
                            <aside class="left-side">
                                {{{ Link class="chat__profile-link" to=link.to text=link.text }}}
                                {{{ SearchInput placeholder=searchPlaceholder onInput=onSearchInput }}}
                                {{{ ChatList chats=chats getToken=getToken ref="chatListRef" }}}
                            </aside>
                            <div class="right-side">
                                {{#if activeChat}}
                                    {{{ ChatArea
                                        userMenu=userMenu
                                        handleChatMenu=handleChatMenu
                                        messageMenu=messageMenu
                                        placeholder=placeholder
                                        button=button
                                    }}}
                                {{else}}
                                    <div>
                                        {{rightSidePlaceholder}}
                                        {{{ Link class="here-link" text="здесь" onClick=handleClickCreateChat }}}
                                    </div>
                                {{/if}}
                            </div>
                            {{{ UserChange
                                class="add-user"
                                inputValue=""
                                title=addUser.title
                                button=addUser.button
                                input=addUser.input
                                request=addUserToChat
                            }}}
                            {{{ UserChange
                                class="remove-user"
                                inputValue=""
                                title=removeUser.title
                                button=removeUser.button
                                input=removeUser.input
                                request=deleteUserFromChat
                                ref="removeUserRef"
                            }}}
                            {{{ UserChange
                                class="create-chat"
                                inputValue=""
                                title=createChat.title
                                button=createChat.button
                                input=createChat.input
                                request=createNewChat
                            }}}
                        </div>
                    {{/if}}
                </div>
                {{{ Overlay }}}
            </div>
        `;
    }
}

const mapStateToProps = (state: AppState) => ({
    user: state.user,
    chats: state.chats,
    isLoading: state.isLoading,
    activeChat: state.activeChat,
});

export default withStore<ChatPageProps>(mapStateToProps)(withDispatch(ChatPage));

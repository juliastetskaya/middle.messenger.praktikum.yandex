import { Block } from 'core';
import { Chat } from 'HOC/withChats';
import { LinkProps, ButtonProps } from 'components';
import { WebSocketTransport } from 'services/webSocket';
import { validateAndGetInputData, getMessagesByDate } from 'utils';
import { withStore, withUser } from 'HOC';

import './chat-area.css';

export type ChatMessage = {
    chat_id: number;
    content: string;
    id: number;
    user_id: number;
    time: string;
    type: string;
    file: Nullable<File>;
    is_read: boolean;
};

type ChatAreaProps = {
    user: User;
    chat: Chat;
    userMenu: LinkProps[];
    button: ButtonProps;
    handleChatMenu?: () => void;
    chatMessages: ChatMessage[];
    messages: ChatMessage[];
    dates: string[];
    isLoading: boolean;
};

class ChatArea extends Block<ChatAreaProps> {
    static componentName = 'ChatArea';

    private socket: Nullable<WebSocketTransport>;

    constructor(props: ChatAreaProps) {
        super(props);

        this.socket = null;

        this.setProps({
            button: { onClick: this.sendMessage },
        });
    }

    __onMessageArrivedCallback = (data: ChatMessage | ChatMessage[]) => {
        const { chatMessages, user, chat: { users } } = this.props;
        const chatData = Array.isArray(data) ? data : [data, ...(chatMessages || [])];
        const { messages, dates } = getMessagesByDate(chatData, user.id, users);
        this.setProps({ dates, chatMessages: chatData, messages });
        this.refs.messageAreaRef.setProps({ isLoading: false });

        const messageAreaEl = document.querySelector('.messages-area') as HTMLElement;
        messageAreaEl.scrollTo(0, messageAreaEl.scrollHeight);
    };

    componentDidMount = () => {
        const { user, chat } = this.props;

        if (chat) {
            this.socket = new WebSocketTransport(user.id, chat.id, chat.token);
            this.socket.on('message-arrived', this.__onMessageArrivedCallback);
            this.refs.messageAreaRef.setProps({ isLoading: true });
        }
    };

    componentWillUnmount = () => {
        this.socket?.off('message-arrived', this.__onMessageArrivedCallback);
    };

    sendMessage = (e: Event) => {
        e.preventDefault();
        const values = validateAndGetInputData([{ name: 'message' }], this.element) as { message: string };

        if (values) {
            console.log('Form is ready to send data:', values);
            this.socket?.send(values.message);
        }
    };

    render() {
        return `
            <div class="chat-area-wrapper">
                {{{ ChatTitle chat=chat userMenu=userMenu onClick=handleChatMenu }}}
                {{{ MessageArea dates=dates messages=messages isLoading=isLoadong ref="messageAreaRef" }}}
                {{{ ChatMessage
                    messageMenu=messageMenu
                    placeholder=placeholder
                    button=button
                }}}
            </div>
        `;
    }
}

const mapStateToProps = (state: AppState) => ({
    chat: state.activeChat,
});

export default withStore<ChatAreaProps>(mapStateToProps)(withUser(ChatArea));

import Block from 'core/Block';
import { Chat } from 'HOC/withChats';

type ChatListProps = {
    chats: Chat[];
    getToken: (chat: Chat) => void;
};

export class ChatList extends Block<ChatListProps> {
    static componentName = 'ChatList';

    constructor(props: ChatListProps) {
        super(props);

        this.setProps({
            chats: this.props.chats?.map((chat) => ({ ...chat, onClick: this.props.getToken && this.props.getToken(chat) })),
        });
    }

    render() {
        return `
            <ul class="chat-list">
                {{#each chats}}
                    {{{ ChatItem
                        id=id
                        chatName=title
                        time=time
                        text=last_message
                        count=unread_count
                        onClick=onClick
                    }}}
                {{/each}}
            </ul>
        `;
    }
}

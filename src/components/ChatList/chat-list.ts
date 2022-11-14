import Block from 'core/Block';

import { MessageProps } from '../Message';

type ChatListProps = {
    chats: MessageProps[];
};

export class ChatList extends Block<ChatListProps> {
    static componentName = 'ChatList';

    render() {
        return `
            <ul class="chat-list">
                {{#each chats}}
                    <li class="chat-list__item">
                        <div class="line"></div>
                        {{{ Message chatName=chatName time=time text=text count=count }}}
                    </li>
                {{/each}}
            </ul>
        `;
    }
}

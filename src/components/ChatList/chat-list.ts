import Block from 'core/Block';

import { MessageProps } from '../Message';

interface ChatListProps {
    chats: MessageProps[];
}

export class ChatList extends Block {
    constructor(props: ChatListProps) {
        super(props);
    }

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

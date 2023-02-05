import Block from 'core/Block';

import { MessageProps } from '../Message';

type ChatItemProps = {
    chats: MessageProps;
    onClick?: (e: Event) => void;
};

type ChatItemBlockProps = ChatItemProps & {
    events: {
        click?: (e: Event) => void;
    }
};

export class ChatItem extends Block<ChatItemBlockProps> {
    static componentName = 'ChatItem';

    constructor({ onClick, ...rest }: ChatItemProps) {
        super({ events: { click: onClick }, ...rest });
    }

    render() {
        return `
            <li class="chat-list__item">
                <div class="line"></div>
                {{{ Message
                    id=id
                    chatName=chatName
                    time=time
                    text=text
                    count=count
                }}}
            </li>
        `;
    }
}

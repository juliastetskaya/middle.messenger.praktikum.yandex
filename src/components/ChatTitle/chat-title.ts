import Block from 'core/Block';
import { Chat } from 'HOC/withChats';

import { LinkProps } from '../Link';

import './chat-title.css';

type ChatTitleProps = {
    chat: Chat;
    userMenu: LinkProps[];
    onClick: () => void;
    getChatUsers: () => void;
};

export class ChatTitle extends Block<ChatTitleProps> {
    static componentName = 'ChatTitle';

    render() {
        return `
            <div class="chat-title">
                <div class="chat-title__avatar"></div>
                <p class="chat-title__name">{{chat.title}}</p>
                {{{ Button type="button" class="chat-title__button" onClick=onClick }}}

                {{{ ChatMenu class="user-menu" links=userMenu }}}
            </div>
            `;
    }
}

import Block from 'core/Block';

import LinkProps from '../Link';

import './chat-title.css';

interface ChatTitleProps {
    chatName: string;
    userMenu: LinkProps[];
}

export class ChatTitle extends Block<ChatTitleProps> {
    constructor(props: ChatTitleProps) {
        super(props);
    }

    render() {
        return `
            <div class="chat-title">
                <div class="chat-title__avatar"></div>
                <p class="chat-title__name">{{chatName}}</p>
                {{{ Button type="button" class="chat-title__button" }}}

                {{{ ChatMenu class="user-menu" links=userMenu }}}
            </div>
            `;
        }
    }

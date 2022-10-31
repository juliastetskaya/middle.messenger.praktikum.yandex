import Block from 'core/Block';

import LinkProps from '../Link';

import './chat-message.css';

interface ChatMessageProps {
    messageMenu: LinkProps[];
}

export class ChatMessage extends Block {
    constructor(props: ChatMessageProps) {
        super(props);
    }

    render() {
        return `
            <div class="chat-message">
                {{{ Button type="button" class="chat-message__menu-button" }}}
                <input class="chat-message__input" type="text" id="message" name="message" placeholder={{placeholder}}>
                {{{ Button type="button" class="chat-message__sent-button" }}}
                {{{ ChatMenu class="message-menu" links=messageMenu }}}
            </div>
        `;
    }
}

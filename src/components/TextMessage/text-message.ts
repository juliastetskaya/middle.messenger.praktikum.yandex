import { Block } from 'core';
import { ChatMessage } from '../ChatArea/chat-area';

import './text-message.css';

export type MessageProps = {
    text: string,
    time: string,
};

type TextMessageProps = {
    class?: string;
    message: ChatMessage;
};

export class TextMessage extends Block<TextMessageProps> {
    static componentName = 'TextMessage';

    render() {
        const checkIconClass = this.props.message.is_read ? 'check-icon' : '';

        return `
            <div {{#if message.isMyMessage}}class="text-message my-message"{{else}}class="text-message"{{/if}}>
                {{#if message.author}}<div class="message-author">{{message.author}}</div>{{/if}}
                <div>{{ message.content }}</div>
                <div class=${checkIconClass}></div>
                <div class="message-time">{{ message.time }}</div>
            </div>
        `;
    }
}

import Block from 'core/Block';

import './text-message.css';

export type MessageProps = {
    text: string,
    time: string,
};

type TextMessageProps = {
    class?: string;
    message: MessageProps;
};

export class TextMessage extends Block<TextMessageProps> {
    static componentName = 'TextMessage';

    render() {
        return `
            <div class="text-message {{class}}">
                {{ message.text }}
                <div class="check-icon"></div>
                <div class="message-time">{{ message.time }}</div>
            </div>
        `;
    }
}

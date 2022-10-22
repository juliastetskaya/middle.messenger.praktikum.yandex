import Block from '../../core/Block';

import './text-message.css';

export interface TextMessageProps {
    class?: string;
    message: {
        text: string;
        time: string;
    };
}

export class TextMessage extends Block {
    constructor(props: TextMessageProps) {
        super(props);
    }

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

import Block from 'core/Block';

import './image-message.css';

export type MessageProps = {
    src: string,
    time: string,
};

type ImageMessageProps = {
    class?: string;
    imageMessage: MessageProps;
};

export class ImageMessage extends Block<ImageMessageProps> {
    render() {
        return `
            <div class="image-message {{class}}">
                <img src={{ imageMessage.src }} alt="image">
                <div class="message-time">{{ imageMessage.time }}</div>
            </div>
        `;
    }
}

import Block from 'core/Block';

import './image-message.css';

export interface ImageMessageProps {
    class?: string;
    imageMessage: {
        src: string;
        time: string;
    };
}

export class ImageMessage extends Block {
    constructor(props: ImageMessageProps) {
        super(props);
    }
    
    render() {
        return `
            <div class="image-message {{class}}">
                <img src={{ imageMessage.src }} alt="image">
                <div class="message-time">{{ imageMessage.time }}</div>
            </div>
        `;
    }
}

import Block from 'core/Block';

import './message.css';

export type MessageProps = {
    id: number;
    chatName: string;
    time: string;
    text: string;
    count: number;
};

export class Message extends Block<MessageProps> {
    static componentName = 'Message';

    render() {
        return `
            <div class="message">
                <div class="message__avatar"></div>
                <div class="message__info">
                    <div class="first-row">
                        <div class="message__chat-name">{{ chatName }}</div>
                        <div class="message__date">{{ time }}</div>
                    </div>
                    <div class="second-row">
                        <div class="message__text">{{ text }}</div>
                        {{#if count}}<div class="message__count">{{ count }}</div>{{/if}}
                    </div>
                </div>
            </div>
        `;
    }
}

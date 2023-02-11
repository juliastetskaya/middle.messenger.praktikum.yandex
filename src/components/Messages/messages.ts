import { Block } from 'core';
import { ChatMessage } from '../ChatArea/chat-area';

export type MessagesProps = {
    date: string;
    messages: ChatMessage[];
};

export class Messages extends Block<MessagesProps> {
    static componentName = 'Messages';

    render() {
        return `
            <div>
                {{#each messages as |message|}}
                    {{{ TextMessage message=message }}}
                {{/each}}
            </div>
        `;
    }
}

import { Block } from 'core';
import { ChatMessage } from '../ChatArea/chat-area';

import './message-area.css';

export type MessageAreaProps = {
    messages: ChatMessage[];
    isLoading: boolean;
};

export class MessageArea extends Block<MessageAreaProps> {
    static componentName = 'MessageArea';

    render() {
        return `
            <div class="messages-area">
                {{#if isLoading}}
                    {{{ Spinner }}}
                {{else}}
                    {{#each dates as |date|}}
                        <div class="message-date">{{date}}</div>
                        {{#each ../messages as |message|}}
                            {{#ifEquals date message.date}}{{{ TextMessage message=message }}}{{/ifEquals}}
                        {{/each}}
                    {{/each}}
                {{/if}}
            </div>
        `;
    }
}

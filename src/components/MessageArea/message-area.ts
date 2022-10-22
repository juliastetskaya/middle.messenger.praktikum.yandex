import Block from '../../core/Block';

import { TextMessageProps } from '../TextMessage';
import { ImageMessageProps } from '../ImageMessage';

import './message-area.css';

export interface MessageAreaProps {
    messageDate: string;
    message: TextMessageProps;
    imageMessage: ImageMessageProps;
    myMessage: TextMessageProps;
}

export class MessageArea extends Block {
    constructor(props: MessageAreaProps) {
        super(props);
    }

    render() {
        console.log('props', this.props);
        return `
            <div class="messages-area">
                <div class="message-date">{{messageDate}}</div>
                {{{ TextMessage message=message }}}
                {{{ ImageMessage imageMessage=imageMessage }}}
                {{{ TextMessage class="my-message" message=myMessage }}}
            </div>
        `;
    }
}

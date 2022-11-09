import Block from 'core/Block';

import LinkProps from '../Link';

import './chat-menu.css';

interface ChatMenuProps {
    class?: string;
    links: LinkProps[];
}

export class ChatMenu extends Block<ChatMenuProps> {
    constructor(props: ChatMenuProps) {
        super(props);
    }

    render() {
        return `
            <div class="chat-menu {{class}}">
                <ul class="chat-menu__list">
                    {{#each links}}
                        <li class="chat-menu__item">
                            {{{ Link href=href text=text }}}
                        </li>
                    {{/each}}
                </ul>
            </div>
        `;
    }
}

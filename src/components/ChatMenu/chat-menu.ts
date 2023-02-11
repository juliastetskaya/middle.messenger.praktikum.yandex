import Block from 'core/Block';

import { LinkProps } from '../Link';

import './chat-menu.css';

type ChatMenuProps = {
    class?: string;
    links: LinkProps[];
};

export class ChatMenu extends Block<ChatMenuProps> {
    static componentName = 'ChatMenu';

    render() {
        return `
            <div class="chat-menu {{class}}">
                <ul class="chat-menu__list">
                    {{#each links}}
                        <li class="chat-menu__item">
                            {{{ Button class="menu-item__button" text=text onClick=onClick }}}
                        </li>
                    {{/each}}
                </ul>
            </div>
        `;
    }
}

import { Block } from 'core';

import './left-menu.css';

export class LeftMenu extends Block {
    static componentName = 'LeftMenu';

    render() {
        return `
            <div class="left-menu">
                {{{ Link class="arrow-button" to='/chat-page' }}}
            </div>
        `;
    }
}

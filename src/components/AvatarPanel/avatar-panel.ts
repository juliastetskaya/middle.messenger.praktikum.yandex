import Block from 'core/Block';

import data from 'data/avatar';

import './avatar-panel.css';

const { title, link, button } = data;

export class AvatarPanel extends Block {
    constructor() {
        super({ title, link, button });
    }

    render() {
        return `
            <div class="panel avatar-panel">
                <h1 class="panel__title">{{ title }}</h1>
                {{{ Link class="panel__link" text=link.text href=link.href }}}
                {{{ Button class="avatar-panel__button" text=button.text }}}
            </div>
        `;
    }
}

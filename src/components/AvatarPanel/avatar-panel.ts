import Block from '../../core/Block';

import { title, linkText, linkHref, textButton } from '../../data/avatar.json';

import './avatar-panel.css';

export class AvatarPanel extends Block {
    constructor() {
        super({
            title,
            linkText,
            linkHref,
            textButton,
        });
    }

    render() {
        return `
            <div class="panel avatar-panel">
                <h1 class="panel__title">{{ title }}</h1>
                {{{ Link class="panel__link" linkText=linkText linkHref=linkHref }}}
                {{{ Button class="avatar-panel__button" text=textButton }}}
            </div>
        `;
    }
}

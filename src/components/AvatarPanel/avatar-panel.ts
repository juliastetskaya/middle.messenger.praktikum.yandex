import Block from 'core/Block';
import { LinkProps } from 'components/Link';
import { ButtonProps } from 'components/Button';

import data from 'data/avatar';

import './avatar-panel.css';

const { title, link, button } = data;

type AvatarPanelProps = {
    title: string;
    link: LinkProps;
    button: ButtonProps;
};

export class AvatarPanel extends Block<AvatarPanelProps> {
    constructor() {
        super({ title, link, button } as AvatarPanelProps);
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

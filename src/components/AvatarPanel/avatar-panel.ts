import Block from 'core/Block';
import { LinkProps, ButtonProps } from 'components';

import './avatar-panel.css';

type AvatarPanelProps = {
    title: string;
    link: LinkProps;
    button: ButtonProps;
};

export class AvatarPanel extends Block<AvatarPanelProps> {
    static componentName = 'AvatarPanel';

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

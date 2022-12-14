import Block from 'core/Block';
import { InputProps } from '../Input';
import { LinkProps } from '../Link';

import './panel.css';

export type PanelProps = {
    class?: string;
    text: string;
    button: {
        text: string,
        onClick: () => void,
    };
    link: LinkProps,
    fields: InputProps[];
};

export class Panel extends Block<PanelProps> {
    static componentName = 'Panel';

    render() {
        return `
            <div class="panel {{class}}">
                <h1 class="panel__title">{{ text }}</h1>
                {{{ Form class="panel__form" fields=fields ref="formRef" button=button }}}
                {{{ Link class="panel__link" href=link.href text=link.text }}}
            </div>
        `;
    }
}

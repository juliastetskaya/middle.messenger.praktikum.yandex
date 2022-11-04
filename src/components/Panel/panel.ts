import Block from 'core/Block';
import InputProps from '../Input';

import './panel.css';

export type PanelProps = {
    class?: string;
    text: string;
    button: {
        text: string,
        onClick: () => void,
    };
    link: {
        text: string,
        href: string,
    },
    fields: InputProps[];
};

export class Panel extends Block<PanelProps> {
    constructor(props: PanelProps) {
        super(props);
    }
    
    render() {
        return `
            <div class="panel {{class}}">
                <h1 class="panel__title">{{ text }}</h1>
                {{{ Form class="panel__form" fields=fields ref="formRef" }}}
                {{{ Button
                    class="panel__button"
                    type="submit"
                    text=button.text
                    onClick=button.onClick
                }}}
                {{{ Link class="panel__link" href=link.href text=link.text }}}
            </div>    
        `;
    }
}

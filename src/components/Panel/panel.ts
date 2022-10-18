import Block from '../../core/Block';
import InputProps from '../Input';

import './panel.css';

export type PanelProps = {
    class?: string;
    text: string;
    buttonText: string;
    linkText: string;
    linkHref: string;
    fields: InputProps[];
};

export class Panel extends Block {
    constructor(props: PanelProps) {
        super(props);
    }
    
    render() {
        return `
            <div class="panel {{class}}">
                <h1 class="panel__title">{{ text }}</h1>
                {{{ Form class="panel__form" fields=fields }}}
                {{{ Button class="panel__button" type="submit" text=buttonText }}}
                {{{ Link linkHref=linkHref linkText=linkText class="panel__link" }}}
            </div>    
        `;
    }
}

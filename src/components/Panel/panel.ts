import Block from 'core/Block';
import InputProps from '../Input';

import './panel.css';

export type PanelProps = {
    class?: string;
    text: string;
    buttonText: string;
    linkText: string;
    linkHref: string;
    fields: InputProps[];
    onInput: () => void;
};

export class Panel extends Block {
    constructor(props: PanelProps) {
        console.log('++++++++++++PROPS', props);
        super(props);
    }
    
    render() {
        console.log('this props', this.props);
        return `
            <div class="panel {{class}}">
                <h1 class="panel__title">{{ text }}</h1>
                {{{ Form class="panel__form" fields=fields onInput=onInput }}}
                {{{ Button class="panel__button" type="submit" text=buttonText }}}
                {{{ Link linkHref=linkHref linkText=linkText class="panel__link" }}}
            </div>    
        `;
    }
}

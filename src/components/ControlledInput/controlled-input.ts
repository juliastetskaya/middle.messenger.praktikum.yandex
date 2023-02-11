import Block from 'core/Block';

import './controlled-input.css';

type ControlledInputProps = {
    class?: string;
    type: 'text' | 'password' | 'email' | 'tel';
    name: string;
    label: string;
    value: string;
    placeholder: string;
    errorMessage: string;
    text: string;
    onInput: (e: Event) => void;
    onFocus: (e: Event) => void;
    onBlur: (e: Event) => void;
};

export class ControlledInput extends Block<ControlledInputProps> {
    static componentName = 'ControlledInput';

    constructor(props: ControlledInputProps) {
        super(props);

        this.setProps({
            onInput: this.onInput,
        });
    }

    onInput = () => {
        this.refs.errorRef.setProps({ text: '' });
    };

    render() {
        return `
            <div class="controlled-input">
                {{{ Label name=name text=label }}}
                {{{ Input
                    type=type
                    name=name
                    class=class
                    placeholder=placeholder
                    onInput=onInput
                    onFocus=onFocus
                    onBlur=onBlur
                    value=value
                }}}
                {{{ Error text=errorMessage ref="errorRef" }}}
            </div>
        `;
    }
}

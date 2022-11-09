import Block from 'core/Block';
import { validateForm } from 'utils';

import './controlled-input.css';

type ControlledInputProps = {
    class?: string;
    type: 'text' | 'password' | 'email' | 'tel';
    name: string;
    label: string;
    value: string;
    placeholder: string;
    errorMessage: string;
    onInput: (e: Event) => void;
    onFocus: (e: Event) => void;
    onBlur: (e: Event) => void;
};

export class ControlledInput extends Block<ControlledInputProps> {
    constructor(props: ControlledInputProps) {
        super(props);

        this.setProps({
            onBlur: this.onBlur,
            onInput: this.onInput,
            onFocus: this.onFocus,
        });
    }

    onInput = () => {
        this.refs.errorRef.setProps({ text: '' });
    };

    onFocus = (e: Event) => {
        const inputEl = e.target as HTMLInputElement;

        const error = validateForm([{ type: inputEl.name, value: inputEl.value }]);

        this.refs.errorRef.setProps({ text: error });
    };

    onBlur = (e: Event) => {
        const inputEl = e.target as HTMLInputElement;

        const error = validateForm([{ type: inputEl.name, value: inputEl.value }]);

        this.refs.errorRef.setProps({ text: error });
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
                }}}
                {{{ Error text=errorMessage ref="errorRef" }}}
            </div>
        `;
    }
}

import Block from 'core/Block';

import './input.css';

export type InputProps = {
    type: string;
    name: string;
    label: string;
    placeholder: string;
    errorMessage: string;
    onInput: () => void;
};

export class Input extends Block {
    constructor({ onInput, ...rest }: InputProps) {
        super({ events: { input: onInput }, ...rest });
    }

    render() {
        return `
            <div class="input">
                <label class="input__label" for={{name}}>{{label}}</label>
                <input class="input__field" type={{type}} id={{name}} name={{name}} placeholder={{placeholder}}>
                {{#if errorMessage}}<p class="input__error">{{errorMessage}}</p>{{/if}}
            </div>
        `;
    }
}

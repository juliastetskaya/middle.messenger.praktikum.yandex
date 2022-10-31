import Block from 'core/Block';

import './input.css';

export type InputProps = {
    type: 'text' | 'password' | 'email' | 'tel';
    name: string;
    label: string;
    value: string;
    placeholder: string;
    errorMessage: string;
    onInput: () => void;
    ref: string;
};

export class Input extends Block {
    constructor({ onInput, ...rest }: InputProps) {
        super({ events: { input: onInput }, ...rest });
    }

    render() {
        return `
            <div class="input">
                <label class="input__label" for="{{name}}">{{label}}</label>
                <input class="input__field" type="{{type}}" id="{{name}}" name="{{name}}" placeholder="{{placeholder}}" value="{{value}}" ref="{{ref}}">
                {{#if errorMessage}}<p class="input__error">{{errorMessage}}</p>{{/if}}
            </div>
        `;
    }
}

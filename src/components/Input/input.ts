import Block from 'core/Block';

import './input.css';

type IncomingProps = {
    type: 'text' | 'password' | 'email' | 'tel';
    name: string;
    label: string;
    placeholder: string;
    onInput?: () => void;
    onFocus?: () => void;
    onBlur?: () => void;
};

export type InputProps = IncomingProps & {
    events?: {
        input?: () => void,
        focus?: () => void,
        blur?: () => void,
    }
};

export class Input extends Block<InputProps> {
    static componentName = 'Input';

    constructor({
        onInput, onFocus, onBlur, ...rest
    }: IncomingProps) {
        super({ events: { input: onInput, focus: onFocus, blur: onBlur }, ...rest });
    }

    render() {
        return `
            <input class="input {{class}}" type="{{type}}" id="{{name}}" name="{{name}}" placeholder="{{placeholder}}" value="{{ value }}">
        `;
    }
}

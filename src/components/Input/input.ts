import Block from '../../core/Block';

import './input.css';

export type InputProps = {
    type: string;
    name: string;
    label: string;
    placeholder: string;
    errorMessage: string;
};

export class Input extends Block {
    constructor(props: InputProps) {
        super(props);
    }

    render() {
        return `
            <div class="input">
                <label class="input__label" for={{name}}>{{label}}</label>
                <input class="input__field" type={{type}} id={{name}} name={{name}} placeholder={{placeholder}}>
                <p class="input__error disabled">{{errorMessage}}</p>
            </div>
        `;
    }
}

import Block from 'core/Block';

import './button.css';

export type ButtonProps = {
    text?: string;
    type?: string;
    class?: string;
    onClick?: () => void;
}

type ButtonBlockProps = ButtonProps & {
    events: {
        click?: () => void;
    }
}

export class Button extends Block<ButtonBlockProps> {
    constructor({ onClick, ...rest }: ButtonProps) {
        super({ events: { click: onClick }, ...rest });
    }

    render() {
        return `
            <button class="button {{class}}" type={{type}}>
                {{text}}
            </button>
        `;
    }
}

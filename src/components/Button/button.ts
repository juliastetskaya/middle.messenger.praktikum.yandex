import Block from 'core/Block';

import './button.css';

interface ButtonProps {
    text: string;
    type?: string;
    class?: string;
    onClick?: () => void;
}

export class Button extends Block {
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

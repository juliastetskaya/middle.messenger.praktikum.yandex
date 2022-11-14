import Block from 'core/Block';

import './button.css';

export type ButtonProps = {
    text?: string;
    type?: string;
    class?: string;
    onClick?: (e: Event) => void;
};

type ButtonBlockProps = ButtonProps & {
    events: {
        click?: (e: Event) => void;
    }
};

export class Button extends Block<ButtonBlockProps> {
    static componentName = 'Button';

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

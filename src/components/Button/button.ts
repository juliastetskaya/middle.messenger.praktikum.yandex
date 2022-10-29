import Block from 'core/Block';

import './button.css';

interface ButtonProps {
    text: string;
    type?: string;
    class?: string;
    events?: {
        click?: () => void
    }
}

export class Button extends Block {
    constructor(props: ButtonProps) {
        super(props);
    }

    render() {
        return `
            <button class="button {{class}}" type={{type}}>
                {{text}}
            </button>
        `;
    }
}

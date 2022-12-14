import Block from 'core/Block';

import './error.css';

export type ErrorProps = {
    text: string;
};

export class Error extends Block<ErrorProps> {
    static componentName = 'Error';

    render() {
        return `
            <p class="error">{{#if text}}{{text}}{{/if}}</p>
        `;
    }
}

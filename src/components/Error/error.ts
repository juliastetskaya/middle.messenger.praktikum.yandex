import { Block } from 'core';

import './error.css';

export type ErrorProps = {
    class: string;
    text: string;
};

class Error extends Block<ErrorProps> {
    static componentName = 'Error';

    render() {
        return `
            <p class="error {{ class }}">{{#if text}}{{text}}{{/if}}</p>
        `;
    }
}

export default Error;

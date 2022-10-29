import Block from 'core/Block';

import './error.css';

interface ErrorProps {
    title: string;
    text: string;
    linkHref: string;
    linkText: string;
}

export class Error extends Block {
    constructor(props: ErrorProps) {
        super(props);
    }

    render() {
        return `
            <div class="error-page">
                <h1 class="error-page__title">{{title}}</h1>
                <p class="error-page__text">{{text}}</p>
                {{{ Link linkHref=linkHref linkText=linkText }}}
            </div>
        `;
    }
}

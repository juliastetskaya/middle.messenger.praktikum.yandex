import Block from 'core/Block';

import './error.css';

interface ErrorProps {
    title: string;
    text: string;
    link: {
        href: string,
        text: string,
    };
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
                {{{ Link href=link.href text=link.text }}}
            </div>
        `;
    }
}

import Block from 'core/Block';
import data from 'data/errors';
import { LinkProps } from 'components/Link';

import './error-page.css';

const { four } = data;

type ErrorPageProps = {
    title: string;
    text: string;
    link: LinkProps,
};

export class ErrorPage extends Block<ErrorPageProps> {
    static componentName = 'ErrorPage';

    constructor() {
        super(four as ErrorPageProps);
    }

    render() {
        return `
            <div class='container'>
                <div class="error-page">
                    <h1 class="error-page__title">{{title}}</h1>
                    <p class="error-page__text">{{text}}</p>
                    {{{ Link href=link.href text=link.text }}}
                </div>
            </div>
        `;
    }
}

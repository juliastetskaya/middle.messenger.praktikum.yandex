import Block from 'core/Block';
import { LinkProps } from 'components';

import './error-page.css';

type ErrorPageProps = {
    title: string;
    text: string;
    link: LinkProps,
};

export class ErrorPage extends Block<ErrorPageProps> {
    static componentName = 'ErrorPage';

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

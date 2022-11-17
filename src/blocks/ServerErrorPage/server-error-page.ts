import Block from 'core/Block';
import data from 'data/errors';
import { LinkProps } from 'components/Link';

import '../ErrorPage/error-page.css';

const { five } = data;

type ErrorPageProps = {
    title: string;
    text: string;
    link: LinkProps,
};

export class ServerErrorPage extends Block<ErrorPageProps> {
    static componentName = 'ServerErrorPage';

    constructor() {
        super(five as ErrorPageProps);
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

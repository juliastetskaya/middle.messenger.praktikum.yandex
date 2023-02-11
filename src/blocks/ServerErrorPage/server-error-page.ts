import Block from 'core/Block';
import { LinkProps } from 'components';

import '../ErrorPage/error-page.css';

type ErrorPageProps = {
    title: string;
    text: string;
    link: LinkProps,
};

export class ServerErrorPage extends Block<ErrorPageProps> {
    static componentName = 'ServerErrorPage';

    render() {
        return `
            <div class='container'>
                <div class="error-page">
                    <h1 class="error-page__title">{{title}}</h1>
                    <p class="error-page__text">{{text}}</p>
                    {{{ Link to=link.to text=link.text }}}
                </div>
            </div>
        `;
    }
}

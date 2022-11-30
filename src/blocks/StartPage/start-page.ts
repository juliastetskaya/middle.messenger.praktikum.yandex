import Block from 'core/Block';
import { LinkListProps } from 'components';

import './start.css';

export class StartPage extends Block<LinkListProps> {
    static componentName = 'StartPage';

    render() {
        return `
            <div class="start-page container">
                <h1>СПИСОК СТРАНИЦ</h1>
                {{{ LinkList links=links }}}
            </div>
        `;
    }
}

import Block from "core/Block";
import { LinkListProps } from 'components/LinkList';

import './start.css';

import data from 'data/start';

const { links } = data;

export class StartPage extends Block<LinkListProps> {
    constructor() {
        super({ links } as LinkListProps);
    }

    render() {
        return `
            <div class="start-page container">
                <h1>СПИСОК СТРАНИЦ</h1>
                {{{ LinkList links=links }}}
            </div>
        `;
    }
}

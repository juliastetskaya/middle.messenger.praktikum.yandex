import Block from "core/Block";

import './start.css';

import data from 'data/start';

const { links } = data;

export class StartPage extends Block {
    constructor() {
        super({ links });
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

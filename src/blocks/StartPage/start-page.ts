import Block from "core/Block";

import './start.css';

import data from 'data/start';


export class StartPage extends Block {
    constructor() {
        super({ ...data });
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

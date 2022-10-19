import Block from "../../core/Block";

import './start.css';

import { links } from '../../data/start.json';


export class StartPage extends Block {
    constructor() {
        super({ links });
    }

    render() {
        return `
            <div class="start-page">
                <h1>СПИСОК СТРАНИЦ</h1>
                {{{ LinkList links=links }}}
            </div>
        `;
    }
}

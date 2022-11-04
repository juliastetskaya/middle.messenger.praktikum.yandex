import Block from "core/Block";
import { PATHS } from "../../constants";

import data from 'data/errors';

import './error-page.css';

export class ErrorPage extends Block {
    constructor(pathname: string) {
        const { four, five } = data;
        const currentData = pathname === PATHS[404] ? four : five;
        super({ ...currentData });
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

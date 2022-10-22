import Block from '../../core/Block';

import arrow from '../../static/arrow_button.svg';

import './left-menu.css';

export class LeftMenu extends Block {
    constructor() {
        super();
    }
    
    render() {
        return `
            <div class="left-menu">
                <a href="/profile.html">
                    <img src=${arrow} alt="arrow button">
                </a>
            </div>
        `;
    }
}

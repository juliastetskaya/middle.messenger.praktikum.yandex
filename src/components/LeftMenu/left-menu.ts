import Block from '../../core/Block';

import './left-menu.css';

export class LeftMenu extends Block {
    constructor() {
        super();
    }
    
    render() {
        console.log('props', this.props);
        return `
            <div class="left-menu">
                <a href="./profile.html">
                    <img src='../../static/arrow_button.svg' alt="arrow button">
                </a>
            </div>
        `;
    }
}

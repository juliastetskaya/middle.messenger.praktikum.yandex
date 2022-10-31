import { PATHS } from "../../constants";
import Block from "core/Block";

import data from 'data/errors';


export class ErrorPage extends Block {
    constructor(pathname: string) {
        const { four, five } = data;
        const currentData = pathname === PATHS[404] ? four : five;
        super({ ...currentData });
    }

    // componentDidUpdate(oldProps: any, newProps: any): boolean {
    //     if (oldProps.buttonText !== newProps.buttonText) {
    //         this.children.button.setProps({
    //             text: newProps.buttonText
    //         })
    //     }
    //     return super.componentDidUpdate(oldProps, newProps);
    // }

    render() {
        return `
            <div class='container'>
                {{{ Error text=text title=title link=link }}}
            </div>
        `;
    }
}

import { PATHS } from "../../constants";
import Block from "../../core/Block";

import { four, five } from '../../data/errors.json';


export class ErrorPage extends Block {
    constructor(pathname: string) {
        const data = pathname === PATHS[404] ? four : five;
        const { title, text, linkText, linkHref } = data;
        super({
            text,
            title,
            linkText,
            linkHref,
        });
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
                {{{ Error
                    text=text
                    title=title
                    linkText=linkText
                    linkHref=linkHref
                }}}
            </div>
        `;
    }
}

import Block from "../../core/Block";

import {
    text,
    buttonText,
    linkText,
    linkHref,
    fields,
} from '../../data/signin.json';

// const { fields } = data;

export class SigninPage extends Block {
    constructor() {
        super({
            text,
            buttonText,
            linkText,
            linkHref,
            fields,
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
            {{{Panel
                class='signin'
                text=text
                buttonText=buttonText
                linkText=linkText
                linkHref=linkHref
                fields=fields
            }}}
        `;
    }
}

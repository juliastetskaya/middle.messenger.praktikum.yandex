import Block from "../../core/Block";

import {
    text,
    buttonText,
    linkText,
    linkHref,
    fields,
} from '../../data/signup.json';


export class SignupPage extends Block {
    constructor() {
        super({
            text,
            buttonText,
            linkText,
            linkHref,
            fields,
        })
    }

    render() {
        return `
            {{{ Panel
                class='signup'
                text=text
                buttonText=buttonText
                linkText=linkText
                linkHref=linkHref
                fields=fields
            }}}
        `;
    }
}

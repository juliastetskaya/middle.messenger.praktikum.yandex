import Block from "../../core/Block";

import data from '../../data/signin';

export class SigninPage extends Block {
    constructor() {
        super({ ...data });
    }

    render() {
        return `
            <div class='container'>
                {{{ Panel
                    class='signin'
                    text=text
                    buttonText=buttonText
                    linkText=linkText
                    linkHref=linkHref
                    fields=fields
                }}}
            </div>
        `;
    }
}

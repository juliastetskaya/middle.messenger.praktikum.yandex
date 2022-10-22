import Block from "../../core/Block";

import data from '../../data/signup';


export class SignupPage extends Block {
    constructor() {
        super({ ...data });
    }

    render() {
        return `
            <div class='container'>
                {{{ Panel
                    class='signup'
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

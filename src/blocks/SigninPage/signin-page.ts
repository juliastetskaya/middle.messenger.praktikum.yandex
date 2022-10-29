import Block from "core/Block";

import data from 'data/signin';

export class SigninPage extends Block {
    constructor() {
        super({ ...data });

        this.setProps({
            login: 'hi',
            password: '',
            onInput: (e: FocusEvent) => {
                console.log('event', e);
            }
        });
    }

    render() {
        console.log('SIGN IN', this.props);
        return `
            <div class='container'>
                {{{ Panel
                    class='signin'
                    text=text
                    buttonText=buttonText
                    linkText=linkText
                    linkHref=linkHref
                    fields=fields
                    onInput=onInput
                    login=login
                }}}
            </div>
        `;
    }
}

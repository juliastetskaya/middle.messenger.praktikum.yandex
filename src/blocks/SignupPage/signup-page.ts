import Block from "core/Block";

import data from 'data/signup';
import { SignPageProps } from 'blocks/SigninPage';
import { validateAndGetInputData } from 'utils';

const { text, button, link, fields } = data;

export class SignupPage extends Block<SignPageProps> {
    constructor() {
        super({ text, button, link, fields } as SignPageProps);

        this.setProps({
            button: { ...button, onClick: this.onSubmit },
        });
    }

    onSubmit = () => {
        const values = validateAndGetInputData(fields, this.element);

        if (values) {
            console.log('Form is ready to send data:', values);
        }
    }

    render() {
        return `
            <div class='container'>
                {{{ Panel
                    class='signup'
                    text=text
                    button=button
                    link=link
                    fields=fields
                }}}
            </div>
        `;
    }
}

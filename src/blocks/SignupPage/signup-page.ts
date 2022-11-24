import Block from 'core/Block';

import data from 'data/signup';
import { SignPageProps } from 'blocks/SigninPage';
import { validateAndGetInputData } from 'utils';
import { SignupData } from 'API/auth-api';
import { signup } from 'services/auth';

const {
    text,
    button,
    link,
    fields,
} = data;

export class SignupPage extends Block<SignPageProps> {
    static componentName = 'SignupPage';

    constructor() {
        super({
            text,
            button,
            link,
            fields,
        } as SignPageProps);

        this.setProps({
            button: { ...button, onClick: this.onSubmit },
        });
    }

    onSubmit = (e: Event) => {
        e.preventDefault();
        const values = validateAndGetInputData(fields, this.element);

        if (values) {
            signup(values as SignupData);
        }
    };

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

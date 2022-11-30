import Block from 'core/Block';

import { SignPageProps } from 'blocks/SigninPage';
import { validateAndGetInputData } from 'utils';
import { SignupData } from 'API/auth-api';
import { signup } from 'services/auth';

export class SignupPage extends Block<SignPageProps> {
    static componentName = 'SignupPage';

    constructor(props: SignPageProps) {
        super(props);

        this.setProps({
            button: { ...this.props.button, onClick: this.onSubmit },
        });
    }

    onSubmit = (e: Event) => {
        e.preventDefault();
        const values = validateAndGetInputData(this.props.fields, this.element);

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

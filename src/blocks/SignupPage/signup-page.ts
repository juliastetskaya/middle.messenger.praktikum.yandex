import { Block } from 'core';

import { SignPageProps } from 'blocks/SigninPage';
import { validateAndGetInputData } from 'utils';
import { signup } from 'services/auth';
import { withLoading, withDispatch } from 'HOC';

class SignupPage extends Block<SignPageProps> {
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
            this.props.dispatch(signup, values);
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
                    isLoading=isLoading
                }}}
            </div>
        `;
    }
}

export default withLoading(withDispatch(SignupPage));

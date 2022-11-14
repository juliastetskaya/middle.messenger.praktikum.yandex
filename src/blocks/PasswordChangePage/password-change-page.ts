import Block from 'core/Block';
import { FieldProps } from 'blocks/SigninPage';
import { ButtonProps } from 'components/Button';

import data from 'data/profile';
import { validateAndGetInputData } from 'utils';

const { button, passwordFields } = data;

type PasswordChangePageProps = {
    button: ButtonProps;
    passwordFields: FieldProps[];
};

export class PasswordChangePage extends Block<PasswordChangePageProps> {
    static componentName = 'PasswordChangePage';

    constructor() {
        super({ button, passwordFields } as PasswordChangePageProps);

        this.setProps({
            button: {
                ...this.props.button,
                onClick: this.onSubmit,
            },
        });
    }

    onSubmit = (e: Event) => {
        e.preventDefault();
        const values = validateAndGetInputData(passwordFields, this.element);

        if (values) {
            console.log('Form is ready to send data:', values);
        }
    };

    render() {
        return `
            <div class="profile">
                {{{ LeftMenu }}}
                <div class="profile__panel">
                    <div class="profile__content password-change">
                        {{{ Avatar }}}
                        {{{ Form class="profile__form" fields=passwordFields button=button }}}

                    </div>
                </div>
            </div>
        `;
    }
}

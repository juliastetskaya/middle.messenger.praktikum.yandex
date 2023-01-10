import { Store, Block } from 'core';
import { FieldProps } from 'blocks';
import { ButtonProps } from 'components';

import { withStore } from 'HOC';
import { validateAndGetInputData } from 'utils';
import { updatePassword } from 'services/user';

type PasswordFields = {
    oldPassword: string;
    newPassword: string;
    passwordCheck: string;
};

type PasswordChangePageProps = {
    button: ButtonProps;
    passwordFields: FieldProps[];
    error: string;
    store: Store<AppState>;
};

class PasswordChangePage extends Block<PasswordChangePageProps> {
    static componentName = 'PasswordChangePage';

    constructor(props: PasswordChangePageProps) {
        super(props);

        this.setProps({
            button: {
                ...this.props.button,
                onClick: this.onSubmit,
            },
        });
    }

    onSubmit = (e: Event) => {
        e.preventDefault();
        const values = validateAndGetInputData(this.props.passwordFields, this.element) as PasswordFields;

        if (values) {
            const { oldPassword, newPassword, passwordCheck } = values;

            if (newPassword !== passwordCheck) {
                this.setProps({ error: 'Пароли не совпадают' });
            } else if (newPassword === oldPassword) {
                this.setProps({ error: 'Старый и новый пароли должны отличаться' });
            } else {
                this.props.store.dispatch(updatePassword, { oldPassword, newPassword });
            }
        }
    };

    render() {
        return `
            <div class="profile">
                {{{ LeftMenu }}}
                <div class="profile__panel">
                    <div class="profile__content password-change">
                        {{{ Avatar }}}
                        {{{ Form class="profile__form" fields=passwordFields button=button error=error }}}
                    </div>
                </div>
            </div>
        `;
    }
}

export default withStore(PasswordChangePage);

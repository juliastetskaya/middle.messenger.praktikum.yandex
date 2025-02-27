import { Block } from 'core';
import { validateAndGetInputData } from 'utils';
import { ButtonProps } from 'components';
import { FieldProps } from 'blocks/SigninPage';
import { updateProfile } from 'services/user';
import {
    withUser,
    withDispatch,
    UserStateProps,
    DispatchStateProps,
} from 'HOC';

interface ProfilePageProps extends UserStateProps, DispatchStateProps {
    button: ButtonProps;
    fields: FieldProps[];
}

class ProfileChangePage extends Block<ProfilePageProps> {
    static componentName = 'ProfileChangePage';

    constructor(props: ProfilePageProps) {
        super(props);

        this.setProps({
            button: { ...this.props.button, onClick: this.onSubmit },
            fields: this.props.fields.map((field) => ({ ...field, value: (this.props.user as any || {})[field.name] })),
        });
    }

    onSubmit = (e: Event) => {
        e.preventDefault();
        const values = validateAndGetInputData(this.props.fields, this.element);

        if (values) {
            console.log('Form is ready to send data:', values);
            this.props.dispatch(updateProfile, values);
        }
    };

    render() {
        return `
            <div class="profile">
                {{{ LeftMenu }}}
                <div class="profile__panel">
                    <div class="profile__content profile-change">
                        {{{ Avatar }}}
                        {{{ Form class="profile__form" fields=fields button=button }}}
                    </div>
                </div>
            </div>
        `;
    }
}

export default withUser(withDispatch(ProfileChangePage));

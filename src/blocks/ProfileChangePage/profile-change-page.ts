import Block from 'core/Block';
import { validateAndGetInputData } from 'utils';
import { ButtonProps } from 'components';
import { FieldProps } from 'blocks';

type ProfilePageProps = {
    button: ButtonProps;
    fields: FieldProps[];
};

export class ProfileChangePage extends Block<ProfilePageProps> {
    static componentName = 'ProfileChangePage';

    constructor(props: ProfilePageProps) {
        super(props);

        this.setProps({
            button: { ...this.props.button, onClick: this.onSubmit },
        });
    }

    onSubmit = (e: Event) => {
        e.preventDefault();
        const values = validateAndGetInputData(this.props.fields, this.element);

        if (values) {
            console.log('Form is ready to send data:', values);
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

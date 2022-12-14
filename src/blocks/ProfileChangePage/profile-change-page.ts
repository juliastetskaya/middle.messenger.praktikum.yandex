import Block from 'core/Block';
import data from 'data/profile';
import { validateAndGetInputData } from 'utils';
import { ButtonProps } from 'components/Button';
import { FieldProps } from '../SigninPage';

const { button, fields } = data;

type ProfilePageProps = {
    button: ButtonProps;
    fields: FieldProps[];
};

export class ProfileChangePage extends Block<ProfilePageProps> {
    static componentName = 'ProfileChangePage';

    constructor() {
        super({ button, fields } as ProfilePageProps);

        this.setProps({
            button: { ...button, onClick: this.onSubmit },
        });
    }

    onSubmit = (e: Event) => {
        e.preventDefault();
        const values = validateAndGetInputData(fields, this.element);

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

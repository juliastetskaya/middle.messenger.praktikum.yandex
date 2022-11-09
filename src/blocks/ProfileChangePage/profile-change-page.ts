import Block from "core/Block";
import { FieldProps } from '../SigninPage';

import data from 'data/profile';
import { validateAndGetInputData } from 'utils';
import { ButtonProps } from 'components/Button';

const { button, fields } = data;


type ProfilePageProps = {
    button: ButtonProps;
    fields: FieldProps[];
}

export class ProfileChangePage extends Block<ProfilePageProps> {
    constructor() {
        super({ button, fields } as ProfilePageProps);

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
            <div class="profile">
                {{{ LeftMenu }}}
                <div class="profile__panel">
                    <div class="profile__content profile-change">
                        {{{ Avatar }}}
                        {{{ Form class="profile__form" fields=fields }}}
                        {{{ Button type="button" class="profile__button" text=button.text onClick=button.onClick }}}
                    </div>
                </div>
            </div>
        `;
    }
}

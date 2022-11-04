import Block from "core/Block";
import { FieldProps } from '../SigninPage';

import data from 'data/profile';
import { getInputData } from 'utils';

const { button, fields } = data;


type ProfilePageProps = {
    button: {
        text: string,
    };
    fields: FieldProps[];
}
export class ProfileChangePage extends Block {
    constructor() {
        super({ button, fields } as ProfilePageProps);

        this.setProps({
            button: { ...button, onClick: this.onSubmit },
        });
    }

    onSubmit = () => {
        const values = getInputData(fields, this.element);
        console.log('Form is ready to send data:', values);
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

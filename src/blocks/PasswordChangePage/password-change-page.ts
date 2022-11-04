import Block from "core/Block";

import data from 'data/profile';
import { getInputData } from 'utils';


const { button, passwordFields } = data;
export class PasswordChangePage extends Block {
    constructor() {
        super({ button, passwordFields });

        this.setProps({
            button: { ...button, onClick: this.onSubmit },
        });
    }

    onSubmit = () => {
        const values = getInputData(passwordFields, this.element);
        console.log('Form is ready to send data:', values);
    }

    render() {
        return `
            <div class="profile">
                {{{ LeftMenu }}}
                <div class="profile__panel">
                    <div class="profile__content password-change">
                        {{{ Avatar }}}
                        {{{ Form class="profile__form" fields=passwordFields }}}
                        {{{ Button type="button" class="profile__button" text=button.text onClick=button.onClick }}}
                    </div>
                </div>
            </div>
        `;
    }
}

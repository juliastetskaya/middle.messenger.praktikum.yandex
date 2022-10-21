import Block from "../../core/Block";

import { saveButton, passwordFields } from '../../data/profile.json';

export class PasswordChangePage extends Block {
    constructor() {
        super({
            saveButton,
            fields: passwordFields,
        });
    }

    render() {
        return `
            <div class="profile">
                {{{ LeftMenu }}}
                <div class="profile__panel">
                    <div class="profile__content password-change">
                        {{{ Avatar }}}
                        {{{ Form class="profile__form" fields=fields }}}
                        {{{ Button type="button" class="profile__button" text=saveButton }}}
                    </div>
                </div>
            </div>
        `;
    }
}

import Block from "core/Block";

import data from 'data/profile';

export class PasswordChangePage extends Block {
    constructor() {
        super({ ...data });
    }

    render() {
        return `
            <div class="profile">
                {{{ LeftMenu }}}
                <div class="profile__panel">
                    <div class="profile__content password-change">
                        {{{ Avatar }}}
                        {{{ Form class="profile__form" fields=passwordFields }}}
                        {{{ Button type="button" class="profile__button" text=saveButton }}}
                    </div>
                </div>
            </div>
        `;
    }
}

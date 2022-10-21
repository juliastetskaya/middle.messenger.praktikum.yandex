import Block from "../../core/Block";

import { saveButton, fields } from '../../data/profile.json';

export class ProfileChangePage extends Block {
    constructor() {
        super({
            saveButton,
            fields,
        });
    }

    render() {
        return `
            <div class="profile">
                {{{ LeftMenu }}}
                <div class="profile__panel">
                    <div class="profile__content profile-change">
                        {{{ Avatar }}}
                        {{{ Form class="profile__form" fields=fields }}}
                        {{{ Button type="button" class="profile__button" text=saveButton }}}
                    </div>
                </div>
            </div>
        `;
    }
}

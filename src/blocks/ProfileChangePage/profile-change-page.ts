import Block from "core/Block";

import data from 'data/profile';

const { button, fields } = data;

type FieldProps = {
    type: string,
    name: string,
    label: string,
    placeholder: string,
}

interface ProfilePageProps {
    button: {
        text: string,
    };
    fields: FieldProps[];
}
export class ProfileChangePage extends Block {
    constructor() {
        super({ button, fields } as ProfilePageProps);
    }

    render() {
        return `
            <div class="profile">
                {{{ LeftMenu }}}
                <div class="profile__panel">
                    <div class="profile__content profile-change">
                        {{{ Avatar }}}
                        {{{ Form class="profile__form" fields=fields }}}
                        {{{ Button type="button" class="profile__button" text=button.text }}}
                    </div>
                </div>
            </div>
        `;
    }
}

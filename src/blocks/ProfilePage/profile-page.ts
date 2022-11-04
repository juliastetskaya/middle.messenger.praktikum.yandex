import Block from "core/Block";

import data from 'data/profile';

import './profile.css';

export class ProfilePage extends Block {
    constructor() {
        super({ ...data });
    }

    render() {
        return `
            <div class="profile">
                {{{ LeftMenu }}}
                <div class="profile__panel">
                    <div class="profile__content profile-page">
                        {{{ Avatar class="profile__avatar" placeholder=placeholder }}}
                        <p class="profile__title">{{name}}</p>
                        {{{ FieldList fields=profileFields }}}
                        {{{ LinkList class="profile__links" links=links }}}
                        {{{ AvatarPanel }}}
                    </div>
                </div>
            </div>
        `;
    }
} 


// {{> avatar-change avatar}}
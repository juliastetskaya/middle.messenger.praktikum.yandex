import Block from "../../core/Block";

import { name, fields, links, placeholder } from '../../data/profile.json';

import './profile.css';

export class ProfilePage extends Block {
    constructor() {
        super({
            name,
            fields,
            links,
            placeholder,
        });
    }

    // componentDidUpdate(oldProps: any, newProps: any): boolean {
    //     if (oldProps.buttonText !== newProps.buttonText) {
    //         this.children.button.setProps({
    //             text: newProps.buttonText
    //         })
    //     }
    //     return super.componentDidUpdate(oldProps, newProps);
    // }

    render() {
        return `
            <div class="profile">
                {{{ LeftMenu }}}
                <div class="profile__panel">
                    <div class="profile__content profile-page">
                        {{{ Avatar class="profile__avatar" placeholder=placeholder }}}
                        <p class="profile__title">{{name}}</p>
                        {{{ Form class="profile__form" fields=fields }}}
                        {{{ LinkList class="profile__links" links=links }}}
                        {{{ AvatarPanel }}}
                    </div>
                </div>
            </div>
        `;
    }
} 


// {{> avatar-change avatar}}
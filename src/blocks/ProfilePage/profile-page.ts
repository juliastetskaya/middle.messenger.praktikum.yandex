import Block from 'core/Block';
import { FieldProps } from 'blocks/SigninPage';
import { ButtonProps } from 'components/Button';
import { LinkProps } from 'components/Link';
import { ProfileFieldProps } from 'components/ProfileList';

import data from 'data/profile';

import './profile.css';

const {
    name,
    button,
    fields,
    links,
    profileFields,
    passwordFields,
    placeholder,
} = data;

type ProfilePageProps = {
    name: string;
    button: ButtonProps;
    fields: FieldProps[];
    links: LinkProps[];
    profileFields: ProfileFieldProps[];
    passwordFields: FieldProps[];
    placeholder: string;
};

export class ProfilePage extends Block<ProfilePageProps> {
    static componentName = 'ProfilePage';

    constructor() {
        super({
            name,
            button,
            fields,
            links,
            profileFields,
            passwordFields,
            placeholder,
        } as ProfilePageProps);
    }

    render() {
        return `
            <div class="profile">
                {{{ LeftMenu }}}
                <div class="profile__panel">
                    <div class="profile__content profile-page">
                        {{{ Avatar class="profile__avatar" placeholder=placeholder }}}
                        <p class="profile__title">{{name}}</p>
                        {{{ ProfileList fields=profileFields }}}
                        {{{ LinkList class="profile__links" links=links }}}
                        {{{ AvatarPanel }}}
                    </div>
                </div>
            </div>
        `;
    }
}

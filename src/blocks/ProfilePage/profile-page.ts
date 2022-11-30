import Block from 'core/Block';
import { FieldProps } from 'blocks';
import { ButtonProps, LinkProps, ProfileFieldProps } from 'components';

import { logout } from 'services/auth';

import './profile.css';

type ProfilePageProps = {
    name: string;
    button: ButtonProps;
    fields: FieldProps[];
    links: LinkProps[];
    profileFields: ProfileFieldProps[];
    passwordFields: FieldProps[];
    placeholder: string;
    avatar: {
        title: string;
        link: LinkProps;
        button: ButtonProps;
    };
};

export class ProfilePage extends Block<ProfilePageProps> {
    static componentName = 'ProfilePage';

    constructor(props: ProfilePageProps) {
        super(props);

        this.setProps({
            links: this.props.links.map((link) => (link.text === 'Выйти' ? {
                ...link,
                onClick: this.clickQuitLink,
            } : link)),
        });
    }

    clickQuitLink = (event: Event) => {
        event.preventDefault();
        logout();
    };

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
                        {{{ AvatarPanel link=avatar.link button=avatar.button title=avatar.title }}}
                    </div>
                </div>
            </div>
        `;
    }
}

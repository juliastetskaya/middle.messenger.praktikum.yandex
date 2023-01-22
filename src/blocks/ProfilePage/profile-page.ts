import { Block } from 'core';
import { FieldProps } from 'blocks';
import { ButtonProps, LinkProps, ProfileFieldProps } from 'components';
import { updateAvatar } from 'services/user';
import {
    withStore,
    withUser,
    WithStateProps,
    WithUserProps,
} from 'HOC';

import { logout } from 'services/auth';

import './profile.css';

interface ProfilePageProps extends WithUserProps, WithStateProps {
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
    changeAvatar: {
        onClick: () => void;
    }
}

class ProfilePage extends Block<ProfilePageProps> {
    static componentName = 'ProfilePage';

    constructor(props: ProfilePageProps) {
        super(props);

        this.setProps({
            links: this.props.links.map((link) => (link.text === 'Выйти' ? {
                ...link,
                onClick: this.clickQuitLink,
            } : link)),
            profileFields: this.props.profileFields.map((field) => ({ ...field, value: (this.props.user as any || {})[field.name] })),
            changeAvatar: { onClick: this.changeAvatarClick },
        });
    }

    clickQuitLink = (event: Event) => {
        event.preventDefault();
        this.props.store.dispatch(logout);
    };

    changeAvatarClick = () => {
        console.log('onClick!!!!');
        this.props.store.dispatch(updateAvatar);
    };

    render() {
        return `
            <div class="profile">
                {{{ LeftMenu }}}
                <div class="profile__panel">
                    <div class="profile__content profile-page">
                        {{{ Avatar class="profile__avatar" placeholder=placeholder onClick=changeAvatar.onClick }}}
                        <p class="profile__title">{{user.first_name}}</p>
                        {{{ ProfileList fields=profileFields }}}
                        {{{ LinkList class="profile__links" links=links }}}
                        {{{ AvatarPanel link=avatar.link button=avatar.button title=avatar.title }}}
                    </div>
                </div>
            </div>
        `;
    }
}

export default withStore(withUser(ProfilePage));

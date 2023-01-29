import { Block } from 'core';
import { FieldProps } from 'blocks/SigninPage';
import { ButtonProps, LinkProps, ProfileFieldProps } from 'components';
import { updateAvatar } from 'services/user';
import {
    withUser,
    withLoading,
    withDispatch,
    DispatchStateProps,
    LoadingStateProps,
} from 'HOC';

import { logout } from 'services/auth';

import './profile.css';

interface ProfilePageProps extends DispatchStateProps, LoadingStateProps {
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
        onChange: (e: Event) => void;
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
            changeAvatar: { onChange: this.changeAvatar },
        });
    }

    clickQuitLink = (event: Event) => {
        event.preventDefault();
        this.props.dispatch(logout);
    };

    changeAvatar = (e: Event) => {
        const inputEl = e.target as HTMLInputElement;
        const avatar = inputEl!.files![0];

        const avatarImageEl = document.getElementById('avatar-image') as HTMLImageElement;
        avatarImageEl.src = window.URL.createObjectURL(avatar);

        const form = new FormData();
        form.append('avatar', avatar);

        this.props.dispatch(updateAvatar, form);
    };

    render() {
        return `
            {{#if isLoading}}
                {{{ Spinner }}}
            {{else}}
                <div class="profile">
                    {{{ LeftMenu }}}
                    <div class="profile__panel">
                        <div class="profile__content profile-page">
                            {{{ Avatar class="profile__avatar" placeholder=placeholder onChange=changeAvatar.onChange src=user.avatar }}}
                            <p class="profile__title">{{user.first_name}}</p>
                            {{{ ProfileList fields=profileFields user=user }}}
                            {{{ LinkList class="profile__links" links=links }}}
                            {{{ AvatarPanel link=avatar.link button=avatar.button title=avatar.title }}}
                        </div>
                    </div>
                </div>
            {{/if}}
        `;
    }
}

export default withUser(withLoading(withDispatch(ProfilePage)));

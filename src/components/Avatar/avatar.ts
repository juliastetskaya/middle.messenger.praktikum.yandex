import { Block } from 'core';

import avatar from 'static/avatar.svg';

import './avatar.css';

interface AvatarProps {
    class?: string;
    placeholder: string;
    src: string;
    onChange?: (e: Event) => void;
}

type AvatarBlockProps = AvatarProps & {
    events: {
        change?: (e: Event) => void;
    }
};

class Avatar extends Block<AvatarBlockProps> {
    static componentName = 'Avatar';

    constructor({ onChange, ...rest }: AvatarProps) {
        super({ events: { change: onChange }, ...rest });
    }

    render() {
        const { src } = this.props;

        const avatarSrc = src ? `https://ya-praktikum.tech/api/v2/resources${src}` : avatar;

        return `
            <div class="avatar {{class}}">
                <img
                    id="avatar-image"
                    src="${avatarSrc}"
                    class="change-avatar__image"
                    alt="avatar image"
                >
                <div class="change-placeholder">{{placeholder}}</div>
                <input id="avatar" type="file" class="change-avatar__input">
            </div>
        `;
    }
}

export default Avatar;

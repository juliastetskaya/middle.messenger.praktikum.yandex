import Block from 'core/Block';

import avatar from 'static/avatar.svg';

import './avatar.css';

type AvatarProps = {
    class?: string;
    placeholder: string;
};

export class Avatar extends Block<AvatarProps> {
    static componentName = 'Avatar';

    render() {
        return `
            <div class="avatar {{class}}">
                <img src=${avatar} alt="avatar image">
                <div class="change-placeholder">{{placeholder}}</div>
            </div>
        `;
    }
}

import { Block } from 'core';
import { withStore, WithStateProps } from 'HOC';

import avatar from 'static/avatar.svg';

import './avatar.css';

interface AvatarProps extends WithStateProps {
    class?: string;
    placeholder: string;
    onClick?: (e: Event) => void;
    // events: {
    //     click?: (e: Event) => void;
    // }
}

type AvatarBlockProps = AvatarProps & {
    events: {
        click?: (e: Event) => void;
    }
};

class Avatar extends Block<AvatarBlockProps> {
    static componentName = 'Avatar';

    constructor({ onClick, ...rest }: AvatarProps) {
        super({ events: { click: onClick }, ...rest });
    }

    render() {
        return `
            <div class="avatar {{class}}">
                <img src=${avatar} alt="avatar image">
                <div class="change-placeholder">{{placeholder}}</div>

            </div>
        `;
    }
}

export default withStore(Avatar);

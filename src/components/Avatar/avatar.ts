import Block from 'core/Block';

import avatar from 'static/avatar.svg';

import './avatar.css';

interface AvatarProps {
    class?: string;
    placeholder: string;
}

export class Avatar extends Block {
    constructor(props: AvatarProps) {
        super(props);
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

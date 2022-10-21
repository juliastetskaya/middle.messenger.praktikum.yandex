import Block from '../../core/Block';

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
                <img src="../../static/avatar.svg" alt="avatar image">
                <div class="change-placeholder">{{placeholder}}</div>
            </div>
        `;
    }
}

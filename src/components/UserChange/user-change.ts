import Block from 'core/Block';

import './user-panel.css';

export interface UserChangeProps {
    class?: string;
    title: string;
    textButton: string;
    input: {
        label: string;
        name: string;
        placeholder: string;
    };
}

export class UserChange extends Block {
    constructor(props: UserChangeProps) {
        super(props);
    }

    render() {
        return `
            <div class="panel user-panel">
                <h1 class="panel__title">{{ title }}</h1>
                {{{ Input type="text" label=input.label name=input.name placeholder=input.placeholder }}}
                {{{ Button type="button" class="avatar-panel__button" text=textButton }}}
            </div>
        `;
    }
}

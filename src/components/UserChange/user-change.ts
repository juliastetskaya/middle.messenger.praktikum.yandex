import Block from 'core/Block';
import { ButtonProps } from 'components';
import { validateAndGetInputData } from 'utils';

import './user-panel.css';

export type UserChangeProps = {
    class?: string;
    inputValue?: string;
    title: string;
    button: ButtonProps;
    chatId: string;
    input: {
        label: string;
        name: string;
        placeholder: string;
    };
    request: (values: {}) => void;
};

export class UserChange extends Block<UserChangeProps> {
    static componentName = 'UserChange';

    constructor(props: UserChangeProps) {
        super(props);

        this.setProps({
            button: {
                ...this.props.button,
                onClick: this.onClick,
            },
        });
    }

    onClick = (e: Event) => {
        e.preventDefault();
        const values = validateAndGetInputData([{ name: this.props.input.name }], this.element);

        if (values) {
            this.props.request(values);
        }
    };

    render() {
        return `
            <div class="panel user-panel {{class}}">
                <h1 class="panel__title">{{ title }}</h1>
                {{{ ControlledInput type="text" label=input.label name=input.name placeholder=input.placeholder value=inputValue }}}
                {{{ Button type="button" class="avatar-panel__button" text=button.text onClick=button.onClick }}}
            </div>
        `;
    }
}

export default UserChange;

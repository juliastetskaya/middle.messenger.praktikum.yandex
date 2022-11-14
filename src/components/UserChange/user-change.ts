import Block from 'core/Block';
import { ButtonProps } from 'components/Button';
import { validateAndGetInputData } from 'utils';

import './user-panel.css';

export type UserChangeProps = {
    class?: string;
    title: string;
    button: ButtonProps;
    input: {
        label: string;
        name: string;
        placeholder: string;
    };
};

export class UserChange extends Block<UserChangeProps> {
    static componentName = 'UserChange';

    constructor(props: UserChangeProps) {
        super(props);

        this.setProps({
            button: {
                ...this.props.button,
                onClick: this.onSubmit,
            },
        });
    }

    onSubmit = (e: Event) => {
        e.preventDefault();
        const values = validateAndGetInputData([{ name: this.props.input.name }], this.element);

        if (values) {
            console.log('Form is ready to send data:', values);
        }
    };

    render() {
        return `
            <div class="panel user-panel">
                <h1 class="panel__title">{{ title }}</h1>
                {{{ ControlledInput type="text" label=input.label name=input.name placeholder=input.placeholder }}}
                {{{ Button type="button" class="avatar-panel__button" text=button.text onClick=button.onClick }}}
            </div>
        `;
    }
}

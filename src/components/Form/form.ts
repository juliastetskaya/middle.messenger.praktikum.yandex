import Block from 'core/Block';
import { InputProps, ButtonProps } from 'components';

import './form.css';

type FormProps = {
    class?: string;
    fields: InputProps[];
    button: ButtonProps;
    error: string;
    user: User;
};

export class Form extends Block<FormProps> {
    static componentName = 'Form';

    render() {
        return `
            <form action="#" class="form {{class}}" method="GET">
                <ul class="form__list">
                    {{#each fields}}
                        <li class="form__item">
                            {{{ ControlledInput
                                type=type
                                label=label
                                name=name
                                value=value
                                class=class
                                placeholder=placeholder
                                errorMessage=errorMessage
                                ref=ref
                            }}}
                        </li>
                    {{/each}}
                </ul>
                {{{ Error class='submit-error' text=error ref="errorRef" }}}
                {{{ Button type="submit" text=button.text onClick=button.onClick }}}
            </form>
        `;
    }
}

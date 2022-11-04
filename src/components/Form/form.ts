import Block from 'core/Block';
import { InputProps } from 'components/Input';

import './form.css';

interface FormProps {
    class?: string;
    fields: InputProps[];
}

export class Form extends Block<FormProps> {
    constructor(props: FormProps) {
        super(props);
    }

    render() {
        console.log('Form props', this.props);
        return `
            <form action="#" class="form {{class}}">
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
            </form>
        `;
    }
}

import Block from 'core/Block';
import { InputProps } from 'components/Input';

import './form.css';

interface FormProps {
    class?: string;
    fields: InputProps[];
    events?: {
        input?: () => void;
    }
}

export class Form extends Block {
    constructor(props: FormProps) {
        super(props);
    }

    render() {
        return `
            <form action="#" class="form {{class}}">
                <ul class="form__list">
                    {{#each fields}}
                        <li class="form__item">
                            {{{ Input
                                type=type
                                label=label
                                name=name
                                placeholder=placeholder
                                errorMessage=errorMessage
                                onInput=onInput
                            }}}
                        </li>
                    {{/each}}
                </ul>
            </form>
        `;
    }
}

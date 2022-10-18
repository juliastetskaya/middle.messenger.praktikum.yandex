import Block from '../../core/Block';
import { InputProps } from '../../components/Input';

interface FormProps {
    class?: string;
    fields: InputProps[];
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
                            {{{Input
                                type=type
                                label=label
                                name=name
                                placeholder=placeholder
                                errorMessage=errorMessage
                            }}}
                        </li>
                    {{/each}}
                </ul>
            </form>
        `;
    }
}

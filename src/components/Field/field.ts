import Block from 'core/Block';

import './field.css';

export type FieldProps = {
    label: string;
    value: string;
};

export class Field extends Block<FieldProps> {
    render() {
        return `
            <li class="field">
                <span>{{label}}</span>
                <span class="field__value">{{value}}</span>
            </li>
        `;
    }
}

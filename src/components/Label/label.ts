import Block from 'core/Block';

import './label.css';

export type LabelProps = {
    name: string;
    text: string;
};

export class Label extends Block<LabelProps> {
    static componentName = 'Label';

    render() {
        return `
            <label class="label" for="{{name}}">{{text}}</label>
        `;
    }
}

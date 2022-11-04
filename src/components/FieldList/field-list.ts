import Block from 'core/Block';

interface FieldListProps {
    fields: {
        label: string;
        value: string;
    }[];
}

export class FieldList extends Block<FieldListProps> {
    constructor(props: FieldListProps) {
        super(props);
    }

    render() {
        console.log('PROPS', this.props);
        return `
            <ul class="field-list">
                {{#each fields}}
                    {{{ Field label=label value=value }}}
                {{/each}}
            </ul>
        `;
    }
}

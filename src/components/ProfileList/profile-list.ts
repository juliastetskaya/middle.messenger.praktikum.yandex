import Block from 'core/Block';

export type ProfileFieldProps = {
    label: string;
    value: string;
    name: string;
};

type ProfileListProps = {
    fields: ProfileFieldProps[];
    user: User;
};

export class ProfileList extends Block<ProfileListProps> {
    static componentName = 'ProfileList';

    constructor(props: ProfileListProps) {
        super(props);

        this.setProps({
            fields: this.props.fields.map((field) => ({ ...field, value: (this.props.user as any || {})[field.name] })),
        });
    }

    render() {
        return `
            <ul class="field-list">
                {{#each fields}}
                    {{{ Field label=label value=value }}}
                {{/each}}
            </ul>
        `;
    }
}

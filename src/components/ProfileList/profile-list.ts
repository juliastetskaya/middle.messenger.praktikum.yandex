import Block from 'core/Block';

export type ProfileFieldProps = {
    label: string;
    value: string;
};

type ProfileListProps = {
    fields: ProfileFieldProps[];
};

export class ProfileList extends Block<ProfileListProps> {
    static componentName = 'ProfileList';

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

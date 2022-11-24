import Block from 'core/Block';

import { LinkProps } from '../Link';

export type LinkListProps = {
    class?: string;
    links: LinkProps[];
};

export class LinkList extends Block<LinkListProps> {
    static componentName = 'LinkList';

    render() {
        return `
            <ul class="link-list {{class}}">
                {{#each links}}
                    <li class="link-list__item">
                        {{{ Link class=class text=text href=href onClick=onClick }}}
                    </li>
                {{/each}}
            </ul>
        `;
    }
}

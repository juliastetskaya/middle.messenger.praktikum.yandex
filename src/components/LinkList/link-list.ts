import Block from '../../core/Block';

import { LinkProps } from '../Link';

export type LinkListProps = {
    class?: string;
    links: LinkProps[];
};

export class LinkList extends Block {
    constructor(props: LinkListProps) {
        super(props);
    }
    
    render() {
        return `
            <ul class="link-list {{class}}">
                {{#each links}}
                    <li class="link-list__item">
                        {{{ Link class=class linkText=linkText linkHref=linkHref }}}
                    </li>
                {{/each}}
            </ul>
        `;
    }
}

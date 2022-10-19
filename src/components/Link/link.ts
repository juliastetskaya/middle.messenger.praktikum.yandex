import Block from '../../core/Block';

import './link.css';

export type LinkProps = {
    class?: string;
    linkHref: string;
    linkText: string;
};

export class Link extends Block {
    constructor(props: LinkProps) {
        super(props);
    }
    
    render() {
        return `
            <a href={{linkHref}} class="link {{class}}">{{linkText}}</a>
        `;
    }
}

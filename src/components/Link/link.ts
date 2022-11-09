import Block from 'core/Block';

import './link.css';

export type LinkProps = {
    class?: string;
    href: string;
    text: string;
};

export class Link extends Block<LinkProps> {
    constructor(props: LinkProps) {
        super(props);
    }
    
    render() {
        return `
            <a href={{href}} class="link {{class}}">{{text}}</a>
        `;
    }
}

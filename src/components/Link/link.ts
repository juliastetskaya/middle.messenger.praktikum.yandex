import Block from 'core/Block';

import './link.css';

export type LinkProps = {
    class?: string;
    href?: string;
    text: string;
    onClick?: (e: Event) => void;
};

type LinkBlockProps = LinkProps & {
    events: {
        click?: (e: Event) => void;
    }
};

export class Link extends Block<LinkBlockProps> {
    static componentName = 'Link';

    constructor({ onClick, ...rest }: LinkProps) {
        super({ events: { click: onClick }, ...rest });
    }

    render() {
        return `
            <a href="{{href}}" class="link {{class}}">{{text}}</a>
        `;
    }
}

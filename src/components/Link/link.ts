import Block from 'core/Block';
import { withRouter, RouterStateProps } from 'HOC';

import './link.css';

export interface LinkProps extends RouterStateProps {
    class?: string;
    to: string;
    text: string;
    onClick: () => void;
}

type LinkBlockProps = LinkProps & {
    events: {
        click?: () => void;
    }
};
export class BaseLink extends Block<LinkBlockProps> {
    static componentName = 'Link';

    constructor(props: LinkProps) {
        super({
            ...props,
            events: {
                click: props.onClick || (() => this.navigate()),
            },
        });
    }

    navigate() {
        this.props.router.go(this.props.to);
    }

    render() {
        return `
            <span class="link {{class}}">{{text}}</span>
        `;
    }
}

export const Link = withRouter(BaseLink);

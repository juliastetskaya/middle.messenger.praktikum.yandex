import Block from 'core/Block';
import { withRouter, RouterStateProps } from 'HOC';

import './link.css';

export interface LinkProps extends RouterStateProps {
    class?: string;
    to: string;
    text: string;
    events?: {
        click: () => void;
    }
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
                click: () => this.navigate(),
            },
        });
    }

    navigate() {
        console.log('CLICK!!!');
        console.log('this.props', this.props);

        this.props.router.go(this.props.to);
    }

    render() {
        return `
            <span class="link {{class}}">{{text}}</span>
        `;
    }
}

export const Link = withRouter(BaseLink);

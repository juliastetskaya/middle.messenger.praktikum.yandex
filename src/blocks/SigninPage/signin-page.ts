import Block from 'core/Block';
import { ButtonProps } from 'components/Button';
import data from 'data/signin';
import { validateAndGetInputData } from 'utils';
import { signin } from 'services/auth';
import { SigninData } from 'API/auth-api';
import { withStore } from 'HOC/withStore';
import { Store } from 'core';

const {
    button,
    fields,
    text,
    link,
} = data;

export type FieldProps = {
    type: string,
    name: string,
    label: string,
    placeholder: string,
    errorMessage?: string,
    class?: string,
};

export type SignPageProps = {
    text: string;
    fields: FieldProps[];
    button: ButtonProps;
    link: {
        text: string,
        href: string,
    };
    store: Store<AppState>;
};

class SigninPage extends Block<SignPageProps> {
    static componentName = 'SigninPage';

    constructor(props: SignPageProps) {
        super({
            ...props,
            text,
            fields,
            button,
            link,
        });

        this.setProps({
            button: { ...this.props.button, onClick: this.onSubmit },
        });
    }

    onSubmit = (e: Event) => {
        e.preventDefault();
        const values = validateAndGetInputData(this.props.fields, this.element);

        if (values) {
            signin(values as SigninData);
        }
    };

    render() {
        return `
            <div class='container'>
                {{{ Panel
                    class='signin'
                    text=text
                    button=button
                    link=link
                    fields=fields
                    ref="panelRef"
                }}}
            </div>
        `;
    }
}

export default withStore(
    SigninPage,
    (state) => ({ isLoading: state.isLoading }),
);

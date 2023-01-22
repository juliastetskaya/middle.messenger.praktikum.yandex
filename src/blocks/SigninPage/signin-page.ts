import Block from 'core/Block';
import { ButtonProps } from 'components';
import { validateAndGetInputData } from 'utils';
import { signin } from 'services/auth';
import { withStore, WithStateProps } from 'HOC';

export type FieldProps = {
    type: string,
    name: string,
    label: string,
    placeholder: string,
    errorMessage?: string,
    class?: string,
    value?: string
};

export interface SignPageProps extends WithStateProps {
    text: string;
    fields: FieldProps[];
    button: ButtonProps;
    link: {
        text: string,
        to: string,
    };
}

class SigninPage extends Block<SignPageProps> {
    static componentName = 'SigninPage';

    constructor(props: SignPageProps) {
        super(props);

        this.setProps({
            button: { ...this.props.button, onClick: this.onSubmit },
        });
    }

    onSubmit = (e: Event) => {
        e.preventDefault();
        const values = validateAndGetInputData(this.props.fields, this.element);

        if (values) {
            this.props.store.dispatch(signin, values);
        }
    };

    render() {
        const { isLoading } = this.props.store.getState();

        return `
            <div class='container'>
                {{{ Panel
                    class='signin'
                    text=text
                    button=button
                    link=link
                    fields=fields
                    ref="panelRef"
                    isLoading=${isLoading}
                }}}
            </div>
        `;
    }
}

export default withStore(SigninPage);

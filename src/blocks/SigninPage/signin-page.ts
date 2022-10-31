import Block from "core/Block";

import data from 'data/signin';

const { button, fields, text, link } = data;

export type FieldProps = {
    type: string,
    name: string,
    label: string,
    placeholder: string,
    errorMessage: string,
    class?: string,
};

export interface SignPageProps {
    text: string;
    fields: FieldProps[];
    button: {
        text: string,
    };
    link: {
        text: string,
        href: string,
    };
}

export class SigninPage extends Block {
    login: string;
    password: string;

    constructor() {
        super({ text, fields, button, link } as SignPageProps);
        
        this.setProps({
            fields: fields.map((field: FieldProps) => ({ ...field, onInput: this.onInput })),
            button: { ...button, onClick: this.onSubmit },
        });

        this.login = "";
        this.password = "";
    }

    onInput = (e: Event) => {
        const inputElement = e.target as HTMLInputElement;
        const { name, value } = inputElement;

        if (name === 'login') {
            this.login = value;
        } else {
            this.password = value;
        }
    }

    onSubmit = () => {
        console.log('Form is ready to send data:', {
            login: this.login,
            password: this.password,
        });
    }

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

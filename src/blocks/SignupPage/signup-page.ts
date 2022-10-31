import Block from "core/Block";

import data from 'data/signup';
import { FieldProps, SignPageProps } from "blocks/SigninPage";

const { text, button, link, fields } = data;


export class SignupPage extends Block {
    email: string;
    login: string;
    firstName: string;
    secondName: string;
    phone: string;
    password: string;
    passwordCheck: string;

    constructor() {
        super({ text, button, link, fields } as SignPageProps);

        this.setProps({
            fields: fields.map((field: FieldProps) => ({ ...field, onInput: this.onInput })),
            button: { ...button, onClick: this.onSubmit },
        });

        this.email = "";
        this.login = "";
        this.firstName = "";
        this.secondName = "";
        this.phone = "";
        this.password = "";
        this.passwordCheck = "";
    }

    onInput = (e: Event) => {
        const inputElement = e.target as HTMLInputElement;
        const { name, value } = inputElement;

        switch(name) {
            case 'email':
                this.email = value;
            case 'login':
                this.login = value;
            case 'firstName':
                this.firstName = value;
            case 'secondName':
                this.secondName = value;
            case 'phone':
                this.phone = value;
            case 'password':
                this.password = value;
            case 'passwordCheck':
                this.passwordCheck = value;
        }
    }

    onSubmit = () => {
        console.log('Form is ready to send data:', {
            email: this.email,
            login: this.login,
            firstName: this.firstName,
            secondName: this.secondName,
            phone: this.phone,
            password: this.password,
            passwordCheck: this.passwordCheck,
        });
    }

    render() {
        return `
            <div class='container'>
                {{{ Panel
                    class='signup'
                    text=text
                    button=button
                    link=link
                    fields=fields
                }}}
            </div>
        `;
    }
}

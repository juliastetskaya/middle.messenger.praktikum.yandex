import StartPage from './blocks/Start';
import SigninPage from './blocks/Signin';
import SignupPage from './blocks/Signup';
import ErrorPage from './blocks/ErrorPage';

import Panel from './components/Panel';
import Button from './components/Button';
import Form from './components/Form';
import Input from './components/Input';
import Link from './components/Link';
import Error from './components/Error';
import LinkList from './components/LinkList';
import { registerComponent, renderDOM, Block } from './core';

import { PATHS } from './constants';

import './styles/colors.css';
import './styles/style.css';

registerComponent(Panel);
registerComponent(Button);
registerComponent(Form);
registerComponent(Input);
registerComponent(Link);
registerComponent(Error);
registerComponent(LinkList);

document.addEventListener('DOMContentLoaded', () => {
    // const button = new Button({
    //     text: 'Click me!',
    //     events: {
    //         click: () => console.log('Clicked!')
    //     }
    // });
    let page: Block = new StartPage();
    const { pathname } = window.location;

    switch(pathname) {
        case PATHS.SIGNIN:
            console.log('SIGN IN');
            page = new SigninPage();
            break;
        case PATHS.SIGNUP:
            console.log('SIGN UP');
            page = new SignupPage();
            break;
        case PATHS[404]:
            page = new ErrorPage(pathname);
            break;
        case PATHS[500]:
            page = new ErrorPage(pathname);
        default:
            console.log('DEFAULT');
            break;
    }
    // const signupPage = new SignupPage();
    
    // const button = new Button({
    //     text: 'Hello!',
    //     type: 'button',
    // });

    renderDOM('#app', page);
    // setTimeout(() => {
    //     signinPage.setProps({
    //         buttonText: 'Click me, please!!'
    //     });
    // }, 3000);
});

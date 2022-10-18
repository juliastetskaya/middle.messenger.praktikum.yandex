import Panel from './components/Panel';
import Button from './components/Button';
import Signin from './blocks/Signin';
import Form from './components/Form';
import Input from './components/Input';
import Link from './components/Link';
import { registerComponent, renderDOM } from './core';

import './styles/colors.css';
import './styles/style.css';

registerComponent(Panel);
registerComponent(Button);
registerComponent(Form);
registerComponent(Input);
registerComponent(Link);

document.addEventListener('DOMContentLoaded', () => {
    // const button = new Button({
    //     text: 'Click me!',
    //     events: {
    //         click: () => console.log('Clicked!')
    //     }
    // });
    const signinPage = new Signin();
    
    // const button = new Button({
    //     text: 'Hello!',
    //     type: 'button',
    // });

    renderDOM('#app', signinPage);
    // setTimeout(() => {
    //     signinPage.setProps({
    //         buttonText: 'Click me, please!!'
    //     });
    // }, 3000);
});

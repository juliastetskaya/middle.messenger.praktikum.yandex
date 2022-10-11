import Button from './components/Button';
import { renderDOM } from './utils/renderDOM';

document.addEventListener('DOMContentLoaded', () => {
    const button = new Button({
        text: 'Click me!',
        events: {
            click: () => console.log('Clicked!')
        }
    });

    renderDOM('#app', button);
    setTimeout(() => {
        button.setProps({
            text: 'Click me, please!',
            events: {
                click: () => console.log('Yet another click!')
            }
        });
    }, 3000);
});

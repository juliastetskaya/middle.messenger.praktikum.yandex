import Block from 'core/Block';

import './overlay.css';

type OverlayProps = {
    events: {
        click?: (e: Event) => void;
    }
};

export class Overlay extends Block<OverlayProps> {
    static componentName = 'Overlay';

    constructor() {
        super({
            events: {
                click: () => {
                    const addUserEl = document.querySelector('.add-user');
                    const removeUserEl = document.querySelector('.remove-user');
                    const overlayEl = document.querySelector('.overlay');
                    const createChatEl = document.querySelector('.create-chat');

                    overlayEl?.classList.remove('active-overlay');
                    addUserEl?.classList.remove('active-user-panel');
                    removeUserEl?.classList.remove('active-user-panel');
                    createChatEl?.classList.remove('active-user-panel');
                },
            },
        });
    }

    render() {
        return `
            <div class="overlay"></div>
        `;
    }
}

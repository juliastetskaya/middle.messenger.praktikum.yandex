import Block from './Block';

export default function renderDOM(rootSelector: string, component: Block) {
    const root = document.querySelector(rootSelector);

    if (!root) {
        throw new Error('Root not found!');
    }

    root.innerHTML = '';

    root.appendChild(component.getContent()!);
}

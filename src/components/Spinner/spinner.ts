import Block from 'core/Block';

import './spinner.css';

export class Spinner extends Block {
    static componentName = 'Spinner';

    render() {
        return '<span class="spinner"></span>';
    }
}

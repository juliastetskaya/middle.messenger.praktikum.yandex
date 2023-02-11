import Block from 'core/Block';

import './search-input.css';

type SearchInputProps = {
    placeholder: string;
    onInput: (e: Event) => void;
};

export class SearchInput extends Block<SearchInputProps> {
    static componentName = 'SearchInput';

    render() {
        return `
            <div class="controlled-input">
                {{{ Input
                    type="text"
                    name="search-input"
                    class="chat__search-field"
                    placeholder=placeholder
                    onInput=onInput
                }}}
            </div>
        `;
    }
}

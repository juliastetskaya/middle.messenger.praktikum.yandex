import { Store, Block } from 'core';

import { validateAndGetInputData } from 'utils';
import { withStore } from 'HOC';
import {
    MessageProps,
    UserChangeProps,
    TextMessageProps,
    ImageMessageProps,
    ButtonProps,
    LinkProps,
} from 'components';

import './chat.css';

type ChatPageProps = {
    link: LinkProps;
    chats: MessageProps[];
    searchPlaceholder: string;
    rightSidePlaceholder: string;
    addUser: UserChangeProps;
    removeUser: UserChangeProps;
    message: TextMessageProps;
    myMessage: TextMessageProps;
    chatName: string;
    userMenu: LinkProps[];
    placeholder: string;
    messageMenu: LinkProps[];
    messageDate: string;
    imageMessage: ImageMessageProps;
    button: ButtonProps;
    store: Store<AppState>;
};

class ChatPage extends Block<ChatPageProps> {
    static componentName = 'ChatPage';

    constructor(props: ChatPageProps) {
        super(props);

        this.setProps({
            button: { onClick: this.onSubmit },
        });
    }

    onSubmit = (e: Event) => {
        e.preventDefault();
        const values = validateAndGetInputData([{ name: 'message' }], this.element);

        if (values) {
            console.log('Form is ready to send data:', values);
        }
    };

    render() {
        const { isLoading } = this.props.store.getState();

        return `
            <div class='container'>
                {{#if ${isLoading}}}
                    {{{ Spinner }}}
                {{else}}
                    <div class="chat">
                        <aside class="left-side">
                            {{{ Link class="chat__profile-link" href=link.href text=link.text }}}
                            <form action="#">
                                <input class="chat__search-field" type="text" placeholder={{searchPlaceholder}}>
                            </form>
                            {{{ ChatList chats=chats }}}
                        </aside>
                        <div class="right-side">
                            {{{ ChatTitle chatName=chatName userMenu=userMenu }}}
                            {{{ MessageArea
                                message=message
                                imageMessage=imageMessage
                                myMessage=myMessage
                                messageDate=messageDate
                            }}}
                            {{{ ChatMessage messageMenu=messageMenu placeholder=placeholder button=button }}}
                        </div>
                        {{{ UserChange title=addUser.title button=addUser.button input=addUser.input }}}
                        {{{ UserChange title=removeUser.title button=removeUser.button input=removeUser.input }}}
                        <div class="overlay"></div>
                    </div>
                {{/if}}
            </div>
        `;
    }
}

export default withStore(ChatPage);

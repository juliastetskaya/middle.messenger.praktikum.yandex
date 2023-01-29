import { Block } from 'core';

import { validateAndGetInputData } from 'utils';
import {
    withChats,
    withLoading,
    withDispatch,
    withDisplayName,
    ChatsStateProps,
    DispatchStateProps,
    LoadingStateProps,
    DisplayNameStateProps,
} from 'HOC';
import {
    UserChangeProps,
    TextMessageProps,
    ImageMessageProps,
    ButtonProps,
    LinkProps,
} from 'components';
import { getChats } from 'services/chats';

import './chat.css';

interface ChatPageProps extends ChatsStateProps, DispatchStateProps, LoadingStateProps, DisplayNameStateProps {
    link: LinkProps;
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
}

class ChatPage extends Block<ChatPageProps> {
    static componentName = 'ChatPage';

    constructor(props: ChatPageProps) {
        super(props);

        this.getChats();

        this.setProps({
            button: { onClick: this.onSubmit },
        });
    }

    getChats = () => {
        if (!this.props.chats) {
            this.props.dispatch(getChats);
        }
    };

    onSubmit = (e: Event) => {
        e.preventDefault();
        const values = validateAndGetInputData([{ name: 'message' }], this.element);

        if (values) {
            console.log('Form is ready to send data:', values);
        }
    };

    render() {
        return `
            <div class='container'>
                {{#if isLoading}}
                    {{{ Spinner }}}
                {{else}}
                    <div class="chat">
                        <aside class="left-side">
                            {{{ Link class="chat__profile-link" to=link.to text=link.text }}}
                            <form method="POST" onsubmit=onSubmitForm>
                                {{{ ControlledInput
                                    class="chat__search-field"
                                    type="text"
                                    placeholder=searchPlaceholder
                                }}}
                            </form>
                            {{{ ChatList chats=chats }}}
                        </aside>
                        <div class="right-side">
                            {{{ ChatTitle chatName=displayName userMenu=userMenu }}}
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

export default withDisplayName(withChats(withLoading(withDispatch(ChatPage))));

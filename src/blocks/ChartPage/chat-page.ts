import Block from 'core/Block';

import data from 'data/chats';
import { validateAndGetInputData } from 'utils';
import { MessageProps } from 'components/Message';
import { UserChangeProps } from 'components/UserChange';
import { TextMessageProps } from 'components/TextMessage';
import { ImageMessageProps } from 'components/ImageMessage';
import { ButtonProps } from 'components/Button';
import { LinkProps } from 'components/Link';

import './chat.css';

const {
    link,
    chats,
    addUser,
    message,
    chatName,
    userMenu,
    myMessage,
    removeUser,
    placeholder,
    messageMenu,
    messageDate,
    imageMessage,
    searchPlaceholder,
    rightSidePlaceholder,
} = data;

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
};

export class ChatPage extends Block<ChatPageProps> {
    static componentName = 'ChatPage';

    constructor() {
        super({
            link,
            chats,
            addUser,
            message,
            chatName,
            userMenu,
            myMessage,
            removeUser,
            placeholder,
            messageMenu,
            messageDate,
            imageMessage,
            searchPlaceholder,
            rightSidePlaceholder,
        } as ChatPageProps);

        this.setProps({
            button: { onClick: this.onSubmit },
        });
    }

    onSubmit = () => {
        const values = validateAndGetInputData([{ name: 'message' }], this.element);

        if (values) {
            console.log('Form is ready to send data:', values);
        }
    };

    render() {
        return `
            <div class="chat">
                <aside class="left-side">
                    {{{ Link class="chat__profile-link" href=link.href text=link.text }}}
                    <form action="#">
                        <input class="chat__search-field" type="text" placeholder={{searchPlaceholder}}>
                    </form>
                    {{{ ChatList chats=chats }}}
                </aside>
                <aside class="right-side">
                    {{{ ChatTitle chatName=chatName userMenu=userMenu }}}
                    {{{ MessageArea
                        message=message
                        imageMessage=imageMessage
                        myMessage=myMessage
                        messageDate=messageDate
                    }}}
                    {{{ ChatMessage messageMenu=messageMenu placeholder=placeholder button=button }}}
                </aside>
                {{{ UserChange title=addUser.title button=addUser.button input=addUser.input }}}
                {{{ UserChange title=removeUser.title button=removeUser.button input=removeUser.input }}}
                <div class="overlay"></div>
            </div>
        `;
    }
}

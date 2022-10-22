import Block from "../../core/Block";

import data from '../../data/chats';

import './chat.css';

export class ChatPage extends Block {
    constructor() {
        super({ ...data });
    }

    render() {
        return `
            <div class="chat">
                <div class="left-side">
                    {{{ Link class="chat__profile-link" linkHref=linkHref linkText=linkText }}}
                    <input class="chat__search-field" type="text" placeholder={{searchPlaceholder}}>
                    {{{ ChatList chats=chats }}}
                </div>
                <div class="right-side">
                    {{{ ChatTitle chatName=chatName userMenu=userMenu }}}
                    {{{ MessageArea message=message imageMessage=imageMessage myMessage=myMessage messageDate=messageDate }}}
                    {{{ ChatMessage messageMenu=messageMenu }}}
                </div>
                {{{ UserChange title=addUser.title textButton=addUser.textButton input=addUser.input }}}
                {{{ UserChange title=removeUser.title textButton=removeUser.textButton input=removeUser.input }}}
                <div class="overlay"></div>
            </div>
        `;
    }
}

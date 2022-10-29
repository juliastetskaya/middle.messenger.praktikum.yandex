import Panel from 'components/Panel';
import Button from 'components/Button';
import Form from 'components/Form';
import Input from 'components/Input';
import Link from 'components/Link';
import Error from 'components/Error';
import LeftMenu from 'components/LeftMenu';
import LinkList from 'components/LinkList';
import Avatar from 'components/Avatar';
import AvatarPanel from 'components/AvatarPanel';
import ChatList from 'components/ChatList';
import Message from 'components/Message';
import ChatTitle from 'components/ChatTitle';
import TextMessage from 'components/TextMessage';
import ImageMessage from 'components/ImageMessage';
import MessageArea from 'components/MessageArea';
import ChatMessage from 'components/ChatMessage';
import ChatMenu from 'components/ChatMenu';
import UserChange from 'components/UserChange';

import StartPage from 'blocks/StartPage';
import SigninPage from 'blocks/SigninPage';
import SignupPage from 'blocks/SignupPage';
import ProfilePage from 'blocks/ProfilePage';
import ErrorPage from 'blocks/ErrorPage';
import ProfileChangePage from 'blocks/ProfileChangePage';
import PasswordChangePage from 'blocks/PasswordChangePage';
import ChatPage from 'blocks/ChartPage';

import { registerComponent, renderDOM, Block } from './core';

import { PATHS } from './constants';

import './styles/colors.css';
import './styles/style.css';

registerComponent(Panel);
registerComponent(Button);
registerComponent(Form);
registerComponent(Input);
registerComponent(Error);
registerComponent(Avatar);
registerComponent(LeftMenu);
registerComponent(LinkList);
registerComponent(AvatarPanel);
registerComponent(Link);
registerComponent(ChatList);
registerComponent(Message);
registerComponent(ChatTitle);
registerComponent(TextMessage);
registerComponent(ImageMessage);
registerComponent(MessageArea);
registerComponent(ChatMessage);
registerComponent(ChatMenu);
registerComponent(UserChange);

document.addEventListener('DOMContentLoaded', () => {
    let page: Block = new StartPage();
    const { pathname } = window.location;

    switch(pathname) {
        case PATHS.SIGNIN:
            console.log('SIGN IN');
            page = new SigninPage();
            break;
        case PATHS.SIGNUP:
            console.log('SIGN UP');
            page = new SignupPage();
            break;
        case PATHS[404]:
            page = new ErrorPage(pathname);
            break;
        case PATHS[500]:
            page = new ErrorPage(pathname);
            break;
        case PATHS.PROFILE:
            page = new ProfilePage();
            break;
        case PATHS.PROFILE_CHANGE:
            page = new ProfileChangePage();
            break;
        case PATHS.PASSWORD_CHANGE:
            page = new PasswordChangePage();
            break;
        case PATHS.CHAT:
            page = new ChatPage();
            break;
        default:
            console.log('DEFAULT');
            break;
    }

    renderDOM('#app', page);
});

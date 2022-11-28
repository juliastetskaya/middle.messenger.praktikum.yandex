import Panel from 'components/Panel';
import Button from 'components/Button';
import Form from 'components/Form';
import Input from 'components/Input';
import Label from 'components/Label';
import ControlledInput from 'components/ControlledInput';
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
import Field from 'components/Field';
import ProfileList from 'components/ProfileList';

import { registerComponent, Store } from 'core';
import { Router, CoreRouter } from 'core/Router';
import { defaultStore } from './store';
import { initRouter } from './router';

import './styles/colors.css';
import './styles/style.css';

registerComponent(Panel);
registerComponent(Button);
registerComponent(Form);
registerComponent(Input);
registerComponent(Label);
registerComponent(ControlledInput);
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
registerComponent(Field);
registerComponent(ProfileList);

declare global {
    interface Window {
        router: CoreRouter;
        store: Store<AppState>;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const router = new Router();
    const store = new Store<AppState>(defaultStore);

    window.router = router;
    window.store = store;
    initRouter(router);
});

import { registerComponent, Store } from 'core';
import { Router, CoreRouter } from 'core/Router';
import { initApp } from 'services/initApp';
import {
    Avatar,
    AvatarPanel,
    Button,
    Form,
    Input,
    Label,
    ControlledInput,
    Link,
    Error,
    LeftMenu,
    LinkList,
    ChatList,
    Message,
    ChatTitle,
    TextMessage,
    ImageMessage,
    MessageArea,
    ChatMessage,
    ChatMenu,
    UserChange,
    Field,
    Panel,
    ProfileList,
    Spinner,
} from 'components';

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
registerComponent(Spinner);

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

    initRouter(router, store);

    // TODO: убрать store.on
    store.on('changed', (_: any, nextState: any) => {
        console.log('%cstore updated', 'background: #222; color: #bada55', nextState);
    });

    store.dispatch(initApp);
});

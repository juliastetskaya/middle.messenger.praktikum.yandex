import { registerComponent, store, router } from 'core';
import { getUserWithErrorHandler } from 'API/fetchAPI';
import Handlebars, { HelperOptions } from 'handlebars';
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
    ChatItem,
    SearchInput,
    Overlay,
    ChatArea,
    Messages,
} from 'components';

import { ROUTES } from './constants';
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
registerComponent(ChatItem);
registerComponent(SearchInput);
registerComponent(Overlay);
registerComponent(ChatArea);
registerComponent(Messages);

Handlebars.registerHelper(
    'ifEquals',
    function register(this: unknown, arg1: string, arg2: string, options: HelperOptions) {
        return (arg1 === arg2) ? options.fn(this) : options.inverse(this);
    },
);

document.addEventListener('DOMContentLoaded', async () => {
    initRouter(router);

    let isProtected = true;

    switch (window.location.pathname) {
        case ROUTES.SIGNIN:
        case ROUTES.SIGNUP:
            isProtected = false;
            break;
        default:
            break;
    }

    store.dispatch({ isLoading: true });

    try {
        const user = await getUserWithErrorHandler();

        store.dispatch({ user, error: null, isLoading: false });

        if (!isProtected) {
            router.go(ROUTES.PROFILE);
        }
    } catch (error: any) {
        if (isProtected) {
            router.go(ROUTES.SIGNIN);
        }
        store.dispatch({ user: null, isLoading: false, error });
    }
});

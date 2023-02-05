import { registerComponent, store, router } from 'core';
import { getUserWithErrorHandler } from 'API/fetchAPI';
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

// declare global {
//     interface Window {
//         router: CoreRouter;
//         store: Store<AppState>;
//     }
// }

document.addEventListener('DOMContentLoaded', async () => {
    // const store = new Store<AppState>(defaultStore);

    // window.router = Router;
    // window.store = store;

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

    // TODO: убрать store.on
    store.on('changed', (_: any, nextState: any) => {
        console.log('%cstore updated', 'background: #222; color: #bada55', nextState);
    });

    store.dispatch({ isLoading: true });

    try {
        const user = await getUserWithErrorHandler();

        store.dispatch({ user, error: null, isLoading: false });

        if (!isProtected) {
            router.go(ROUTES.PROFILE);
        }
    } catch (error: any) {
        console.error(error);

        if (isProtected) {
            router.go(ROUTES.SIGNIN);
        }
        store.dispatch({ user: null, isLoading: false, error });
    }
});

import { EventBus } from 'core';
import { WS_URL } from '../constants';

enum WsEvents {
    GET_OLD = 'get old',
    MESSAGE = 'message',
    USER_CONNECTED = 'user connected',
}

export class WebSocketTransport extends EventBus {
    private _socket: WebSocket;

    constructor(userId: number, chatId: number, token: string) {
        super();

        this._socket = new WebSocket(`${WS_URL}/chats/${userId}/${chatId}/${token}`);

        this._socket.addEventListener('open', () => {
            console.log('Соединение установлено');

            this.getOldMessages();
        });

        this._socket.addEventListener('message', (event) => {
            console.log('Получены данные', event.data);

            const dataToJSON = JSON.parse(event.data);

            if (dataToJSON.type === WsEvents.USER_CONNECTED) {
                return;
            }
            this.emit('message-arrived', dataToJSON);
        });

        this._socket.addEventListener('close', (event) => {
            if (event.wasClean) {
                console.log('Соединение закрыто чисто');
            } else {
                console.log('Обрыв соединения');
            }

            console.log(`Код: ${event.code} | Причина: ${event.reason}`);
        });

        this._socket.addEventListener('error', (event) => {
            console.log('Ошибка', event);
        });
    }

    public getOldMessages = (content: string = '0') => {
        this._socket.send(
            JSON.stringify({
                content,
                type: WsEvents.GET_OLD,
            }),
        );
    };

    send = (message: string) => {
        this._socket.send(
            JSON.stringify({
                content: message,
                type: WsEvents.MESSAGE,
            }),
        );
    };
}

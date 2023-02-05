import { EventBus } from 'core';
import { WS_URL } from '../constants';

enum WsEvents {
    GET_OLD = 'get old',
    PING = 'ping',
}

export class WebSocketTransport extends EventBus {
    private _socket: WebSocket;

    private isKeepConnection: boolean;

    constructor(userId: string, chatId: number, token: string) {
        super();
        this._socket = new WebSocket(`${WS_URL}/chats/${userId}/${chatId}/${token}`);

        this.isKeepConnection = false;

        this.addListeners();
    }

    pingConnection = (timeout: number = 2000) => {
        setTimeout(() => {
            this._socket.send(
                JSON.stringify({
                    type: WsEvents.PING,
                }),
            );

            if (this.isKeepConnection) {
                this.pingConnection();
            }
        }, timeout);
    };

    start = () => {
        this.isKeepConnection = true;
        this.pingConnection();
    };

    stop = () => {
        this.isKeepConnection = false;
    };

    public getOldMessages = (content: string = '0') => {
        this._socket.send(
            JSON.stringify({
                content,
                type: WsEvents.GET_OLD,
            }),
        );
    };

    private _onOpen = () => {
        this._socket.onopen = () => {
            console.log('Соединение установлено');

            this.getOldMessages();
        };
    };

    private _onError = () => {
        this._socket.onerror = (event) => {
            console.log(`Ошибка: ${event}`);
        };
    };

    private _onClose = () => {
        this._socket.onclose = (event) => {
            if (event.wasClean) {
                console.log('Соединение закрыто чисто');
            } else {
                console.log('Обрыв соединения');
            }

            console.log(`Код: ${event.code} | Причина: ${event.reason}`);
        };
    };

    private _onMessage = () => {
        this._socket.onmessage = (event) => {
            console.log(`Получены данные: ${event.data}`);
        };
    };

    addListeners = () => {
        this._onOpen();
        this._onMessage();
        this._onError();
        this._onClose();
    };
}

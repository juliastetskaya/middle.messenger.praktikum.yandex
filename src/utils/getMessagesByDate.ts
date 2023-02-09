import { ChatMessage } from '../components/ChatArea/chat-area';

const MONTHS = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря',
];

export const getMessagesByDate = (messages: ChatMessage[], userId: number, users: User[]) => {
    const transformedDateMessages = messages.map((message) => {
        const messageDate = new Date(message.time);
        const currentDate = new Date(Date.now());

        const dateOfMessage = `${messageDate.getDate()} ${MONTHS[messageDate.getMonth()]}`;
        const todayDate = `${currentDate.getDate()} ${MONTHS[currentDate.getMonth()]}`;

        const hours = messageDate.getHours();
        const minutes = messageDate.getMinutes();

        const author = users?.find((user) => user.id === message.user_id);

        return ({
            ...message,
            date: dateOfMessage === todayDate ? 'Today' : dateOfMessage,
            time: `${hours > 9 ? hours : `0${hours}`}:${minutes > 9 ? minutes : `0${minutes}`}`,
            isMyMessage: userId === message.user_id,
            author: message.user_id !== userId && (author?.display_name || author?.login),
        });
    }).reverse();

    const dates = Array.from(new Set(transformedDateMessages.map((message) => message.date)));

    return {
        messages: transformedDateMessages,
        dates,
    };
};

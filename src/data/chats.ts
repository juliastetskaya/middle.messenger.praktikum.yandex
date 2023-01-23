import photograph from '../static/photograph.png';

export default ({
    searchPlaceholder: 'Поиск',
    link: {
        to: '/profile',
        text: 'Профиль',
    },
    rightSidePlaceholder: 'Выберите чат чтобы отправить сообщение',
    chatName: 'Вадим',
    userMenu: [
        {
            text: 'Добавить пользователя',
            to: '/',
        },
        {
            text: 'Удалить пользователя',
            to: '/',
        },
    ],
    placeholder: 'Сообщение',
    messageMenu: [
        {
            text: 'Фото или Видео',
            to: '/',
        },
        {
            text: 'Файл',
            to: '/',
        },
        {
            text: 'Локация',
            to: '/',
        },
    ],
    message: {
        text: 'Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой. Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.',
        time: '11:56',
    },
    myMessage: {
        text: 'Круто!',
        time: '12:00',
    },
    imageMessage: {
        src: photograph,
        time: '11:56',
    },
    messageDate: '19 июня',
    addUser: {
        title: 'Добавить пользователя',
        button: {
            text: 'Добавить',
        },
        input: {
            label: 'Логин',
            name: 'login',
            placeholder: 'ivanivanov',
        },
    },
    removeUser: {
        title: 'Удалить пользователя',
        button: {
            text: 'Удалить',
        },
        input: {
            label: 'Логин',
            name: 'login',
            placeholder: 'ivanivanov',
        },
    },
});

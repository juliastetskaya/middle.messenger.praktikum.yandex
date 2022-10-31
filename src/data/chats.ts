import photograph from '../static/photograph.png';

export default ({
    searchPlaceholder: "Поиск",
    link: {
        href: "/profile.html",
        text: "Профиль",
    },
    rightSidePlaceholder: "Выберите чат чтобы отправить сообщение",
    chats: [
        {
            chatName: "Андрей",
            text: "Изображение",
            time: "10:49",
            count: 2,
        },
        {
            chatName: "Киноклуб",
            author: "Вы",
            text: "стикер",
            time: "12:00",
            count: 5,
        },
        {
            chatName: "Илья",
            text: "Друзья, у меня для вас особенный выпуск новостей!...",
            time: "15:12",
            count: 4,
        },
        {
            chatName: "Вадим",
            author: "Вы",
            text: "Круто!",
            time: "Пт",
            count: 3
        },
        {
            chatName: "тет-а-теты",
            text: "И Human Interface Guidelines и Material Design рекомендуют...",
            time: "Ср",
            count: 22,
        },
        {
            chatName: "1, 2, 3",
            text: "Миллионы россиян ежедневно проводят десятки часов свое...",
            time: "Пн",
            count: 12,
        },
        {
            chatName: "Design Destroyer",
            text: "В 2008 году художник Jon Rafman  начал собирать...",
            time: "Пн",
            count: 9,
        },
        {
            chatName: "Day.",
            text: "Так увлёкся работой по курсу, что совсем забыл его анонсир...",
            time: "1 Мая 2020",
            count: 7,
        },
        {
            chatName: "Стас Рогозин",
            text: "Можно или сегодня или завтра вечером.",
            time: "12 Апр 2020",
            count: 6,
        }
    ],
    chatName: "Вадим",
    userMenu: [
        {
            text: "Добавить пользователя",
            href: "/",
        },
        {
            text: "Удалить пользователя",
            href: "/",
        }
    ],
    placeholder: "Сообщение",
    messageMenu: [
        {
            text: "Фото или Видео",
            href: "/",
        },
        {
            text: "Файл",
            href: "/",
        },
        {
            text: "Локация",
            href: "/",
        }
    ],
    message: {
        text: "Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой. Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.",
        time: "11:56"
    },
    myMessage: {
        text: "Круто!",
        time: "12:00"
    },
    imageMessage: {
        src: photograph,
        time: "11:56",
    },
    messageDate: "19 июня",
    addUser: {
        title: "Добавить пользователя",
        textButton: "Добавить",
        input: {
            label: "Логин",
            name: "add_user",
            placeholder: "ivanivanov",
        }
    },
    removeUser: {
        title: "Удалить пользователя",
        textButton: "Удалить",
        input: {
            label: "Логин",
            name: "remove_user",
            placeholder: "ivanivanov",
        }
    }
});

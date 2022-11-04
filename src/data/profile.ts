export default {
    name: "Иван",
    button: {
        text: "Сохранить",
    },
    fields: [
        {
            type: "email",
            name: "email",
            label: "Почта",
            placeholder: "pochta@yandex.ru",
        },
        {
            type: "text",
            name: "login",
            label: "Логин",
            placeholder: "ivanivanov",
        },
        {
            type: "text",
            name: "first_name",
            label: "Имя",
            placeholder: "Иван",
        },
        {
            type: "text",
            name: "second_name",
            label: "Фамилия",
            placeholder: "Иванов",
        },
        {
            type: "text",
            name: "chat_name",
            label: "Имя в чате",
            placeholder: "Иван",
        },
        {
            type: "tel",
            name: "phone",
            label: "Телефон",
            placeholder: "+7(909)9673030",
        },
    ],
    links: [
        {
            text: "Изменить данные",
            href: "/profile-change.html"
        },
        {
            text: "Изменить пароль",
            href: "/password-change.html"
        },
        {
            text: "Выйти",
            href: "/",
            class: "quit"
        },
    ],
    profileFields: [
        {
            label: 'Почта',
            value: 'pochta@yandex.ru',
        },
        {
            label: 'Логин',
            value: 'ivanivanov',
        },
        {
            label: 'Имя',
            value: 'Иван',
        },
        {
            label: 'Фамилия',
            value: 'Иванов',
        },
        {
            label: 'Имя в чате',
            value: 'Иван',
        },
        {
            label: 'Телефон',
            value: '+7(909)9673030',
        },
    ],
    passwordFields: [
        {
            type: "password",
            name: "oldPassword",
            label: "Старый пароль",
            placeholder: "•••••••••"
        },
        {
            type: "password",
            name: "newPassword",
            label: "Новый пароль",
            placeholder: "•••••••••••"
        },
        {
            type: "password",
            name: "passwordCheck",
            label: "Повторите новый пароль",
            placeholder: "•••••••••••"
        },
    ],
    placeholder: "Поменять аватар",
};

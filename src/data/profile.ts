export default {
    button: {
        text: 'Сохранить',
    },
    fields: [
        {
            type: 'email',
            name: 'email',
            label: 'Почта',
            placeholder: 'pochta@yandex.ru',
        },
        {
            type: 'text',
            name: 'login',
            label: 'Логин',
            placeholder: 'ivanivanov',
        },
        {
            type: 'text',
            name: 'first_name',
            label: 'Имя',
            placeholder: 'Иван',
        },
        {
            type: 'text',
            name: 'second_name',
            label: 'Фамилия',
            placeholder: 'Иванов',
        },
        {
            type: 'text',
            name: 'chat_name',
            label: 'Имя в чате',
            placeholder: 'Иван',
        },
        {
            type: 'tel',
            name: 'phone',
            label: 'Телефон',
            placeholder: '+7(909)9673030',
        },
    ],
    links: [
        {
            text: 'Изменить данные',
            href: '/profile-change.html',
        },
        {
            text: 'Изменить пароль',
            href: '/password-change.html',
        },
        {
            text: 'Выйти',
            class: 'quit',
        },
    ],
    profileFields: [
        {
            label: 'Почта',
            value: 'pochta@yandex.ru',
            name: 'email',
        },
        {
            label: 'Логин',
            value: 'ivanivanov',
            name: 'login',
        },
        {
            label: 'Имя',
            value: 'Иван',
            name: 'first_name',
        },
        {
            label: 'Фамилия',
            value: 'Иванов',
            name: 'second_name',
        },
        {
            label: 'Имя в чате',
            value: 'Иван',
            name: 'chat_name',
        },
        {
            label: 'Телефон',
            value: '+7(909)9673030',
            name: 'phone',
        },
    ],
    passwordFields: [
        {
            type: 'password',
            name: 'oldPassword',
            label: 'Старый пароль',
            placeholder: '•••••••••',
        },
        {
            type: 'password',
            name: 'newPassword',
            label: 'Новый пароль',
            placeholder: '•••••••••••',
        },
        {
            type: 'password',
            name: 'passwordCheck',
            label: 'Повторите новый пароль',
            placeholder: '•••••••••••',
        },
    ],
    placeholder: 'Поменять аватар',
    avatar: {
        title: 'Загрузите файл',
        link: {
            text: 'Выбрать файл на компьютере',
            href: '/',
        },
        button: {
            text: 'Поменять',
        },
    },
};

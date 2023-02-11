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
            name: 'display_name',
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
            to: '/profile-change',
        },
        {
            text: 'Изменить пароль',
            to: '/password-change',
        },
        {
            text: 'Выйти',
            class: 'quit',
        },
    ],
    profileFields: [
        {
            label: 'Почта',
            name: 'email',
        },
        {
            label: 'Логин',
            name: 'login',
        },
        {
            label: 'Имя',
            name: 'first_name',
        },
        {
            label: 'Фамилия',
            name: 'second_name',
        },
        {
            label: 'Имя в чате',
            name: 'display_name',
        },
        {
            label: 'Телефон',
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
            to: '/',
        },
        button: {
            text: 'Поменять',
        },
    },
};

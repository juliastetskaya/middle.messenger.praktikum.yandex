export default ({
    text: 'Регистрация',
    button: {
        text: 'Зарегистрироваться',
    },
    link: {
        text: 'Войти',
        href: '/signin.html',
    },
    fields: [
        {
            type: 'email',
            name: 'email',
            label: 'Почта',
            placeholder: 'Почта',
            errorMessage: '',
        },
        {
            type: 'text',
            name: 'login',
            label: 'Логин',
            placeholder: 'Логин',
            errorMessage: '',
        },
        {
            type: 'text',
            name: 'first_name',
            label: 'Имя',
            placeholder: 'Имя',
            errorMessage: '',
        },
        {
            type: 'text',
            name: 'second_name',
            label: 'Фамилия',
            placeholder: 'Фамилия',
            errorMessage: '',
        },
        {
            type: 'tel',
            name: 'phone',
            label: 'Телефон',
            placeholder: 'Телефон',
            errorMessage: '',
        },
        {
            type: 'password',
            name: 'password',
            class: 'password',
            label: 'Пароль',
            placeholder: 'Пароль',
            errorMessage: '',
        },
        {
            type: 'password',
            name: 'passwordCheck',
            class: 'password',
            label: 'Пароль (еще раз)',
            placeholder: 'Пароль',
            errorMessage: '',
        },
    ],
});

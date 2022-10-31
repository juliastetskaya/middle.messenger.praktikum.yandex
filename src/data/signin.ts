export default ({
    text: "Вход",
    button: {
        text: "Авторизоваться",
    },
    link: {
        text: "Нет аккаунта?",
        href: "/signup.html",
    },
    fields: [
        {
            type: "text",
            name: "login",
            label: "Логин",
            placeholder: "Логин",
            errorMessage: "",
            value: "",
            ref: "loginRef",
        },
        {
            type: "password",
            name: "password",
            class: "password",
            label: "Пароль",
            placeholder: "Пароль",
            errorMessage: "",
            value: "",
            ref: "passwordRef",
        }
    ]
});

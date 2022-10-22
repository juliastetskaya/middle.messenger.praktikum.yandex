export default ({
    text: "Вход",
    buttonText: "Авторизоваться",
    linkText: "Нет аккаунта?",
    linkHref: "/signup.html",
    fields: [
        {
            type: "text",
            name: "login",
            label: "Логин",
            placeholder: "Логин",
            errorMessage: "Неверный логин",
        },
        {
            type: "password",
            name: "password",
            class: "password",
            label: "Пароль",
            placeholder: "Пароль",
            errorMessage: "Слишком короткий пароль",
        }
    ]
});

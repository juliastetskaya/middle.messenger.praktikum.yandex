export default ({
    name: "Иван",
    saveButton: "Сохранить",
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
        }
    ],
    links: [
        {
            linkText: "Изменить данные",
            linkHref: "/profile-change.html"
        },
        {
            linkText: "Изменить пароль",
            linkHref: "/password-change.html"
        },
        {
            linkText: "Выйти",
            linkHref: "/",
            class: "quit"
        }
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
            name: "newPassword",
            label: "Повторите новый пароль",
            placeholder: "•••••••••••"
        }
    ],
    placeholder: "Поменять аватар",
});

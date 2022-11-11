const EMPTY_FIELD = 'Поле не должно быть пустым';
const MORE_THAN_3_SYMBOLS = 'Должно содержать более 3 символов';
const ONLY_LATIN_LETTERS = 'Должно содержать только латинские буквы';
const NOT_MORE_THAN_20_SYMBOLS = 'Не может быть более 20 символов';
const NOT_ONLY_DIGITS = 'Не может содержать только цифры';
const NO_WHITESPACES = 'Не может содержать пробелы';
const NO_SPECIAL_SYMBOLS = 'Не может содержать спецсимволы';
const MORE_THAN_8_SYMBOLS = 'Должно содержать более 8 символов';
const NOT_MORE_THAN_40_SYMBOLS = 'Не может быть более 40 символов';
const AT_LEAST_ONE_DIGIT = 'Должно содержать хотя бы одну цифру';
const AT_LEAST_ONE_CAPITAL_LETTER = 'Должно содержать хотя бы одну заглавную букву';
const MORE_THAN_10_SYMBOLS = 'Должно содержать более 10 символов';
const NOT_MORE_THAN_15_SYMBOLS = 'Не может быть более 15 символов';
const ONLY_DIGITS = 'Должно состоять только из цифр';
const START_WITH_PLUS = 'Должно начинаться с плюса';
const DOG_SYMBOL = 'Должно содержать символ @';
const DOT_SYMBOL = 'Должно содержать точку';
const LETTERS_BEFORE_AND_AFTER_DOT = 'Должно содержать буквы перед и после точки';
const START_WITH_CAPITAL_LETTER = 'Должно начинаться с заглавной буквы';
const ONLY_LETTERS = 'Должно содержать только буквы';

const isEmpty = (value: string): boolean => value.length === 0;
const isLessThan = (value: string, amount: number): boolean => value.length < amount;
const isMoreThan = (value: string, amount: number): boolean => value.length > amount;
const hasCyrillic = (value: string): boolean => Boolean(value.match(/[а-яА-Я]/g));
const hasLetters = (value: string): boolean => Boolean(value.match(/[^0-9+]/g));
const hasWhitespaces = (value: string): boolean => Boolean(value.match(/\s/g));
const hasCapitalLetter = (value: string): boolean => Boolean(value.match(/[A-ZА-Я]/g));
const isStartWithPlus = (value: string): boolean => Boolean(value.match(/^[+]/g));
const hasDigits = (value: string): boolean => Boolean(value.match(/\d+/g));
const hasDogSymbol = (value: string): boolean => Boolean(value.match(/[@]/g));
const hasDotSymbol = (value: string): boolean => Boolean(value.match(/[.]/g));
const hasLettersBeforeAndAfterDot = (value: string) => Boolean(value.match(/\w+[.]\w+/g));
const startWithCapitalLetter = (value: string): boolean => Boolean(value.match(/^[A-ZА-Я]/g));

export enum ValidateType {
    Login = 'login',
    Password = 'password',
    PasswordCheck = 'passwordCheck',
    OldPassword = 'oldPassword',
    NewPassword = 'newPassword',
    Email = 'email',
    FirstName = 'first_name',
    SecondName = 'second_name',
    Phone = 'phone',
    Message = 'message',
    ChatName = 'chat_name',
}

type ValidateRule = {
    type: string;
    value: string;
};

export const validateForm = (rules: ValidateRule[]): string => {
    let errorMessage = '';

    for (let i = 0; i < rules.length; i += 1) {
        const { type, value } = rules[i];

        switch (type) {
            case ValidateType.Login:
                if (isEmpty(value)) {
                    errorMessage = EMPTY_FIELD;
                } else if (isLessThan(value, 3)) {
                    errorMessage = MORE_THAN_3_SYMBOLS;
                } else if (hasCyrillic(value)) {
                    errorMessage = ONLY_LATIN_LETTERS;
                } else if (isMoreThan(value, 20)) {
                    errorMessage = NOT_MORE_THAN_20_SYMBOLS;
                } else if (!hasLetters(value)) {
                    errorMessage = NOT_ONLY_DIGITS;
                } else if (hasWhitespaces(value)) {
                    errorMessage = NO_WHITESPACES;
                } else if (!value.match(/^[a-zA-Z0-9-_]{3,20}$/g)) {
                    errorMessage = NO_SPECIAL_SYMBOLS;
                }
                break;
            case ValidateType.Password:
            case ValidateType.PasswordCheck:
            case ValidateType.NewPassword:
            case ValidateType.OldPassword:
                if (isEmpty(value)) {
                    errorMessage = EMPTY_FIELD;
                } else if (isLessThan(value, 8)) {
                    errorMessage = MORE_THAN_8_SYMBOLS;
                } else if (isMoreThan(value, 40)) {
                    errorMessage = NOT_MORE_THAN_40_SYMBOLS;
                } else if (!hasDigits(value)) {
                    errorMessage = AT_LEAST_ONE_DIGIT;
                } else if (!hasCapitalLetter(value)) {
                    errorMessage = AT_LEAST_ONE_CAPITAL_LETTER;
                }
                break;
            case ValidateType.Phone:
                if (isEmpty(value)) {
                    errorMessage = EMPTY_FIELD;
                } else if (isLessThan(value, 10)) {
                    errorMessage = MORE_THAN_10_SYMBOLS;
                } else if (isMoreThan(value, 15)) {
                    errorMessage = NOT_MORE_THAN_15_SYMBOLS;
                } else if (hasLetters(value)) {
                    errorMessage = ONLY_DIGITS;
                } else if (hasWhitespaces(value)) {
                    errorMessage = NO_WHITESPACES;
                } else if (!isStartWithPlus(value)) {
                    errorMessage = START_WITH_PLUS;
                }
                break;
            case ValidateType.Message:
                if (isEmpty(value)) {
                    errorMessage = EMPTY_FIELD;
                }
                break;
            case ValidateType.ChatName:
                if (isEmpty(value)) {
                    errorMessage = EMPTY_FIELD;
                }
                break;
            case ValidateType.Email:
                if (isEmpty(value)) {
                    errorMessage = EMPTY_FIELD;
                } else if (hasWhitespaces(value)) {
                    errorMessage = NO_WHITESPACES;
                } else if (hasCyrillic(value)) {
                    errorMessage = ONLY_LATIN_LETTERS;
                } else if (!value.match(/^[a-zA-Z0-9-_@.]{0,}$/g)) {
                    errorMessage = NO_SPECIAL_SYMBOLS;
                } else if (!hasDogSymbol(value)) {
                    errorMessage = DOG_SYMBOL;
                } else if (!hasDotSymbol(value)) {
                    errorMessage = DOT_SYMBOL;
                } else if (hasDotSymbol(value) && !hasLettersBeforeAndAfterDot(value)) {
                    errorMessage = LETTERS_BEFORE_AND_AFTER_DOT;
                }
                break;
            case ValidateType.FirstName:
            case ValidateType.SecondName:
                if (isEmpty(value)) {
                    errorMessage = EMPTY_FIELD;
                } else if (!startWithCapitalLetter(value)) {
                    errorMessage = START_WITH_CAPITAL_LETTER;
                } else if (hasDigits(value)) {
                    errorMessage = ONLY_LETTERS;
                } else if (hasWhitespaces(value)) {
                    errorMessage = NO_WHITESPACES;
                } else if (!value.match(/^[A-ZА-Яa-zа-я-]{0,}$/g)) {
                    errorMessage = NO_SPECIAL_SYMBOLS;
                }
                break;
            default:
                break;
        }
    }

    return errorMessage;
};

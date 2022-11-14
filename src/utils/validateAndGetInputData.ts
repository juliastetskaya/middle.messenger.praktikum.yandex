import { validateForm } from './validateForm';

type FieldProps = {
    type?: string,
    name: string,
    label?: string,
    placeholder?: string,
    errorMessage?: string,
    class?: string,
};

export const validateAndGetInputData = (fields: FieldProps[], element?: Nullable<HTMLElement>) => {
    const allFieldNames = fields.map(({ name }) => name);

    return allFieldNames.reduce((acc, name) => {
        const inputEl = element?.querySelector(`input[name='${name}']`) as HTMLInputElement;

        const error = validateForm([{ type: inputEl.name, value: inputEl.value }]);

        if (error) {
            const errorEl = inputEl.parentElement?.querySelector('.error');

            if (errorEl) {
                errorEl.innerHTML = error;
            }
        }

        return !error && { ...acc, [name]: inputEl.value };
    }, {});
};

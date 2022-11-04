type FieldProps = {
    type: string,
    name: string,
    label: string,
    placeholder: string,
    errorMessage?: string,
    class?: string,
};

export const getInputData = (fields: FieldProps[], element?: Nullable<HTMLElement>) => {
    const allFieldNames = fields.map(({ name }) => name);
    return allFieldNames.reduce((acc, name) => {
        const el = element?.querySelector(`input[name='${name}']`) as HTMLInputElement;

        return { ...acc, [name]: el.value };
    }, {});
};

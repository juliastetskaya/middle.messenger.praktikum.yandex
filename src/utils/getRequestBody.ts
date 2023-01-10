const baseHeaders = {
    accept: 'application/json',
    'content-type': 'application/json',
};

export function getRequestBody<T>(data?: Nullable<T>) {
    return data
        ? {
            data: JSON.stringify(data),
            headers: baseHeaders,
        }
        : { headers: baseHeaders };
}

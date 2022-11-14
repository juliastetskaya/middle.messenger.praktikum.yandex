export const queryStringify = (data: XMLHttpRequestBodyInit) => Object.entries(data)
    .reduce((acc, [key, value]) => `${acc}${key}=${value}&`, '?').slice(0, -1);

export const withErrorHandler = (callback: Function) => async (...args: unknown[]) => {
    const response = await callback.call(null, ...args);

    if (response.status !== 200) {
        throw JSON.parse(response.responseText).reason;
    }

    if (response.responseText === 'OK') {
        return response;
    }

    return JSON.parse(response.responseText);
};

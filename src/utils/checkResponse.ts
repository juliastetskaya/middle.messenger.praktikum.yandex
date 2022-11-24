export const checkResponse = (response: XMLHttpRequest) => {
    if (response.status !== 200) {
        throw new Error(JSON.parse(response.responseText).reason);
    }

    return response;
};

export const checkResponse = (response: XMLHttpRequest) => {
    if (response.status !== 200) {
        throw new Error(JSON.parse(response.responseText).reason);
    }

    if (response.responseText === 'OK') {
        return response;
    }

    return JSON.parse(response.responseText);
};

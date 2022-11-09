import { queryStringify } from 'utils';

enum METHOD {
    GET = 'GET',
    PUT = 'PUT',
    POST = 'POST',
    DELETE = 'DELETE',
}

type OptionProps = {
    method: METHOD;
    timeout?: number;
    data?: any;
    headers?: Record<string, string>;
};

type PartialOption = Partial<OptionProps>;

export class HTTPTransport {
    get = (url: string, options: PartialOption = {}) => {
        const { data } = options;
        const transformData = queryStringify(data);

        return this.request(`${url}${transformData}`, { ...options, method: METHOD.GET }, options.timeout);
    };

    put = (url: string, options: PartialOption = {}) => this.request(url, {
        ...options,
        method: METHOD.PUT,
    }, options.timeout);

    post = (url: string, options: PartialOption = {}) => this.request(url, {
        ...options,
        method: METHOD.POST,
    }, options.timeout);

    delete = (url: string, options: PartialOption = {}) => this.request(url, {
        ...options,
        method: METHOD.DELETE,
    }, options.timeout);

    // eslint-disable-next-line class-methods-use-this
    request = (url: string, options: OptionProps, timeout = 5000) => {
        const { data, method } = options;

        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open(method, url);
            xhr.timeout = timeout;

            xhr.onload = () => resolve(xhr);

            xhr.onabort = reject;
            xhr.onerror = reject;
            xhr.ontimeout = reject;

            if (method === METHOD.GET || !data) {
                xhr.send();
            } else {
                xhr.send(data);
            }
        });
    };
}

import { queryStringify } from 'utils';

enum METHOD {
    GET = 'GET',
    PUT = 'PUT',
    POST = 'POST',
    DELETE = 'DELETE',
}

type OptionProps = {
    method?: METHOD;
    timeout?: number;
    data?: XMLHttpRequestBodyInit;
    headers?: Record<string, string>;
    withCredentials?: boolean;
};

export class HTTPTransport {
    private baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    get = (url: string, options: OptionProps) => {
        const { data } = options;

        if (data) {
            const transformData = queryStringify(data);

            return this.request(`${url}${transformData}`, { ...options, method: METHOD.GET }, options.timeout);
        }

        return this.request(url, { ...options, method: METHOD.GET }, options.timeout);
    };

    put = (url: string, options: OptionProps) => this.request(url, {
        ...options,
        method: METHOD.PUT,
    }, options.timeout);

    post = (url: string, options: OptionProps) => this.request(url, {
        ...options,
        method: METHOD.POST,
    }, options.timeout);

    delete = (url: string, options: OptionProps) => this.request(url, {
        ...options,
        method: METHOD.DELETE,
    }, options.timeout);

    request = (path: string, options: OptionProps, timeout = 5000) => {
        const url = `${this.baseUrl}${path}`;
        const {
            data, method = METHOD.GET, withCredentials = true, headers = {},
        } = options;

        return new Promise<XMLHttpRequest>((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open(method, url);
            xhr.timeout = timeout;
            xhr.withCredentials = withCredentials;
            Object.entries(headers).forEach(([key, value]) => xhr.setRequestHeader(key, value));

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

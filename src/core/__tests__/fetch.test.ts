import HTTPTransport from '../fetch';

describe('HTTPTransport', () => {
    it('get method without data', async () => {
        const transport = new HTTPTransport('/');
        const mockedRequest = jest
            .spyOn(transport, 'request')
            .mockImplementation(jest.fn());

        await transport.get('/api/users', {});

        expect(mockedRequest).toHaveBeenCalledWith(
            '/api/users',
            { method: 'GET' },
            undefined,
        );
    });

    it('get method with data', async () => {
        const transport = new HTTPTransport('/');
        const mockedRequest = jest
            .spyOn(transport, 'request')
            .mockImplementation(jest.fn());

        await transport.get(
            '/api/users',
            { data: { user: 'Ivan' } as unknown as XMLHttpRequestBodyInit },
        );

        expect(mockedRequest).toHaveBeenCalledWith(
            '/api/users?user=Ivan',
            { data: { user: 'Ivan' }, method: 'GET' },
            undefined,
        );
    });

    it('put', async () => {
        const transport = new HTTPTransport('/');
        const mockedRequest = jest
            .spyOn(transport, 'request')
            .mockImplementation(jest.fn());

        await transport.put('/api/users', {});

        expect(mockedRequest).toHaveBeenCalledWith(
            '/api/users',
            { method: 'PUT' },
            undefined,
        );
    });

    it('post', async () => {
        const transport = new HTTPTransport('/');
        const mockedRequest = jest
            .spyOn(transport, 'request')
            .mockImplementation(jest.fn());

        await transport.post('/api/users', {});

        expect(mockedRequest).toHaveBeenCalledWith(
            '/api/users',
            { method: 'POST' },
            undefined,
        );
    });

    it('delete', async () => {
        const transport = new HTTPTransport('/');

        const mockedRequest = jest
            .spyOn(transport, 'request')
            .mockImplementation(jest.fn());

        await transport.delete('/api/users', {});

        expect(mockedRequest).toHaveBeenCalledWith(
            '/api/users',
            { method: 'DELETE' },
            undefined,
        );
    });
});

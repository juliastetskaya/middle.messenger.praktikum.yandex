type Handler = (...args: unknown[]) => void;

class EventBus {
    private listeners: Record<string, Handler[]>;

    constructor() {
        this.listeners = {};
    }

    on(event: string, callback: Handler) {
        if (!this.listeners[event]) {
            this.listeners[event] = [];
        }

        this.listeners[event].push(callback);
    }

    off(event: string, callback: Handler) {
        if (!this.listeners[event]) {
            throw new Error(`Нет события: ${event}`);
        }

        this.listeners[event] = this.listeners[event].filter((listener: Function) => listener !== callback);
    }

    emit(event: string, ...args: unknown[]): void {
        if (!this.listeners[event]) {
            throw new Error(`Нет события: ${event}`);
        }

        this.listeners[event].forEach((listener: Function) => listener(...args));
    }
}

export default EventBus;

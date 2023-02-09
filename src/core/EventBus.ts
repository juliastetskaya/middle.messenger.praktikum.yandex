export default class EventBus {
    private listeners: Record<string, Function[]> = {};

    on(event: string, callback: Function): void {
        if (!this.listeners[event]) {
            this.listeners[event] = [];
        }

        this.listeners[event]!.push(callback);
    }

    off(event: string, callback: Function): void {
        if (!this.listeners[event]) {
            throw new Error(`Нет события: ${event}`);
        }

        this.listeners[event] = this.listeners[event]!.filter((listener) => listener !== callback);
    }

    emit(event: string, ...args: unknown[]): void {
        if (!this.listeners[event]) {
            return;
        }

        this.listeners[event]!.forEach((listener) => listener(...args));
    }

    destroy() {
        this.listeners = {};
    }
}

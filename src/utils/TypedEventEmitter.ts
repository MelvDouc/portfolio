export default class TypedEventEmitter<T extends Record<string, unknown[]>> {
  private readonly _listeners = {} as { [K in keyof T]?: Set<Listener<T, K>>; };

  public on<K extends keyof T>(eventType: K, listener: Listener<T, K>): VoidFunction {
    const listeners = this._listeners[eventType] ??= new Set();
    listeners.add(listener);
    return () => listeners.delete(listener);
  }

  public emit<K extends keyof T>(eventType: K, ...args: T[K]): void {
    this._listeners[eventType]?.forEach((listener) => listener(...args));
  }
}

type Listener<T extends Record<string, unknown[]>, K extends keyof T> = (...args: T[K]) => unknown;
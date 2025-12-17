export default class TypedEventEmitter<T extends EventParamsRecord> {
  private readonly _listeners = {} as { [K in keyof T]?: Set<Listener<T, K>>; };

  public on<K extends keyof T>(eventType: K, listener: Listener<T, K>): VoidFunction {
    const listeners = this._listeners[eventType] ??= new Set();
    listeners.add(listener);
    return () => listeners.delete(listener);
  }

  public emit<K extends keyof T>(eventType: K, ...args: T[K]): void {
    this._listeners[eventType]?.forEach((listener) => listener(...args));
  }

  public createHandlers<K extends keyof T>(eventType: K): Handlers<T, K> {
    return [
      (listener) => this.on(eventType, listener),
      (...args) => this.emit(eventType, ...args)
    ];
  }
}

type EventParamsRecord = Record<string, unknown[]>;

type Listener<T extends EventParamsRecord, K extends keyof T> = (...args: T[K]) => unknown;
type Handlers<T extends EventParamsRecord, K extends keyof T> = [
  on: (listener: Listener<T, K>) => void,
  emit: (...args: T[K]) => void
];
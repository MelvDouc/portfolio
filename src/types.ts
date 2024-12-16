export type OptionalPromise<T> = T | Promise<T>;

export interface Coords {
  x: number;
  y: number;
}

export type Language = "fr" | "en";
export type Translation = Record<Language, string>;
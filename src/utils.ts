export type Unset = null | undefined;

export function isSet<T>(value: T | Unset): value is T {
  return value !== null && value !== undefined;
}

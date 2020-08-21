/**
 * This is a type guard that will attempt to restrict an optional type to its non-optional primitive.
 *
 * The assertion will throw an error in non-production environments. This is helpful to avoid silent failures of
 * TypeScript non-null assertion operator (`!`) when developing.
 * @example
 * // BEFORE
 * foo(someObject!.optionalValue)
 *
 * // AFTER
 * if (assertValue(someObject)) {
 *   // it's safe to assume non-optional value here
 *   foo(someObject.optionalValue)
 * }
 *
 * @param value An optional value.
 * @returns `true` if `value` is not `null` nor `undefined`, otherwise `false`.
 */
export function assertValue<T>(value: T | null | undefined): value is T {
  if ((value !== null && value !== undefined) || process.env.NODE_ENV === 'production') return true;
  throw new Error(`Failed value assertion. Value is ${String(value)}`);
}

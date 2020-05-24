/**
 * @param ms The amount of milliseconds before resolving.
 * @param result An optional value to return.
 * @returns A promise that will resolve after `ms` milliseconds with `result` if it was provided.
 */
export function asyncDelay<TResult>(ms: number, result?: TResult) {
  return new Promise<TResult>((resolve) => globalThis.setTimeout(() => resolve(result), ms));
}

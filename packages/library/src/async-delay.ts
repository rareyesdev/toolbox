export function asyncDelay<TResult>(ms: number, result?: TResult) {
  return new Promise<TResult>((resolve) => globalThis.setTimeout(() => resolve(result), ms));
}

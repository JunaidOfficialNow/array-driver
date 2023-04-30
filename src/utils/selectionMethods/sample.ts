/**
 * Returns a random element from the array.
 * @template T
 * @returns {T | undefined} A random element from the input array, or undefined if the input array is empty.
 */
export function sample<T>(this: T[]) {
  if (this.length === 0) {
    return undefined;
  }
  const randomIndex = Math.floor(Math.random() * this.length);
  return this[randomIndex];
}
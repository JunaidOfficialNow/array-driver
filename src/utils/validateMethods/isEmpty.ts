/**
 * Returns true if the array is empty, false otherwise.
 * @returns boolean
 */
export function isEmpty<T>(this: T[]): boolean {
  return this.length === 0;
}
/**
 * Removes all the null and undefined values from the original array.
 */
export function filterNullish<T>(this: (T | null | undefined)[]): T[] {
  let i = 0;
  while (i < this.length) {
    if (this[i] === null || this[i] === undefined) {
      this.splice(i, 1);
    } else {
      i++;
    }
  }
  return this as T[];
}

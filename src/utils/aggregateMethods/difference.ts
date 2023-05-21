/**
 * Returns an array containing all elements from the first array that are not present in any of the other arrays.
 *
 * @template T
 * @param {...T[]} arr - The other arrays to compare against.
 * @returns {T[]} - The difference between the first array and the other arrays.
 */
export function difference<T>(this: T[], ...arr2: Array<T[]>): T[] {
  const set = new Set(arr2.flat());
  return this.filter(el => !set.has(el));
}

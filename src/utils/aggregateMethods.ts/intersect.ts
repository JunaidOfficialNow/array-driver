/**
 * Returns the intersection of two arrays, i.e., an array of elements that are present in both arrays.
 * @param arr The array to intersect with
 * @returns An array containing the intersection of the two arrays.
 */
export function intersect<T>(this: T[], arr2: T[]): T[] {
  return this.filter(value => arr2.includes(value));
}
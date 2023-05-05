/**
 * Returns the union of two arrays, i.e., an array of all elements from both arrays with duplicates removed.
 * @param arr The array to union with
 * @returns An array containing the union of the two arrays.
 */
export function union<T>(this: T[], arr2: T[]): T[] {
  return Array.from(
    new Set([
      ...this.map((el)=> JSON.stringify(el)),
      ...arr2.map((el)=> JSON.stringify(el))
    ])).map((el)=> JSON.parse(el));
}
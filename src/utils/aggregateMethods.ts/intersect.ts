/**
 * Returns the intersection of two arrays, i.e., an array of elements that are present in both arrays.
 * @param arr The array to intersect with
 * @returns An array containing the intersection of the two arrays.
 */
export function intersect<T>(this: T[], arr2: T[]): Array<T> {
  return Array.from(new Set(this.filter(value => {
    if (typeof value === 'object') {
      const index = arr2.findIndex(
        (item) => JSON.stringify(item) === JSON.stringify(value)
      );
      return index !== -1;
    }
    return arr2.includes(value)
  })));
}
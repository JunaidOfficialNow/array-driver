/**
 * Returns an object where each key represents a value of the input array
 * and the corresponding value represents the count of that value in the array.
 * This function only works with non-primitive types.
 * @param keys - The keys of the object to use for grouping the values in the array
 * @returns An object where each key represents a value of the input array
 * and the corresponding value represents the count of that value in the array.
 */
export function countBy<T extends object>(this: T[], ...keys: (keyof T)[]): Record<string, number> {
  return this.reduce((acc, obj) => {
    const key = keys.map(key => obj[key]).join('.');
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
}

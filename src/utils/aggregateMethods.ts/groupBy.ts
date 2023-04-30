/**
 * Groups array of objects by one or more keys
 * @param arr Array of objects to group
 * @param keys One or more keys to group by
 * @returns Object with grouped keys as properties and grouped values as arrays
 */
export function groupBy<T extends object>(this: T[], ...keys: (keyof T)[]): Record<string, T[]> {
  return this.reduce((acc, obj) => {
    const key = keys.map(key => obj[key]).join('.');
    (acc[key] ??= []).push(obj);
    return acc;
  }, {} as Record<string, T[]>);
}

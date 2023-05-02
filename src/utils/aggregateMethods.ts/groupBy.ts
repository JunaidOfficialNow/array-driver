/**
 * Groups array of objects by one or more keys
 * @param keys One or more keys to group by
 * @returns Object with grouped keys as properties and grouped values as arrays
 */
    type GroupBy<T, K extends keyof T> =
    T extends Record<K, infer U extends string | number | symbol>
      ? Record<string, K extends string ? GroupBy<T, Exclude<keyof T, K>> & { [key in U]: Extract<T, Record<K, key>>[] } : never>
      : never;
  
  function groupBy<T, K extends keyof T>(arr: T[], ...keys: K[]): GroupBy<T, K> {
    let groups: any = {};
    const groupBySingleKey = (arr: T[], key: keyof T) => {
      const result = arr.reduce((acc, item) => {
        const value = item[key];
        const group = groups[value] || (groups[value] = []);
        group.push(item);
        return acc;
      }, {} as GroupBy<T, Exclude<keyof T, K>>);
      return { ...result, ...groups };
    };
    return keys.reduce((result, key) => {
      groups = {};
      return result && groupBySingleKey(result, key);
    }, arr) as unknown as GroupBy<T, K>;
  }
  









/**
 * Groups array of objects by given key 
 * @param key key to group by
 * @returns Object with grouped key's values as properties and grouped values as arrays
 */


interface MyObject {
  [key: string]: any;
}

export function groupBy<T extends MyObject>(this: T[], key: string ): Record<string, T[]> {
  if (key === undefined) {
    return {}
  }
  return this.reduce((acc, curr)=> {
    if (curr[key] !== undefined) {
      if (!acc[curr[key]]) {
        acc[curr[key]] = [];
      }
      acc[curr[key]].push(curr);
    }
    return acc;
  }, {} as Record<string , T[]>)
}
  









/**
 * Returns a new array with only unique values from the original array.
 */
export function distinct<T>(this: T[]): T[] {
  return Array.from(new Set(this.map((el)=> JSON.stringify(el)))).map((el)=> JSON.parse(el));
}


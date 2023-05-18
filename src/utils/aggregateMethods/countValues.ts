import { Primitive } from "../../types/PrimitiveTypes";

/**
 * Returns an object with the count of each primitive value in the input array or the count of specified primitive values.
 * @template T The type of the primitive values in the input array.
 * @param {...T} keys Optional primitive values to count in the input array.
 * @returns {Record<T, number>} An object with primitive values as keys and their counts as values.
 */
export function countValues<T extends Primitive>(this: Primitive[], ...keys: Primitive[]): Record<string, number> {
  const result: Record<string, number> = {} as Record<string, number>;
  
  if (keys.length === 0) {
    for (const val of this) {
      result[String(val)] = (result[String(val)] || 0) + 1;
    }
  } else {
    for (const key of keys) {
      result[String(key)] = 0;
    }
    for (const val of this) {
      if (keys.includes(val)) {
        result[String(val)] += 1;
      }
    }
  }
  
  return result;
}

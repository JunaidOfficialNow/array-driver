/**
 * Checks if all elements in the array are unique
 * @returns true if all elements are unique, false otherwise
 */
export function isUnique(this : any[]) {
  return new Set(this.map(el => JSON.stringify(el))).size === this.length;
}
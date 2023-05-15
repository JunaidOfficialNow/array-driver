/**
 * This function will find and update an element from the array.
 * @param searchCriteria the callback function that will return true for the element to be updated
 * @param updateCriteria the callback function that will update the element 
 * @returns undefined if no element was found or the updated element
 */

type searchCriteria = (value: any, index: number, obj: any[]) => unknown

export function updateOne<T>(this: T[], searchCriteria: searchCriteria, updateCriteria: Function): T | undefined {
  let index = this.findIndex(searchCriteria);
  if (index == -1) return;
  this[index] = updateCriteria(this[index])
  return this[index];
}
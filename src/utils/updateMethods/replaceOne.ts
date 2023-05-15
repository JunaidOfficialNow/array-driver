/**
 * This function will find and replace a  target with another element
 * @param searchCriteria the callback function that will return true for the element to be replaced
 * @param replaceValue the value to be replaced
 * @returns undefined if no element was found or the replaced value's index.
 */

type searchCriteria = (value: any, index: number, obj: any[]) => unknown

export function replaceOne<T>(this: T[], searchCriteria: searchCriteria, replaceValue: any): number | undefined {
  let index = this.findIndex(searchCriteria);
  if (index == -1) return;
  this[index] = replaceValue
  return index;
}
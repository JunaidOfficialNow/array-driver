/**
 * This function will find and update an given value from the array
 * @param target the value to be updated
 * @param updateCriteria the callback function that will update the element 
 * @returns undefined if no element was found or the updated element
 */

type searchCriteria = (value: any, index: number, obj: any[]) => unknown

export function findByValueAndUpdate<T>(this: T[], target: T, updateCriteria: Function): T | undefined {
  let index;
  if (typeof target === 'object') {
    const tempArray = this.map(el => JSON.stringify(el));
    index = tempArray.indexOf(JSON.stringify(target));
    if (index == -1) return;
    updateCriteria(this[index])
  } else {
    index = this.indexOf(target);
    if (index == -1) return;
    this[index] = updateCriteria(this[index])
  }
  return this[index];
}
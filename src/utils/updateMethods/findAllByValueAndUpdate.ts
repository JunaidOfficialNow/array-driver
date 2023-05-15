/**
 * This function will find and update all the elements that matches the target value.
 * @param target the target value to be updated.
 * @param updateCriteria the callback function that will update the element 
 * @returns undefined if no element was found or the updated elements 
 */

type searchCriteria = (value: any) => unknown

export function findAllByValueAndUpdate<T>(this: T[], target: T, updateCriteria: Function): T[] | undefined {
  const udpatedElements = [];
  let searchArray: Array<T | string>
  if (typeof target === 'object' ) {
    target = (JSON.stringify(target) as T);
    searchArray  = this.map(el => JSON.stringify(el));
  } else {
    searchArray = this;
  }
  for (let i = 0; i < this.length; i++) {
    if (target === searchArray[i]) {
      updateCriteria(this[i])
      udpatedElements.push(this[i]);
    }
  }
  return  udpatedElements.length > 0 ? udpatedElements : undefined
}
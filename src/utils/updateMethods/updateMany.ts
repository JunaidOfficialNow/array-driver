/**
 * This function will find and update all the elements that returns true for the searchCriteria
 * @param searchCriteria the callback function that will return true for the element to be updated
 * @param updateCriteria the callback function that will update the element 
 * @returns undefined if no element was found or the updated elements 
 */

type searchCriteria = (value: any) => unknown

export function updateMany<T>(this: T[], searchCriteria: searchCriteria, updateCriteria: Function): T[] | undefined {
  const udpatedElements = [];
  for (let i = 0; i < this.length; i++) {
    if (searchCriteria(this[i])) {
      updateCriteria(this[i])
      udpatedElements.push(this[i]);
    }
  }
  return  udpatedElements.length > 0 ? udpatedElements : undefined
}
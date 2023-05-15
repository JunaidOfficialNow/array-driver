/**
 * This function will find and update all the elements that returns true for the searchCriteria
 * @param searchCriteria the callback function that will return true for the element to be replaced
 * @param replaceValue the value to be replaced
 * @returns undefined if no element was found or the replaced value's indexes
 */

type searchCriteria = (value: any) => unknown

export function replaceMany<T>(this: T[], searchCriteria: searchCriteria, replaceValue: any): number[] | undefined {
  const udpatedElements = [];
  for (let i = 0; i < this.length; i++) {
    if (searchCriteria(this[i])) {
      this[i] = replaceValue;
      udpatedElements.push(i);
    }
  }
  return  udpatedElements.length > 0 ? udpatedElements : undefined
}
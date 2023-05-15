/**
 * This function will find and update an given value from the array
 * @param target the value to be updated
 * @param replaceValue the value to be replaced
 * @returns undefined if no element was found or the index of the replaced element.
 */

type searchCriteria = (value: any, index: number, obj: any[]) => unknown

export function findByValueAndReplace<T>(this: T[], target: T, replaceValue: any): number | undefined {
  let index;
  if (typeof target === 'object') {
    const tempArray = this.map(el => JSON.stringify(el));
    index = tempArray.indexOf(JSON.stringify(target));
  } else {
    index = this.indexOf(target);
  }
  if (index == -1) return;
  this[index] = replaceValue;
  return index
}
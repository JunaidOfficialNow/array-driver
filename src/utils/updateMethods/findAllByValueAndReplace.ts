/**
 * This function will find and replace all the elements that matches the target value.
 * @param target the target value to be replaced.
 * @param replaceValue the replacement value
 * @returns undefined if no element was found or the indexes of the replaced elements.
 */


export function findAllByValueAndReplace<T>(this: T[], target: T, replaceValue: any): number[] | undefined {
  const replacedIndexes: number[] = [];
  let searchArray: Array<T | string>
  if (typeof target === 'object' ) {
    target = (JSON.stringify(target) as T);
    searchArray  = this.map(el => JSON.stringify(el));
  } else {
    searchArray = this;
  }
  for (let i = 0; i < this.length; i++) {
    if (target === searchArray[i]) {
      this[i] = replaceValue;
      replacedIndexes.push(i);
    }
  }
  return  replacedIndexes.length > 0 ? replacedIndexes : undefined
}
/**
 * This function will delete the first matching value from the array
 * @param target - the value to be deleted
 * @returns the deleted value or undefined if the value is not found
 */
export function deleteOneByValue(this: Array<any>, target: any): any {
  let index: number;
  if (typeof target === 'object') {
    const tempArray = this.map(el => JSON.stringify(el));
    index = tempArray.indexOf(JSON.stringify(target));
  } else {
    index = this.indexOf(target);
  }
  if (index == -1) {
    return ;
  }
  return (this.splice(index, 1))[0];
}
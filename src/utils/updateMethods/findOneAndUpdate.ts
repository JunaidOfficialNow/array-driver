export function findOneAndUpdate(this: Array<any>, searchValue: any, updateValue: any): boolean {
  let index: number;
  if (typeof searchValue === 'function') {
    index = this.findIndex(searchValue);
  } else {
   index = this.findIndex((value: any) => value === searchValue);
  }


  if (index === -1) {
    return false;
  }
  this[index] = updateValue;
  return true;
}
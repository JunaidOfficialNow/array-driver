export function deleteByValue(this: Array<any>, searchCriteria: any): boolean {
  let index: number;
  if (typeof  searchCriteria == 'function') {
    index = this.findIndex(searchCriteria);
  } else {
    index = this.indexOf(searchCriteria);
  }

  if (index == -1) {
    return false;
  }
   this.splice(index, 1);
  return true;
}
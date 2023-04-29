export type searchCriteria  = (obj: Object | Array<any>) => boolean
export type updateCriteria = (obj: Object | Array<any>) => Object | Array<any>

export function updateObjectInArray(this: Array<any>, searchCriteria: searchCriteria, updateCriteria: updateCriteria | any): boolean {

   const index = this.findIndex(searchCriteria);
  if (index === -1) {
    return false;
  }
  if(typeof updateCriteria == 'function') {
    updateCriteria(this[index]);
    return true;
  }

  this[index] = updateCriteria;
  return true;
}
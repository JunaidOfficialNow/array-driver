import { searchCriteria, updateCriteria } from "../../types/criteriaTypes";
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
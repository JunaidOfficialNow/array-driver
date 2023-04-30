import { searchCriteria } from "../../types/criteriaTypes";
/**
Deletes the first element from the array that matches the given search criteria
@param {searchCriteria} searchCriteria - An object representing the search criteria
@returns {any} - The deleted element or undefined if no element was deleted
*/
export function deleteOneWhere(this: Array<any>, searchCriteria: searchCriteria): any {
  const index = this.findIndex(searchCriteria);
  if (index === -1) {
    return ;
  }
  return (this.splice(index, 1))[0];
}
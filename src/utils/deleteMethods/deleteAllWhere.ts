import { searchCriteria } from "../../types/criteriaTypes";

/**

This function will delete all the elements from the array which match the search criteria
@param searchCriteria - the search criteria to match elements for deletion
@returns the deleted values
*/
export function deleteAllWhere(this: any[], searchCriteria: searchCriteria): any[] {
  const index = this.findIndex(searchCriteria);
  if (index === -1) {
  return [];
  }
  const deleted = this.splice(index, 1);
  return deleted.concat(deleteAllWhere.call(this, searchCriteria))
  }
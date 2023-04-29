import { searchCriteria } from "./updateObjectInArray";

export function deleteAllWhere(this: any[], searchCriteria: searchCriteria): any[] {
  const index = this.findIndex(searchCriteria);
  if (index === -1) {
    return [];
  }
  const deleted = this.splice(index, 1);
  return deleted.concat(deleteAllWhere.call(this, searchCriteria))

}
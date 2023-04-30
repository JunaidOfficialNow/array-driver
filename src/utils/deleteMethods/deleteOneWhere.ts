import { searchCriteria } from "../updateMethods/updateObjectInArray";

export function deleteOneWhere(this: Array<any>, searchCriteria: searchCriteria): any {
  const index = this.findIndex(searchCriteria);
  if (index === -1) {
    return ;
  }
  return (this.splice(index, 1))[0];
}
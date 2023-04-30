import { deleteAllByValue, deleteAllWhere, deleteOneByValue, deleteOneWhere } from './utils/deleteMethods';
import {findOneAndUpdate, updateObjectInArray} from './utils/updateMethods';
import { searchCriteria, updateCriteria } from './types/criteriaTypes';


declare global {
  interface Array<T> {
    findOneAndUpdate( target: T, value: T): boolean
    updateObjectInArray(searchCriteria: searchCriteria, updateCriteria: updateCriteria): boolean
    deleteOneByValue(searchCriteria: searchCriteria | any): any
    deleteAllByValue(target: any): any[]
    deleteOneWhere(searchCriteria: searchCriteria): any
    deleteAllWhere(searchCriteria: searchCriteria): any[]
  }

}

export function config(): void {
  Array.prototype.findOneAndUpdate = findOneAndUpdate;
  Array.prototype.updateObjectInArray = updateObjectInArray;
  Array.prototype.deleteOneByValue = deleteOneByValue;
  Array.prototype.deleteAllByValue = deleteAllByValue;
  Array.prototype.deleteOneWhere = deleteOneWhere;
  Array.prototype.deleteAllWhere = deleteAllWhere;
}


 

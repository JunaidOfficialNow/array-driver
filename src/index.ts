import { deleteAllByValue } from './utils/deleteAllByValue';
import { deleteAllWhere } from './utils/deleteAllWhere';
import { deleteOneByValue } from './utils/deleteOneByValue';
import { deleteOneWhere } from './utils/deleteOneWhere';
import {findOneAndUpdate} from './utils/findOneAndUpdate';
import { searchCriteria, updateCriteria, updateObjectInArray } from './utils/updateObjectInArray';


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


 

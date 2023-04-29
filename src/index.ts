import { deleteByValue } from './utils/deleteByValue';
import {findOneAndUpdate} from './utils/findOneAndUpdate';
import { searchCriteria, updateCriteria, updateObjectInArray } from './utils/updateObjectInArray';


declare global {
  interface Array<T> {
    findOneAndUpdate( target: T, value: T): boolean
    updateObjectInArray(searchCriteria: searchCriteria, updateCriteria: updateCriteria): boolean
    deleteByValue(searchCriteria: searchCriteria | any): boolean
  }

}

export function config(): void {
  Array.prototype.findOneAndUpdate = findOneAndUpdate;
  Array.prototype.updateObjectInArray = updateObjectInArray;
  Array.prototype.deleteByValue = deleteByValue;
}


 

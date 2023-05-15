import { deleteAllByValue, deleteAllWhere, deleteOneByValue, deleteOneWhere } from './utils/deleteMethods';
import {findOneAndUpdate, updateObjectInArray} from './utils/updateMethods';
import { filterNullish, distinct } from './utils/filterMethods';
import { isEmpty , isUnique, allElementsOfType} from './utils/validateMethods';
import { groupBy, countBy, countValues, intersect, union, difference } from './utils/aggregateMethods.ts';
import { sample } from './utils/selectionMethods';


import { searchCriteria, updateCriteria } from './types/criteriaTypes';
import { Primitive } from './types/PrimitiveTypes';


declare global {
  interface Array<T> {
    findOneAndUpdate( target: T, value: T): boolean
    updateObjectInArray(searchCriteria: searchCriteria, updateCriteria: updateCriteria): boolean
    deleteOneByValue(searchCriteria: searchCriteria | any): any
    deleteAllByValue(target: any): any[]
    deleteOneWhere(searchCriteria: searchCriteria): any
    deleteAllWhere(searchCriteria: searchCriteria): any[]
    filterNullish(): T[]
    distinct(): T[]
    isEmpty(): boolean
    isUnique(): boolean
    groupBy(...keys: T[]): Record<string, T[]>;
    allElementsOfType(dataType: any): boolean;
    countBy(...keys: T[]): Record<string, number>;
    countValues(...keys: Primitive[]): Record<string, number>;
    union(arr: T[]): T[];
    intersect(arr: T[]): T[];
    sample(): T | undefined;
    difference(...arr: Array<T[]>): T[]
  }

}

export function config(): void {
  Array.prototype.findOneAndUpdate = findOneAndUpdate;
  Array.prototype.updateObjectInArray = updateObjectInArray;
  Array.prototype.deleteOneByValue = deleteOneByValue;
  Array.prototype.deleteAllByValue = deleteAllByValue;
  Array.prototype.deleteOneWhere = deleteOneWhere;
  Array.prototype.deleteAllWhere = deleteAllWhere;
  Array.prototype.filterNullish = filterNullish;
  Array.prototype.distinct = distinct;
  Array.prototype.isEmpty = isEmpty;
  Array.prototype.isUnique = isUnique;
  Array.prototype.groupBy = groupBy;
  Array.prototype.allElementsOfType = allElementsOfType;
  Array.prototype.countBy = countBy;
  Array.prototype.countValues = countValues;
  Array.prototype.union = union;
  Array.prototype.intersect = intersect;
  Array.prototype.sample = sample;
  Array.prototype.difference = difference;
}



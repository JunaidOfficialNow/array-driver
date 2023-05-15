import { deleteAllByValue, deleteAllWhere, deleteOneByValue, deleteOneWhere } from './utils/deleteMethods';
import { filterNullish, distinct } from './utils/filterMethods';
import { isEmpty , isUnique, allElementsOfType} from './utils/validateMethods';
import { groupBy, countBy, countValues, intersect, union, difference } from './utils/aggregateMethods.ts';
import { sample } from './utils/selectionMethods';

import {
  findAllByValueAndReplace,
  findAllByValueAndUpdate,
  findByValueAndReplace,
  findByValueAndUpdate,
  updateMany,
  updateOne,
  replaceMany,
  replaceOne
} from './utils/updateMethods/'


import { searchCriteria, updateCriteria } from './types/criteriaTypes';
import { Primitive } from './types/PrimitiveTypes';


declare global {
  interface Array<T> {
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
    findAllByValueAndReplace(target: T, replaceValue: any): number[] | undefined;
    findAllByValueAndUpdate(target: T, updateCriteria: updateCriteria): any[] | undefined;
    findByValueAndReplace(target: T, replaceValue: any): number | undefined;
    findByValueAndUpdate(target: T, updateCriteria: updateCriteria): any | undefined;
    updateMany(searchCriteria: searchCriteria, updateCriteria: updateCriteria): any[] | undefined
    updateOne(searchCriteria: searchCriteria, updateCriteria: updateCriteria): any | undefined;
    replaceMany(searchCriteria: searchCriteria, replaceValue: any): number[] | undefined;
    replaceOne(searchCriteria: searchCriteria, replaceValue: any): number | undefined;
  }

}

export function config(): void {
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
  Array.prototype.updateMany = updateMany;
  Array.prototype.updateOne = updateOne;
  Array.prototype.replaceMany = replaceMany;
  Array.prototype.replaceOne = replaceOne;
  Array.prototype.findAllByValueAndReplace = findAllByValueAndReplace;
  Array.prototype.findAllByValueAndUpdate = findAllByValueAndUpdate;
  Array.prototype.findByValueAndReplace = findByValueAndReplace;
  Array.prototype.findByValueAndUpdate = findByValueAndUpdate;
}



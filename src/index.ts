import {findOneAndUpdate} from './utils/findOneAndUpdate';

declare global {
  interface Array<T> {
    findOneAndUpdate( target: T, value: T): boolean
  }
}

export function config(): void {
  Array.prototype.findOneAndUpdate = findOneAndUpdate;
}


 

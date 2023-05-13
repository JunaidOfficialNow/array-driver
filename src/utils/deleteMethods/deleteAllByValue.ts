/**
This function deletes all matching values from an array and returns an array of the deleted values.
@param {any} target - The value to be deleted.
@returns {any[]} An array of the deleted values.
*/
export function deleteAllByValue(this: Array<any>, target: any,): any[] {
  const deletedValues = [] as any;
  if (typeof target === 'object') {
    const tempArray = this.map(el=> JSON.stringify(el));
    for (let i = tempArray.length - 1; i >= 0; i--) {
      if (tempArray[i] === JSON.stringify(target)) {
        deletedValues.push(this.splice(i, 1)[0]);
      }
    }
  } else {
    for (let i = this.length - 1; i >= 0; i--) {
      if (this[i] === target) {
        deletedValues.push(this.splice(i, 1)[0]);
      }
    }
  }
 
   return deletedValues;
}
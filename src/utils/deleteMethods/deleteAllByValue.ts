/**
This function deletes all matching values from an array and returns an array of the deleted values.
@param {any} target - The value to be deleted.
@returns {any[]} An array of the deleted values.
*/
export function deleteAllByValue(this: Array<any>, target: any): any[] {
  let index = this.indexOf(target);
  if (index == -1) {
  return [];
  }
  const deleted = this.splice(index, 1);
  return deleted.concat(deleteAllByValue.call(this, target));
  }
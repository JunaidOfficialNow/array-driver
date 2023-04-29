export function deleteAllByValue(this: Array<any>, target: any): any[] {
  let index = this.indexOf(target);
  if (index == -1) {
    return [];
  }

  const deleted = this.splice(index, 1);
  return deleted.concat(deleteAllByValue.call(this, target));
}

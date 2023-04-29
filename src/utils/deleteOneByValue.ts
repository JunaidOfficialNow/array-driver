export function deleteOneByValue(this: Array<any>, target: any): any {
  let index = this.indexOf(target);
  if (index == -1) {
    return ;
  }
  return (this.splice(index, 1))[0];
}
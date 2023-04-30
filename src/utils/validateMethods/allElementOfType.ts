/**
 Returns true if all elements are of given type
 * @param dataType 
 * @returns boolean
 */


export function allElementsOfType(this: any[], dataType: string): boolean {
  return this.every((element) => typeof element === dataType);
}

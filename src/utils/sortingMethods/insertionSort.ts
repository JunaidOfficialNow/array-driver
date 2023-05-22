/**
 *  This function sort the original array with insertionsort algorithm.
 * @param  isDescend boolean: true for sort in descending order.
 * @returns the sorted array.
 */
export function insertionSort<T>(this: T[], isDescend: boolean | undefined): T[] {
  for(let i=1; i<this.length; i++){
      let numberToInsert = this[i];
      let j = i - 1
      
      if (isDescend) {
          while (j >= 0 && this[j] < numberToInsert) {
            this[j + 1] = this[j];
            j = j - 1;
          }
        } else {
          while (j >= 0 && this[j] > numberToInsert) {
            this[j + 1] = this[j];
            j = j - 1;
          }
        }
        
        this[j + 1] = numberToInsert;
  }
  return this;    
}
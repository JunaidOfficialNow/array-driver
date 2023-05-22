/**
 * This function sort the original array with quicksort algorithm.
 * @param  isDescend boolean: true for sort in descending order.
 * @returns the sorted array.
 */
export function quickSort<T>(this: T[], isDescend: boolean | undefined): T[] {
  function sort(arr: T[], isDescend: boolean | undefined): T[] {
    if (arr.length < 2) {
      return arr;
    }
    
    let leftArray = [];
    let rightArray = [];
    let pivot = arr[arr.length - 1];
    
    if (isDescend) {
      for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) { 
          rightArray.push(arr[i]);
        } else {
          leftArray.push(arr[i]);
        }
      }
    } else {
      for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > pivot) {
          rightArray.push(arr[i]);
        } else {
          leftArray.push(arr[i]);
        }
      }
    }
    
    return [...sort.call(leftArray, leftArray, isDescend), pivot, ...sort.call(rightArray, rightArray, isDescend)];
  }
  
  const sortedArray = sort(this, isDescend);
  sortedArray.forEach((el, index) => (this[index] = el));
  
  return this;
}

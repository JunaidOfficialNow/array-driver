/**
 *  This function sort the original array with mergesort algorithm.
 * @param  isDescend boolean: true for sort in descending order.
 * @returns the sorted array.
 */
export function mergeSort<T>(this: T[], isDescend: boolean | undefined): T[] {

  function sort(arr: T[], isDescend: boolean | undefined): T[] {
    if (arr.length <= 1) {
      return arr;
    }
  
    const middle = Math.floor(arr.length / 2);
    const leftArray = arr.slice(0, middle);
    const rightArray = arr.slice(middle);
  
    const sortedLeft = sort(leftArray, isDescend);
    const sortedRight = sort(rightArray, isDescend);
  
    return merge(sortedLeft, sortedRight, isDescend);

  }

  function merge(leftArray: T[], rightArray: T[], isDescend: boolean | undefined): T[] {
    const mergedArray: T[] = [];
  
    while (leftArray.length && rightArray.length) {
      if (isDescend) {
        if (leftArray[0] > rightArray[0]) {
          let temp = leftArray.shift()
          if (temp) mergedArray.push(temp)
        } else {
          let temp = rightArray.shift();
          if (temp) mergedArray.push(temp);
        }
      } else {
        if (leftArray[0] < rightArray[0]) {
          let temp = leftArray.shift()
          if (temp) mergedArray.push(temp)
        } else {
          let temp = rightArray.shift();
          if (temp) mergedArray.push(temp);
        }
      }
    }
    return mergedArray.concat(leftArray, rightArray);
  }
   const sortedArray = sort(this, isDescend);
    sortedArray.forEach((el, index) => (this[index] = el)); 
    return this;
  }
  

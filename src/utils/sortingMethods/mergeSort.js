/**
 *  This function sort the original array with mergesort algorithm.
 * @param  isDescend boolean: true for sort in descending order.
 * @returns the sorted array.
 */
module.exports = function mergeSort(this, isDescend) {
    if (this.length <= 1) {
      return this;
    }
  
    const middle = Math.floor(this.length / 2);
    const leftArray = this.slice(0, middle);
    const rightArray = this.slice(middle);
  
    const sortedLeft = mergeSort(leftArray, isDescend);
    const sortedRight = mergeSort(rightArray, isDescend);
  
    const sortedArray = merge(sortedLeft, sortedRight, isDescend);
    sortedArray.forEach((el, index) => (this[index] = el)); 
  
    return this;
  }
  
  function merge(leftArray, rightArray, isDescend) {
    const mergedArray = [];
  
    while (leftArray.length && rightArray.length) {
      if (isDescend) {
        if (leftArray[0] > rightArray[0]) {
          mergedArray.push(leftArray.shift());
        } else {
          mergedArray.push(rightArray.shift());
        }
      } else {
        if (leftArray[0] < rightArray[0]) {
          mergedArray.push(leftArray.shift());
        } else {
          mergedArray.push(rightArray.shift());
        }
      }
    }
  
    return mergedArray.concat(leftArray, rightArray);
  }
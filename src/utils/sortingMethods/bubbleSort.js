/**
 *  This function sort the original array with bubblesort algorithm.
 * @param  isDescend boolean: true for sort in descending order.
 * @returns the sorted array.
 */
module.exports = function bubbleSort(this, isDescend) {
    let swapped;
    do {
      swapped = false;
      for (let i = 0; i < this.length - 1; i++) {
        if (isDescend ? this[i] < this[i + 1] : this[i] > this[i + 1]) {
          let temp = this[i];
          this[i] = this[i + 1];
          this[i + 1] = temp;
          swapped = true;
        }
      }
    } while (swapped);
  
    const sortedArray = this;
    sortedArray.forEach((el, index) => (this[index] = el));
  }
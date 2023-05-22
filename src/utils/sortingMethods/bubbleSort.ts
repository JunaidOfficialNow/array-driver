/**
 *  This function sort the original array with bubble sort algorithm.
 * @param  isDescend boolean: true for sort in descending order.
 * @returns the sorted array.
 */
export function bubbleSort<T>(this:T[] , isDescend: boolean | undefined): T[] {
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

    return this;
  }
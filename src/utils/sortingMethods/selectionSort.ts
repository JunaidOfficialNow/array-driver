/**
 * This function sort the original array with selectionsort algorithm.
 * @param  isDescend boolean: true for sort in descending order.
 * @returns the sorted array.
 */
export function selectionSort<T>(this: T[], isDescend: boolean | undefined): T[] {
    const len = this.length;
    for (let i = 0; i < len - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < len; j++) {
        if (isDescend ? this[j] > this[minIndex] : this[j] < this[minIndex]) {
          minIndex = j;
        }
      }
      if (minIndex !== i) {
        [this[i], this[minIndex]] = [this[minIndex], this[i]];
      }
    }
    return this;
  }
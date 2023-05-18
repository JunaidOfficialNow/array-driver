/**
 *  This function sort the original array with quicksort algorithm.
 * @param  isDescend boolean: true for sort in descending order.
 * @returns the sorted array.
 */
module.exports = function quickSort(this, isDescend) {
    if(this.length < 2){
        return this;
    }
    let leftArray = [];
    let rightArray = [];

    let pivot = this[this.length-1];
    
    if (isDescend) {
        for(let i=0; i<this.length-1 ;i++) {
            if(this[i] < pivot ) {
                rightArray.push(this[i])
            } else {
                leftArray.push(this[i]);
            }
        }
    } else {
        for(let i=0; i<this.length-1 ;i++) {
            if(this[i] > pivot ) {
                rightArray.push(this[i])
            } else {
                leftArray.push(this[i]);
            }
        }
    }
    const sortedArray= [...quickSort(leftArray),pivot,...quickSort(rightArray)]
    sortedArray.forEach((el, index)=>{
        this[index] = el;
    })
}
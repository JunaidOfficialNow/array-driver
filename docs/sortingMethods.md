##  `quickSort` Function

This function sort the original array with quicksort algorithm.

### Parameters

- `isDescend` (boolean) - pass true to sort in desceding order. 

### Return Value

- Returns the original sorted array.

### Example

```javascript
const array = [5, 3, 8, 2, 1, 4];

array.quickSort();

console.log(array) // [1, 2, 3, 4, 5, 8]


```

```javascript
const array = [5, 3, 8, 2, 1, 4];

array.quickSort(true); // pass true to sort in descending order.

console.log(array) // [8, 5, 4, 3, 2, 1];

```

### notes 

- Only works with numeric arrays
- The array will be sorted in ascending order by default.


<hr>


##  `bubbleSort` Function

This function sort the original array with bubble sort algorithm.

### Parameters

- `isDescend` (boolean) - pass true to sort in desceding order. 

### Return Value

- Returns the original sorted array.

### Example

```javascript
const array = [3, 9, -6, 0, -7, 1];

array.bubbleSort();

console.log(array) // [-7, -6, 0, 1, 3, 9]


```

```javascript
const array = [3, 9, -6, 0, -7, 1];

array.bubbleSort(true); //pass true to sort in descending order.

console.log(array) // [9, 3, 1, 0, -6, -7]
```

### notes 

- Only works with numeric arrays
- The array will be sorted in ascending order by default.


<hr>


##  `insertionSort` Function

This function sort the original array with insertion sort algorithm.

### Parameters

- `isDescend` (boolean) - pass true to sort in desceding order. 

### Return Value

- Returns the original sorted array.

### Example

```javascript
const array = [3, 9, -6, 0, -7, 1];

array.insertionSort();

console.log(array) // [-7, -6, 0, 1, 3, 9]


```

```javascript
const array = [3, 9, -6, 0, -7, 1];

array.insertionSort(true); //pass true to sort in descending order.

console.log(array) // [9, 3, 1, 0, -6, -7]
```

### notes 

- Only works with numeric arrays
- The array will be sorted in ascending order by default.


<hr>


##  `mergeSort` Function

This function sort the original array with merge sort algorithm.

### Parameters

- `isDescend` (boolean) - pass true to sort in desceding order. 

### Return Value

- Returns the original sorted array.

### Example

```javascript
const array = [3, 9, -6, 0, -7, 1];

array.mergeSort();

console.log(array) // [-7, -6, 0, 1, 3, 9]


```

```javascript
const array = [3, 9, -6, 0, -7, 1];

array.mergeSort(true); //pass true to sort in descending order.

console.log(array) // [9, 3, 1, 0, -6, -7]
```

### notes 

- Only works with numeric arrays
- The array will be sorted in ascending order by default.


<hr>


##  `selectionSort` Function

This function sort the original array with selection sort algorithm.

### Parameters

- `isDescend` (boolean) - pass true to sort in desceding order. 

### Return Value

- Returns the original sorted array.

### Example

```javascript
const array = [3, 9, -6, 0, -7, 1];

array.selectionSort();

console.log(array) // [-7, -6, 0, 1, 3, 9]


```

```javascript
const array = [3, 9, -6, 0, -7, 1];

array.selectionSort(true); //pass true to sort in descending order.

console.log(array) // [9, 3, 1, 0, -6, -7]
```

### notes 

- Only works with numeric arrays
- The array will be sorted in ascending order by default.

<hr>
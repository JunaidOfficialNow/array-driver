
# Aggregation methods

  <p>Aggregation methods are functions that operate on an array of values and return a single value that represents some kind of summary or aggregation of the original data.</p>

 - [countBy](https://github.com/JunaidOfficialNow/array-driver/blob/master/docs/aggregationMethods.md#countby-function)
 - [countValues](https://github.com/JunaidOfficialNow/array-driver/blob/master/docs/aggregationMethods.md#countValues-function)
 - [difference](https://github.com/JunaidOfficialNow/array-driver/blob/master/docs/aggregationMethods.md#difference-function)
 - [groupBy](https://github.com/JunaidOfficialNow/array-driver/blob/master/docs/aggregationMethods.md#groupBy-function)
 - [intersect](https://github.com/JunaidOfficialNow/array-driver/blob/master/docs/aggregationMethods.md#intersect-function)
 - [union](https://github.com/JunaidOfficialNow/array-driver/blob/master/docs/aggregationMethods.md#union-function)
##  `countBy` Function

The `countBy` function takes an array of objects and returns an object where each key represents a value of the input array and the corresponding value represents the count of that value in the array. This function only works with non-primitive types.

### Parameters

- `keys` (required): The keys of the object to use for grouping the values in the array.

### Returns

- An object where each key represents a value of the input array and the corresponding value represents the count of that value in the array.

### Example

```javascript
const arr = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "John", age: 30 },
];

const result = arr.countBy("name", "age");
console.log(result);

// Output:
// {
//   "John.30": 2,
//   "Jane.25": 1,
//   "John.25": 1,
//   "Jane.30": 1
// }

```

### Notes
 - This function is made for arrays which contains non-primitive elements like objects.

<hr>


## `countValues` Function

Returns an object with the count of each primitive value in the input array or the count of specified primitive values.


### Parameters

- `...keys` (Optional):- primitive values to count in the input array.

### Returns

`Record<string, number>` - An object with primitive values as keys and their counts as values.

### Examples

```javascript
const arr = [1, 2, 3, 1, 2, 'test', 'test'];
const result = arr.countValues();
// result: { '1': 2, '2': 2, '3': 1, 'test': 2 }

const result2 = arr.countValues(1, 2);
// result2: { '1': 2, '2': 2 }
```

### Notes
- This function is made for arrays which contains primitive values.



 <hr>


## `difference` Function

Returns an array containing all elements from the first array that are not present in any of the other arrays.


### Parameters

- `comma seperated arrays` (required):- Arrays to find the difference with.

### Returns

- The difference between the first array and the other arrays.

### Examples

```javascript
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 6, 7];
const arr3 = [5, 6, 7, 8, 9];

const result = arr1.difference(arr2, arr3); // [1, 2]
```

 <hr>


## `groupBy` Function

Groups array of objects by the given key.


### Parameters

- key (required):- key of the object to group by

### Returns

- Object with grouped key's values as properties and grouped values as arrays

### Examples

```javascript

const data = [
  { name: "Alice", city: "New York", age: 25 },
  { name: "Bob", city: "New York", age: 30 },
  { name: "Charlie", city: "San Francisco", age: 25 },
  { name: "Dave", city: "San Francisco", age: 30 },
];
const example1 = data.groupBy('city');
// Output:
// {
//   "New York": [
//       { name: "Alice", city: "New York", age: 25 },
//       { name: "Bob", city: "New York", age: 30 }
//   ],
//   "San Francisco": [
//       { name: "Charlie", city: "San Francisco", age: 25 },
//       { name: "Dave", city: "San Francisco", age: 30 }
//   ]
// }


```

### notes
- This function is supposed to work only with array of objects. Else expect for unexpected behaviour.
- Currently only one key is supported. It will be updated to take multiple arguments and to group by multiple values.


 <hr>


## `intersect` Function

Returns the intersection of two arrays, i.e., an array of elements that are present in both arrays.


### Parameters

- array (required):- The array to intersect with

### Returns

- An array containing the intersection of the two arrays.

### Examples

```javascript

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 6, 7];

const intersectArr = arr1.intersect(arr2); // [3, 4, 5]


```
### notes
- This function is also compatible with arrays which contain non-primitive values.

 <hr>


## `union` Function

Returns the union of two arrays, i.e., an array of all elements from both arrays with duplicates removed.


### Parameters

- array (required):- The array to union with

### Returns

- An array containing the union of the two arrays.

### Examples

```javascript

const arr1 = [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }, { id: 3, name: "Charlie" }];
const arr2 = [{ id: 2, name: "Bob" }, { id: 3, name: "Charlie" }, { id: 4, name: "David" }];

// Call the function
const result = arr1.union(arr2);

// Output the result
console.log(result);
// [{ id: 1, name: "Alice" },{ id: 2, name: "Bob" },{ id: 3, name: "Charlie" },{ id: 4, name: "David" }]

```
### notes
- This function is also compatible with arrays which contain non-primitive values.

<hr>

[next: deleteMethods](https://github.com/JunaidOfficialNow/array-driver/blob/master/docs/deleteMethods.md)
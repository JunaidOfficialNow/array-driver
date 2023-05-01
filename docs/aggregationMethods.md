
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


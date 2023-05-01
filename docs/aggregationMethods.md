
# 1. `countBy` Function

The `countBy` function takes an array of objects and returns an object where each key represents a value of the input array and the corresponding value represents the count of that value in the array. This function only works with non-primitive types.

## Parameters

- `keys` (required): The keys of the object to use for grouping the values in the array.

## Returns

- An object where each key represents a value of the input array and the corresponding value represents the count of that value in the array.

## Example

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

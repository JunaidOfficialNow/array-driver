# Filter methods

<hr>


## `distinct` Function

Returns a new array with only unique values from the original array.


### Examples

```javascript


// Example usage
const numbers = [1, 2, 3, 3, 4, 5, 5];
const uniqueNumbers = numbers.distinct(); // [1, 2, 3, 4, 5]

const objects = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 1, name: "John" },
  { id: 3, name: "Bob" },
];
const uniqueObjects = objects.distinct(); // [{ id: 1, name: "John" }, { id: 2, name: "Jane" }, { id: 3, name: "Bob" }]


```
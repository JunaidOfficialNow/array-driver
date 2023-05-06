# Filter methods

<p>Filter methods are methods that operate on an array of values and return a new array that contains only the values that meet certain criteria. </p>

  

 - [distinct](https://github.com/JunaidOfficialNow/array-driver/blob/master/docs/filterMethods.md#distinct-function)
 - [filterNullish](https://github.com/JunaidOfficialNow/array-driver/blob/master/docs/filterMethods.md#filterNullish-function)

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

<hr>


## `filterNullish` Function

 - Removes all the null and undefined values from the original array.


### Returns
 
- The original array with no null or undefined values.


### Examples

```javascript

// Example usage
const values = [1, null, 2, undefined, 3, null, 4];
const nonNullishValues = values.filterNullish(); // [1, 2, 3, 4]

const names = ["John", null, "Jane", undefined, "Bob", null, "Alice"];
const nonNullishNames = names.filterNullish(); // ["John", "Jane", "Bob", "Alice"]


```
##  `findOneAndUpdate` Function

Returns true if all elements are of given type

### Returns

- boolean: true if all elements are of given type

### Example

```javascript
const arr = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "John", age: 30 },
];

const result = arr.allElementOfType('object') 
// true

const  arr2 = [3,5,2,3,4,2];

const result2 = arr2.allElementOfType('number');
// true

const arr3 = ['hello', 'array', 'driver', 4];

const result3 = arr3.allElementOfType('string');
// false

```

## notes 

- Since javascript considers the type of array to be 'object' it will be considered as an object type.

<hr>

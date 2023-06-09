# Validation methods

  <p>Validation methods validate the array with certain criteria</p>

 - [allElementOfType](https://github.com/JunaidOfficialNow/array-driver/blob/master/docs/validateMethods.md#allElementOfType-function)
 - [isEmpty](https://github.com/JunaidOfficialNow/array-driver/blob/master/docs/validateMethods.md#isEmpty-function)
 - [isUnique](https://github.com/JunaidOfficialNow/array-driver/blob/master/docs/validateMethods.md#isUnique-function)

##  `allElementOfType` Function

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

### notes 

- Since javascript considers the type of array to be 'object' it will be considered as an object type.

<hr>

##  `isEmpty` Function

Returns true if array is empty

### Returns

- boolean: true if array has no elements

### Example

```javascript


const  arr = [3,5,2,3,4,2];

const arrayIsEmpty = arr.isEmpty();
// false

```

<hr>

##  `isUnique` Function

Returns true if all the array elements are  unique

### Returns

- boolean: true if array has no duplicate elements

### Example

```javascript


const  arr = [3,5,2,3,4,2];

const arrayIsUnique = arr.isUnique();
// false

const arr2 = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "John", age: 30 },
];

const isObjectArrayUnique = arr2.isUnique()
// false

```

## notes 

- use  [`distinct`](https://github.com/JunaidOfficialNow/array-driver/blob/master/docs/filterMethods.md#distinct-function) method to remove duplicate elements from the array.

<hr>



# Selection methods

  <p>Selection methods are methods which will help to select a element from the array by certain criteria</p>

 - [sample](https://github.com/JunaidOfficialNow/array-driver/blob/master/docs/selectionMethods.md#sample-function)


##  `sample` Function

Returns a random element from the array.

### Returns

- A random element from the input array, or undefined if the input array is empty.

### Example

```javascript
const arr = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "John", age: 30 },
];

const result = arr.sample();
// { name: "John", age: 25 }

const  arr2 = [3,5,2,3,4,2];

const result2 = arr2.sample();
// 3


```
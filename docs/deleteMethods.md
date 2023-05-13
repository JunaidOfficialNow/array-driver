##  `deleteAllByValue` Function

 - deletes all matching values from an array and returns an array of the deleted values.

### Returns

- An array of the deleted values.

### Example 1

```javascript
const arr = [
  { name: "Charlie", age: 35 },
  { name: "David", age: 40 },
  { name: "Eve", age: 45 }
];

arr.deleteAllByValue({ name: "Charlie", age: 35 });
console.log(arr);
//  [
//   { name: "David", age: 40 },
//   { name: "Eve", age: 45 }
// ];

```

### Example 2

```javascript
const arr = ['1',3,4,3,4,3,1];

arr.deleteAllByValue('1');
console.log(arr);
// [3,4,3,4,3,1];
```

### Note

 -  This function will find for the exact element that matches the given target. If you want to delete by a condition refer [`deleteAllWhere`](https://github.com/JunaidOfficialNow/array-driver/blob/master/docs/deleteMethods.md#deleteAllWhere-function) function.


<hr>


##  `deleteAllWhere` Function

 - deletes all elements from an array that meet a certain search criteria specified by a callback function, and returns an array of the deleted values.


### parameters

- `callback` function: A function that returns true for the element you want to delete. The callback function takes one parameter which represents each element in the array.

### Returns

- An array of the deleted values.

### Example 1

```javascript
const arr = [
  { name: "Charlie", age: 35 },
  { name: "David", age: 40 },
  { name: "Eve", age: 45 }
];

arr.deleteAllWhere(obj => obj.name == 'Charlie');
console.log(arr);
//  [
//   { name: "David", age: 40 },
//   { name: "Eve", age: 45 }
// ];

```

### Example 2

```javascript
const arr = ['1',3,4,3,4,3,1];

arr.deleteAllWhere(el => el > 2 );
console.log(arr);
// ['1',1];
```


<hr>
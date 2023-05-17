# array-driver
A simple utility package for manipulating arrays. This package contains some useful methods that can save a lot of time during development.

### Installation
You can install array-driver using NPM:

```shell
npm install array-driver
```
### Usage
First configure the package

```js
const arrayDriver = require('array-driver');
arrayDriver.config();
```
Then start using the functions



### Examples
```javascript

// Example usage
const students = [
  { id: 1, name: 'Alice', grade: 'A' },
  { id: 2, name: 'Bob', grade: 'B' },
  { id: 3, name: 'Charlie', grade: 'C' },
  { id: 4, name: 'David', grade: 'B' },
  { id: 5, name: 'Eve', grade: 'A' },
];

// Define the search criteria callback function
const searchCriteria = (value) => value.grade === 'B';

// Define the update criteria callback function
const updateCriteria = (element) => {
  element.grade = 'A+';
};

// Call the updateMany function
const updatedStudents = students.updateMany(searchCriteria, updateCriteria);
console.log(updatedStudents);
/*
Output:
[
  { id: 2, name: 'Bob', grade: 'A+' },
  { id: 4, name: 'David', grade: 'A+' }
]
*/
```



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


### types of methods 

 - [aggregationMethods](https://github.com/JunaidOfficialNow/array-driver/blob/master/docs/aggregationMethods.md)
 - [deleteMethods](https://github.com/JunaidOfficialNow/array-driver/blob/master/docs/deleteMethods.md)
 - [filterMethods](https://github.com/JunaidOfficialNow/array-driver/blob/master/docs/filterMethods.md)
 - [selectionMethods](https://github.com/JunaidOfficialNow/array-driver/blob/master/docs/selectionMethods.md)
 - [updateMethods](https://github.com/JunaidOfficialNow/array-driver/blob/master/docs/updateMethods.md)
 - [validateMethods](https://github.com/JunaidOfficialNow/array-driver/blob/master/docs/validateMethods.md)


 [see all the methods available here](https://github.com/JunaidOfficialNow/array-driver/blob/master/docs/Main.md)

### Contributions
- If you wish to contribute on this package, kindly fork and make a pull request.
- Ideas for more utility functions are welcome.


### License
This project is licensed under the ISC License - see the LICENSE file for details.
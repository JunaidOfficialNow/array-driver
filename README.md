# array-driver
A simple utility package for manipulating arrays.

### Installation
You can install array-driver using NPM:

```shell
npm install array-driver
```
### Usage
```js
findOneAndUpdate( searchValue: any, targetValue: any, array: any[],): boolean
// This function searches for the searchValue in the given array. If it finds the value, it updates it with targetValue and returns true. Otherwise, it returns false.

```


### Parameters
- searchValue (required): The value to search for in the array. <br>
- targetValue (required): The value to replace the searchValue with, if found. 
- array (optional): The array to search for the searchValue. <b>Required if you don't add to the Array.prototype and use like array methods </b> <br>
### Return Value
- true - if the searchValue was found and replaced with targetValue. <br>
- false - if the searchValue was not found in the array.


### Examples
```js
const { findOneAndUpdate } = require('array-driver');

// adding method to the array prototype
Array.prototype.findOneAndUpdate = findOneAndUpdate;

const myArray = [1, 2, 3, 4];

const result = myArray.findOneAndUpdate(2, 5);

console.log(myArray); // Output: [1, 5, 3, 4]
console.log(result); // Output: true

```

### if your value is an object or array pass a callback with search criteria
```js
const { findOneAndUpdate } = require('array-driver');

// adding method to the array prototype
Array.prototype.findOneAndUpdate = findOneAndUpdate;

const myArray = [
  {
    name: 'junaid',
    age: 20
  },
  {
    name: 'abin',
    age: 21,
  },
  {
  name: 'ragesh',
  age: 22,
  },
  {
    name: 'ajul',
    age: 30,
  },
];
const updateObject = {
  name: 'munawer',
  age: 40,
}

// pass callback if the searchItem is not primitive value
const result = myArray.findOneAndUpdate(user => user.name == 'junaid', updateObject);

console.log(myArray);
// const myArray = [
//  {
//   name: 'munawer',
//   age: 40,
//  },
//   {
//     name: 'abin',
//     age: 21,
//   },
//   {
//   name: 'ragesh',
//   age: 22,
//   },
//   {
//     name: 'ajul',
//     age: 30,
//   },
// ];
console.log(result); // Output: true

```

```js
const { findOneAndUpdate } = require('array-driver');

const myArray = [1, 2, 3, 4];

const result = findOneAndUpdate(2, 5, myArray);

console.log(myArray); // Output: [1, 5, 3, 4]
console.log(result); // Output: true
```
### License
This project is licensed under the ISC License - see the LICENSE file for details.
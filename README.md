###array-driver
A simple utility package for manipulating arrays.

###Installation
You can install array-driver using NPM:

`
npm install array-driver
`
###Usage
`
findOneAndUpdate( searchValue: any, targetValue: any, array: any[],): boolean
This function searches for the searchValue in the given array. If it finds the value, it updates it with targetValue and returns true. Otherwise, it returns false.
`

###Parameters
array (required): The array to search for the searchValue.
searchValue (required): The value to search for in the array.
targetValue (required): The value to replace the searchValue with, if found.
Return Value
true if the searchValue was found and replaced with targetValue.
false if the searchValue was not found in the array.
###Examples
`
const { findOneAndUpdate } = require('array-driver');

const myArray = [1, 2, 3, 4];

const result = findOneAndUpdate(myArray, 2, 5);

console.log(myArray); // Output: [1, 5, 3, 4]
console.log(result); // Output: true
`
###License
This project is licensed under the ISC License - see the LICENSE file for details.
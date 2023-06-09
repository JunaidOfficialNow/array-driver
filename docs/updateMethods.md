# Update Methods

<p>Update methods helps us to modify the existing array by updating or replacing array elements</p>

 - [updateOne](https://github.com/JunaidOfficialNow/array-driver/blob/master/docs/updateMethods.md#updateOne-function)
 - [updateMany](https://github.com/JunaidOfficialNow/array-driver/blob/master/docs/updateMethods.md#updateMany-function)
 - [replaceOne](https://github.com/JunaidOfficialNow/array-driver/blob/master/docs/updateMethods.md#replaceOne-function)
 - [replaceMany](https://github.com/JunaidOfficialNow/array-driver/blob/master/docs/updateMethods.md#replaceMany-function)
 - [findByValueAndUpdate](https://github.com/JunaidOfficialNow/array-driver/blob/master/docs/updateMethods.md#findByValueAndUpdate-function)
 - [findAllByValueAndUpdate](https://github.com/JunaidOfficialNow/array-driver/blob/master/docs/updateMethods.md#findAllByValueAndUpdate-function)
 - [findByValueAndReplace](https://github.com/JunaidOfficialNow/array-driver/blob/master/docs/updateMethods.md#findByValueAndReplace-function)
 - [findAllByValueAndReplace](https://github.com/JunaidOfficialNow/array-driver/blob/master/docs/updateMethods.md#findAllByValueAndReplace-function)

##  `updateOne` Function

This function will find and update an element from the array.

## Parameters

- `searchCriteria`: The callback function that will return true for the element to be updated. It takes one necessary arguments and 2 optional arguments.`value` (the current element in the array),  optional: `index` (the index of the current element), and `obj` (the array itself).
- `updateCriteria`: The callback function that will update the element. It takes one argument: the element to be updated.

## Return Value

- If no element was found, the function returns `undefined`.
- If an element was found and updated, it returns the updated element.

## Example

```javascript
// Example usage
const array = [1, 2, 3, 4, 5];

const searchCriteria = (value) => value === 3;
const updateCriteria = (element) => element * 2;

const updatedElement = array.updateOne(searchCriteria, updateCriteria);
console.log(updatedElement); // Output: 6
```

```javascript
// Example usage
const users = [
  { id: 1, name: 'Alice', age: 25 },
  { id: 2, name: 'Bob', age: 30 },
  { id: 3, name: 'Charlie', age: 35 },
];

// Define the search criteria callback function
const searchCriteria = (value) => value.id === 2;

// Define the update criteria callback function
const updateCriteria = (obj) => {
    obj.age = 31 // Update the age property of the object
};

// Call the updateOne function
const updatedUser = users.updateOne(searchCriteria, updateCriteria);
console.log(updatedUser); // Output: { id: 2, name: 'Bob', age: 31 }

```

## notes 
- If the array element is of type object then you just have to make the updates no need to return anything.
- If the array element is of type primitive then you have to return the updated value.


<hr>


##  `updateMany` Function

This function will find and update all elements that matches the searh criteria from the array.

## Parameters

- `searchCriteria`: The callback function that will return true for the element to be updated. It takes one necessary arguments and 2 optional arguments.`value` (the current element in the array),  optional: `index` (the index of the current element), and `obj` (the array itself).
- `updateCriteria`: The callback function that will update the element. It takes one argument: the element to be updated.

## Return Value

- If no element was found, the function returns `undefined`.
- If any elements were updated, the function return the updated elements.

## Example

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
const numbers = [3,2,4,2,5,3,1,2];

const updatedElements = numbers.updateMany(el => el > 2, el => el * 2);
console.log(updatedElements)
// [6, 8, 10, 6]
```

## notes 
- If the array element is of type object then you just have to make the updates no need to return anything.
- If the array element is of type primitive then you have to return the updated value.


<hr>


##  `replaceOne` Function

This function will find and replace an element from the array.

## Parameters

- `searchCriteria`: The callback function that will return true for the element to be updated. It takes one necessary arguments and 2 optional arguments.`value` (the current element in the array),  optional: `index` (the index of the current element), and `obj` (the array itself).
- `replaceValue` : value to be replaced with.

## Return Value

- If no element was found, the function returns `undefined`.
- If any element was replaced, the function return the replaced index value.

## Example

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

// Call the updateMany function
const updatedStudents = students.replaceOne(searchCriteria, {replaced: true});
console.log(updatedStudents); // 1

console.log(students);
// [
//   { id: 1, name: 'Alice', grade: 'A' },
//   {replaced: true},
//   { id: 3, name: 'Charlie', grade: 'C' },
//   { id: 4, name: 'David', grade: 'B' },
//   { id: 5, name: 'Eve', grade: 'A' },
// ];


```

```javascript 
const numbers = [3,2,4,2,5,3,1,2];

const updatedElement = numbers.replaceOne(el => el > 2, 10);
console.log(updatedElement)
// 0
```

<hr>


##  `replaceMany` Function

This function will find and replace all elements by the given value.

## Parameters

- `searchCriteria`: The callback function that will return true for the element to be updated. It takes one necessary arguments and 2 optional arguments.`value` (the current element in the array),  optional: `index` (the index of the current element), and `obj` (the array itself).
- `replaceValue` : value to be replaced with.

## Return Value

- If no element was found, the function returns `undefined`.
- If any elements were replaced, the function will return the indexes of the replaced values.

## Example

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

// Call the updateMany function
const updatedStudents = students.replaceMany(searchCriteria, {replaced: true});
console.log(updatedStudents); // [1, 3]

console.log(students);
// [
//   { id: 1, name: 'Alice', grade: 'A' },
//   {replaced: true},
//   { id: 3, name: 'Charlie', grade: 'C' },
//   {replaced: true},
//   { id: 5, name: 'Eve', grade: 'A' },
// ];


```

```javascript 
const numbers = [3,2,4,2,5,3,1,2];

const updatedElements = numbers.replaceMany(el => el > 2, 10);
console.log(updatedElements)
// [0, 5]
```

<hr>

##  `findByValueAndUpdate` Function

This function will find and update the value that matches the provided value.

## Parameters

- `target`: The target value to be updated.
-  `updateCriteria`: the callback function that updates the value.

## Return Value

- If no element was found, the function returns `undefined`.
- If any elements were updated, the function will return the updated value.

## Example

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

// Call the updateMany function
const updatedStudent = students.findByValueAndUpdate({ id: 2, name: 'Bob', grade: 'B' }, student => student.grade = 'A+');
console.log(updatedStudent); // { id: 2, name: 'Bob', grade: 'A+' }


```

```javascript 
const numbers = [3,2,4,2,5,3,1,2];

const updatedElement = numbers.findByValueAndUpdate(2, num => num * 2);
console.log(updatedElement)
// 4
```

<hr>


##  `findAllByValueAndUpdate` Function

This function will find and update all the elements that matches the value.

## Parameters

- `target`: The target value to be updated.
-  `updateCriteria`: the callback function that updates the value.

## Return Value

- If no element was found, the function returns `undefined`.
- If any elements were updated, the function will return the updated values.

## Example

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

// Call the updateMany function
const updatedStudents = students.findAllByValueAndUpdate({ id: 2, name: 'Bob', grade: 'B' }, student => student.grade = 'A+');
console.log(updatedStudents); // [{ id: 2, name: 'Bob', grade: 'A+' }]


```

```javascript 
const numbers = [3,2,4,2,5,3,1,2];

const updatedElements = numbers.findAllByValueAndUpdate(2, num => num * 2);
console.log(updatedElements)
// [4, 4, 4]
```

<hr>

##  `findByValueAndReplace` Function

This function will find and replace one value that matches the provided value.

## Parameters

- `target`: The target value to be updated.
-  `replaceValue`: the value to be replaced with.

## Return Value

- If no element was found, the function returns `undefined`.
- If any elements were replaced, the function will return the replaced index

## Example

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

// Call the updateMany function
const updatedStudent = students.findByValueAndReplace({ id: 2, name: 'Bob', grade: 'B' }, {replaced: true});
console.log(updatedStudent); // 1

console.lot(students);
// [
//   { id: 1, name: 'Alice', grade: 'A' },
//   {replaced: true},
//   { id: 3, name: 'Charlie', grade: 'C' },
//   { id: 4, name: 'David', grade: 'B' },
//   { id: 5, name: 'Eve', grade: 'A' },
// ]



```

```javascript 
const numbers = [3,2,4,2,5,3,1,2];

const updatedElement = numbers.findByValueAndReplace(2, 10);
console.log(updatedElement)
// 1
```

<hr>


##  `findAllByValueAndReplace` Function

This function will find and replace all values that matches the provided value.

## Parameters

- `target`: The target value to be updated.
-  `replaceValue`: the value to be replaced with.

## Return Value

- If no element was found, the function returns `undefined`.
- If any elements were replaced, the function will return the indexes of the replaced elements.

## Example

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

// Call the updateMany function
const updatedStudents = students.findByValueAndReplace({ id: 2, name: 'Bob', grade: 'B' }, {replaced: true});
console.log(updatedStudents); // [1]

console.lot(students);
// [
//   { id: 1, name: 'Alice', grade: 'A' },
//   {replaced: true},
//   { id: 3, name: 'Charlie', grade: 'C' },
//   { id: 4, name: 'David', grade: 'B' },
//   { id: 5, name: 'Eve', grade: 'A' },
// ]



```

```javascript 
const numbers = [3,2,4,2,5,3,1,2];

const updatedElements = numbers.findByValueAndReplace(2, 10);
console.log(updatedElements)
// [1,3,7]
```

<hr>

<div align='right'>
  <a href = 'https://github.com/JunaidOfficialNow/array-driver/blob/master/docs/validateMethods.md' >See validate methods </a>
</div>


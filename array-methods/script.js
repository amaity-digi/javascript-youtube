const num = [31, 2, 43, 5, 3, 88, 44, 23, 87, 33];

// using forEach method to iterate
//forEach(): Executes a provided function once for each array element
num.forEach((item) => console.log(item));

// map(): Creates a new array with the results of calling a provided function on every element.

const doubled = num.map((item) => item * 3);
console.log(doubled, 'doubled');

//filter(): Creates a new array with all elements that pass the test implemented by the provided function.

const evenNumbers = num.filter((item) => item % 2 == 0);
console.log(evenNumbers, 'evenNumbers');

//reduce(): Applies a function against an accumulator and each element in the array to reduce it to a single value.
const sum = num.reduce((acc, curr) => acc + curr, 0);
console.log(sum, 'sum');

// find(): Returns the first element in the array that satisfies the provided testing function.
const firstEven = num.find((item) => item % 2 == 0);
console.log(firstEven, 'firstEven');

// indexOf(): Returns the first index at which a given element can be found in the array, or -1 if it is not present.
const index = num.indexOf(3);
console.log(index, 'index');

// some(): Checks if at least one element in the array passes the test implemented by the provided function.
const hasEven = num.some((item) => item % 2 == 0);
console.log(hasEven, 'hasEven');// it will return true(if passed true) or false.

//every(): Checks if all elements in the array pass the test implemented by the provided function
const allPositive = num.every((item) => item > 0);
console.log(allPositive, 'allPositive') //it will return true(if passed true) or false.

const negativeSenario = num.every((item) => item % 2 == 0);
console.log(negativeSenario, 'negativeSenario');

//sort(): Sorts the elements of an array in place and returns the sorted array.
// const sortedNum = num.sort((a, b) => a - b); // asc order
// console.log(sortedNum, 'sortedNum'); // it will changed the new Array
// console.log(num, 'original array');

const notToChangeOrigalArray = num.slice().sort((a, b) => a - b);
console.log(notToChangeOrigalArray, 'notToChangeOrigalArray');
console.log(num, 'original');

//The slice() method returns selected elements in an array, as a new array.
//The slice() method selects from a given start, up to a (not inclusive) given end.
//The slice() method does not change the original array.

const OriFruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const sliceing = OriFruits.slice(1, 3);
console.log(sliceing, 'sliceing');

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const selectedFruits = fruits.slice(-3, -1);
console.log(selectedFruits, 'selectedFruits');

//The splice() method adds and/or removes array elements.
//The splice() method overwrites the original array.

const fruitAll = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
const splice = fruitAll.splice(2, 2);
console.log(splice, 'splice')


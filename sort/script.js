// The sort() overwrites the original array.
//The sort() sorts the elements as strings in alphabetical and ascending order.

const x = [1, 3, 4, 6, 7, 9, 3, 6, 33, 4];
const sorted = x.sort(); // if I did like that it will takes only first element but it wasn't sorted.
console.log(sorted, 'wrong!');

const currectSortedAsc = x.sort((a, b) => a - b);// a and b are always the current value and the next value.means small numnber will come first then biggest numbers 
console.log(currectSortedAsc, 'right'); // sorted in accending order

const currectSortedDec = x.sort((a, b) => b - a);
console.log(currectSortedDec); // sorted in decending order

console.log(x, 'original Array');//sort method changed the original array.

const checkingTest = x.some((item) => item % 2 == 0);
console.log(checkingTest);
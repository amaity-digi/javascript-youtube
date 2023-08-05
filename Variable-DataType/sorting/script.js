const arr = [2, 4, 6, 3, 8, 8, 9, 0, 6];
console.log(arr.sort(), 'ase');
console.log(arr.sort((a, b) => b - a), "des");

const arr1 = [23, 4, 62, 33, 85, 21, 121, 0, 12];
console.log(arr1.sort((a, b) => a - b), "asending");
console.log(arr1.sort((a, b) => b - a), "desending");

const people = [
    { name: 'Suraj', age: 23 },
    { name: 'Ashish', age: 25 },
    { name: 'Sai', age: 13 },
    { name: 'Abhi', age: 21 },
]

const ans = people.sort((a, b) => a.age - b.age);
console.log(ans);



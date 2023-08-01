//Way to declare  a variable
// var , let , const

let firstName = 'Ashish';
let lastName = 'Maity';
console.log(firstName, lastName);

console.log(gender); // Here we are not getting any error, we got undifined.
// this concept something called hositing, before initialized we can declared a variable.
var gender = 'Male';
//console.log(gender);

//Re-assigning a variable
let num = 21;
num = 39;
console.log(num);

let score;
score = 200;
console.log(score);
if (true) {
    score = score + 1
    console.log(score);
}

//Whenever we used const , it should be after declared it should be initialized.
//Uncaught SyntaxError: Missing initializer in const declaration

//const scan;

//Re-assigning a variable
// using let and var we are able to re-assigne a variable.
var num1 = 20;
num1 = 30;
console.log(num1);

//Re-assigning a variable
// using const we are not able to re-assigning a variable, once we assign it's fixed, we can not change it.
// we got this error: Uncaught TypeError: Assignment to constant variable.

const num2 = 120;
//num2 = 40;
console.log(num2);

//let age = 25;

//console.log(age);
// if I declarded variable before initialized we got error using let,
//error is : Uncaught ReferenceError: Cannot access 'age' before initialization
let age = 25;

const arr = [1, 2, 3, 4, 5];
arr.push(5);// inside array we are adding element at the end means at the last index.
console.log(arr);
arr.unshift(10);//inside array we are adding element at the firstIndex
console.log(arr);
const mySet = new Set(arr);// Set doesn't allow duplicate
console.log(mySet)

const person = {
    name: 'ashis'
}
person.name = 'ram';// override the name
person.email = 'ram@gmail.com'; // insert email at person object
console.log(person);

//Declare multiple value at once
let a, b, c;
const d = 10, e = 30, f = 20;
console.log(d);

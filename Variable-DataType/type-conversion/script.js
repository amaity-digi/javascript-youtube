//How to convert string to number??

let amount = '100.2';
console.log(amount, typeof amount);
let num1 = Number(amount); //using Number method
let num2 = +amount; // unary operator which is basically + sign 
let num3 = parseInt(amount); // using parseInt function we can convert
console.log(num1, typeof num1);
console.log(num2, typeof num2);
console.log(num3, typeof num3);

//How to convert number to string
let number = 3000;
let numConvert = number.toString(); //using toString() method we can convert to string.
console.log(numConvert, typeof numConvert);

//Convert sring to decimal
let decimal = parseFloat(amount);
console.log(decimal, typeof decimal);

//Convert number to Boolean
let score = 0; // if the number is zero(0) means false or falsy value and if the number is 1 or any number , then the number is true.
let bool = Boolean(score);
console.log(bool, typeof bool); 
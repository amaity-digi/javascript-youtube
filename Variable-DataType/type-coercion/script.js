let x;
x = 5 + '5'; // 55
x = 5 + Number('5'); // 10
x = 5 * '5'; // 25
x = 5 + null; // 5
x = Number(null); // 0 number
x = Number(true); // 1 number
x = Number(false); // 0 number
x = 5 + true; // 6 number
x = 5 + false; // 5 number
x = 5 + undefined;// NaN
console.log(x, typeof x);
//concat() in array
//The concat() method is used to merge two or more arrays. 

const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);

//using spread operator also we can concat array
const margeArray = [...array1, ...array2]
console.log(margeArray);

// How to add object element inside object

const obj = {
    name: "ashish"
}
obj['age'] = 30;
console.log(obj);

const obj1 = {
    a: 1,
    b: 2,
    c: 3
}
console.log(Object.keys(obj1)); // Here we get to know ,how many keys we have , instend of checking length, if we check the length we hot undifined.
console.log(Object.values(obj1));
console.log(Object.entries(obj1));

for (let key in obj1) {
    console.log(key); // we got the keys
}

for (let key in obj1) {
    console.log(obj1[key]); // if we pass the keys we got values.
}


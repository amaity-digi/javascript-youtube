//promises:

//pending: It can be pending when it's still doing somethingsin the background.
//rejected: It can be rejected if there was an error.
//fullfilled: if the data successfully arrived.

fetch("https://jsonplaceholder.typicode.com/users") //response Arrived
    .then((res) => res.json()) // it's converted to JSON
    .then((data) => console.log(data)); // print to console

// await keywords inside functions for the first time in javaScript we do actually have a way of stopping 
//and of pausing the code inside a function.
//By doing this it makes the function looks a lot more normal again,like syncronous javascript code.
async function getUsers() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    console.log(data, 'data');
}

getUsers();
// before this two asynchronous function executed, in this below console will executed . because they both
// are asynchronous function , it will wait for sometime to fetch the data.
console.log("not to wait anyone!");


//Template Literals

const name = "John";
x = `Hello my name is ${name}`
console.log(x);

//length
console.log(name.length);

//String properties and Methods
const s = "Hello World!";
x = typeof (s);
console.log(x); //string

const s1 = new String("Hello World!");
x = typeof (s1); //object
x = s1[0];
x = s1.charAt(0); // both are similar x = s1[0];
const c = 'hello World bro!!!'
x = c.toLowerCase();
x = c.toUpperCase();
x = c.indexOf('W'); // it will return index number.
console.log(x, 'index');

// find D@+ from this below string.
const string = "#d@@cd76D2+kuL(ygP";
const finding = string.indexOf('D@+'); // if we checked single single value , then we got index number.
console.log(finding, 'finding');

//substring
const sub = 'Hello JavaScript';
console.log(sub.substring(6)); // if substring take only one parameter that means it is postion of string and afterthat rest of the string.


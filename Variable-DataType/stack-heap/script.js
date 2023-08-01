//Values are stored on the Stack (Primitive values stored on the stack)
const name = 'Sai';
const age = 23;

//Reference values are stored on the heap (Array, Object)
const person = {
    name: 'Ranjon',
    age: 32
}

let newName = name;
//Now re-assigned the name
newName = "Rahul";
console.log(name, newName);// output is Sai, Rahul, because both are in stack memory

let newPerson = person;
console.log(person, newPerson);
//Now if I re-assigne newPerson with another name 
newPerson.name = 'Ajeet';
console.log(newPerson.name, person.name); // output is same -> Ajeet , because both stored in the same spot in the heap
// and they're being accessed by referance.



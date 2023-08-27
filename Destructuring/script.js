const datas = [{
    id: 1,
    name: 'Ashish',
    age: 21
},
{
    id: 2,
    name: 'Sai',
    age: 23
},
{
    id: 3,
    name: 'Vivek',
    age: 20
}
]

function getDatas() {
    return datas;
}

function getData(id) {
    return datas.find((data) => data.id === id);
}

const specificBook = getData(3);
// const name = specificBook.name;
// const age = specificBook.age;
// const id = specificBook.id;
const { name, age, id } = specificBook;
console.log(age);

const { ...viv } = datas;
console.log(viv);


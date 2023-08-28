// filter method:
// filter method in order to filter out some element of the array based on condition.
//The filter() method does not change the original array.

albums = [
    {
        "id": 1,
        "title": "quidem molestiae enim",
        "pages": 100
    },
    {
        "id": 2,
        "title": "sunt qui excepturi placeat culpa",
        "pages": 300
    },
    {
        "id": 3,
        "title": "omnis laborum odio",
        "pages": 2000
    },
    {
        "id": 4,
        "title": "non esse culpa molestiae omnis sed optio",
        "pages": 500
    },

]

const countPages = albums
    .filter((ele) => ele.pages > 400);
console.log(countPages);

// we can pass multiple filter as well
const countPages1 = albums
    .filter((ele) => ele.pages > 400)
    .filter((ele) => ele.id > 3);
console.log(countPages1);

//The includes() method returns true if a string contains a specified string. Otherwise it returns false

const includes = albums.filter((ele) => ele.title.includes("non esse culpa molestiae omnis sed optio"));
console.log(includes, 'includes');



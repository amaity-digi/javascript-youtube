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

// Add Book object to albums.
const newBook = {
    id: 5,
    title: "Harry Potter and the Chamber of Secrets",
    author: "J. K. Rowling"
}

const albumsAfterAdd = [...albums, newBook];
console.log(albumsAfterAdd, 'albumsAfterAdd');

//Delete Book Object from Array
const albumsAfterDelete = albumsAfterAdd.filter((item) => item.id !== 3);
console.log(albumsAfterDelete, 'albumsAfterDelete');

//Update Book object in the array
const albumsAfterUpdate = albumsAfterAdd.map((item) => item.id === 1 ? { ...item, pages: 1200 } : item); // Whenever we are updating an array ,we should go for map. 
console.log(albumsAfterUpdate, 'albumsAfterUpdate');



// const toggle = document.getElementById("toggle");
// const screen = document.querySelector(".fullScreen");

// toggle.addEventListener("click", () => {
//     console.log("clicked!")
//     if (screen.style.backgroundColor === "yellow") {
//         screen.style.backgroundColor = "green";
//     } else {
//         screen.style.backgroundColor = "yellow";
//     }
// })

//map method::
// Basicaaly map method will loop over an array and return a new array with the same length with some operation applied.
books = [
    {
        id: 1,
        title: "Lord Krishna!",
        author: "Ram"
    },
    {
        id: 2,
        title: "Chandrajan",
        author: "ISRO"
    }
]
const x = [1, 2, 3, 4, 5].map((ele) => ele * 2);
console.log(x);

const y = books.map((ele) => ele.title);
console.log(y, "title1");

const z = books.map((ele) => ({
    title: ele.title,
    author: ele.author
}));
console.log(z, "title2");

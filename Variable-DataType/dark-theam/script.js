const button = document.getElementById("myButton");

button.addEventListener("click", () => {
    console.log("clicked");
    document.body.classList.toggle("dark-mode")
})

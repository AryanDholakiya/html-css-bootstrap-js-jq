function clicked(id) {
    id.innerHTML = "Text Clicked!";
}

//date
function showDate() {
    let d = new Date();
    document.getElementById('date').innerHTML = d.toDateString();
}

//alert using addEventListener
document.getElementById('alert2').addEventListener("click", () => {
    alert("Alert!, using eventListener.");
});

//
document.getElementById('myform').addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Form submitted SuccessFully!");
})


//keyup event example
let searchedval = document.getElementById('serchbox');
let output = document.getElementById("output");

const products = ["Laptop", "Lamp", "Lantern", "Phone", "Pen", "Pencil", "Paper"];

searchedval.addEventListener("keyup", () => {
    let entry = searchedval.value.toLowerCase();
    let matches = products.filter(prod => { 
       return prod.toLowerCase().startsWith(entry)
    });
    output.innerHTML = matches.length ? matches.join(", "): "No matches found";
})
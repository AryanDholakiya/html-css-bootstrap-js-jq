let first = document.getElementById("first");
let second = document.getElementById("second");

let button = document.getElementById("btn");
let iTag = document.getElementById("iTag");


iTag.addEventListener('click', () => {

    iTag.classList.add("blink-effect");
    setTimeout(() => {
        iTag.classList.remove("blink-effect");
    }, 400); 

    if (first.value) {
        second.value = first.value;
        first.value = null;
    }
    else {
        first.value = second.value;
        second.value = null;
    }
})



// function buttoncolor() {
//     button.classList.add("active");
// }
// buttoncolor();
//     button.classList.remove("active");
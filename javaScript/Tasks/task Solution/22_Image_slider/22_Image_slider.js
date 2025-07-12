let left_arrow = document.getElementById("left_arrow");
let right_arrow = document.getElementById("right_arrow");

let slide = document.querySelectorAll(".slide");

slide.forEach((slide) => {
    slide.style.display = "none";
});
slide[0].style.display = "block";

let slideNo = 0;

function pre(value) {
    slide[slideNo].style.display = "none";
    slideNo += value;
    if (slideNo == slide.length) {
        slideNo = 0;
    }
    if (slideNo < 0) {
        slideNo = slide.length - 1;  
    }
    slide[slideNo].style.display = "block";
}




let btn_white = document.getElementById("btn_white");
let btn_purple = document.getElementById("btn_purple");
let btn_blue = document.getElementById("btn_blue");
let btn_pink = document.getElementById("btn_pink");

let content = document.getElementsByClassName("content")[0];
let heading = document.getElementsByClassName("heading")[0];
let image = document.querySelector("#picture img");

//button nin size click krta vdharva and pachhi normal krva
let buttns = document.querySelectorAll(".header_btns button");

function removeBtnSize() {
    buttns.forEach((button) => {
        button.classList.remove("active");
    });
}

btn_white.addEventListener('click', () => {

    removeBtnSize();
    btn_white.classList.add("active");

    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    image.style.border = "2px solid black";
    heading.style.backgroundColor = "rgb(110, 110, 110)";
});

btn_purple.addEventListener('click', () => {

    removeBtnSize();
    btn_purple.classList.add("active");

    document.body.style.backgroundColor = "rgba(184, 0, 230, 0.25)";
    document.body.style.color = "rgb(187, 60, 219)";
    image.style.border = "2px solid rgb(187, 60, 219)";
    heading.style.backgroundColor = "rgb(187, 60, 219)";
});

btn_blue.addEventListener('click', () => {

    removeBtnSize();
    btn_blue.classList.add("active");

    document.body.style.backgroundColor = "rgba(30, 143, 255, 0.38)";
    document.body.style.color = "dodgerblue";
    image.style.border = "2px solid dodgerblue";
    heading.style.backgroundColor = "dodgerblue";
});

btn_pink.addEventListener('click', () => {

    removeBtnSize();
    btn_pink.classList.add("active");

    document.body.style.backgroundColor = "rgba(226, 88, 157, 0.46)";
    document.body.style.color = "rgb(243, 47, 145)";
    image.style.border = "2px solid rgb(243, 47, 145)";
    heading.style.backgroundColor = "rgb(243, 47, 145)";
});

function themeChnage(color1, color2) {
    document.body.style.backgroundColor = color1;
    document.body.style.color = color2;
    image.style.border = `2px solid ${color2}`;
    heading.style.backgroundColor = color2;
}
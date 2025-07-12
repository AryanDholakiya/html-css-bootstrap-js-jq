let btn = document.getElementById("btn");
let popDIV = document.getElementById("popup");
// console.log(popDIV);
// let popUp = document.getElementsByClassName("popupText")[0];  //we can use the querySelector or give id in html instead calss
// let para = document.getElementsByClassName("para")[0];
// console.log(para.innerHTML);


let popUp = document.querySelector(".popupText");  //we can use the querySelector or give id in html instead calss
let para = document.querySelector(".para");
console.log(para);

// let closeBTN = document.getElementById("closePopUp");

btn.addEventListener('click', () => {
    popUp.innerHTML = para.innerHTML;

    popDIV.style.visibility = "visible";
    document.body.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8))";
});

function closePOPUP() { //here we can't take function name as 'close()' because close() is is built-in browser function
    popDIV.style.visibility = "hidden";
    document.body.style.backgroundImage = "none";
}

//another way to close pop up
// closeBTN.addEventListener("click", () => {
//     popDIV.style.visibility = "hidden";
//     document.body.style.backgroundImage = "none";
// });
let heading = document.getElementById("heading");

let para = document.getElementById("para");


//Text/Content બદલવું:
heading.innerHTML = "<h1>Namaste world, Understandind DOM,hover on this to see title added using js</h1>";
para.innerText = "This is the changed using innnertext";


//Style બદલવો:
heading.style.color = "green";
para.style.fontStyle = "italic";


//Event Handling
let btn = document.getElementById("btn");

btn.addEventListener('click', () => {
    alert("Button with id 'btn' is pressed.");
    btn.innerText = "button was pressed.";
    btn.style.color = "red"
});


//New Element બનાવવું અને DOM માં ઉમેરવું
let newEle = document.createElement('h1');

newEle.innerHTML = "This h1 tag is made using js DOM.";
console.log(newEle);
document.body.appendChild(newEle);

// document.body.appendChild(document.createElement('p').innerHTML = 'helloooooooo');
//we can't do like this: bcz at the end we are doing like : document.body.appendChild('helloooooooo');



//remove element:
// newEle.remove(); // //this removes the 'newEle'



//replace element:
let anotherNewEle = document.createElement('h4');
anotherNewEle.innerText = "this h4 is replaced with something";

newEle.replaceWith(anotherNewEle);





//Manipulating Attributes :advanced
heading.setAttribute('title', 'title on this heading is added by "setAttribute"');





// Forms and Input Handling
document.getElementById("btn2").addEventListener('click', () => {
    let innersidetext = document.getElementById("input").value;
    alert("your name is :" + innersidetext); //alert("your name is :", innersidetext) alert ma aam NAA chaale
});
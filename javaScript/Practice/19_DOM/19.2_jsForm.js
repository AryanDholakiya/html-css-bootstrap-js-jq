let formval = document.forms['form'];
let info = "";
// console.log("type: ", typeof formval); //object

submitbtn.addEventListener('click', () => {
    for (let i = 0; i < formval.length; i++) {
        info += formval[i].value + " ";
    };
    document.getElementById("values").innerHTML = info;
});


//HTML object collections

console.log("Number of link in html page: ", document.links.length); //1
console.log("Number of anchors are: ", document.anchors.length); //3

//Finding HTML Elements Using document.forms
console.log("Finding HTML Elements Using document.forms:", document.forms);

console.log("title :", document.title);


// document.write("helloo");   : no refer to use
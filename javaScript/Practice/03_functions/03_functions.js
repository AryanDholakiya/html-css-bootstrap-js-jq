// Function to compute the product of p1 and p2
function funcProdOfTwo(item1, item2) {
    return item1 * item2;
}

let ProductOfTwoNums = funcProdOfTwo(2, 4);

document.getElementById("ProductOfTwo").innerHTML =
    "This is a product of Two Numbers: " + ProductOfTwoNums;
// console.log("ProductOfTwo : ", ProductOfTwoNums);




// function that converts from Fahrenheit to Celsius
function ToCelsius(f) {
    return (5 / 9) * (f - 32);
}

let convertInCelc = ToCelsius(77);

document.getElementById("FtC").innerHTML =
    "We changed the fahrenheight to celsious: " + convertInCelc;

console.log("Special: ", convertInCelc);



// local variables in functions

let non = "outside of function: " + typeof CarName;
document.getElementById("localVarOutside").innerHTML = non;


function LocalVar() {
    let CarName = "Land Rover";
    document.getElementById("localVarInside").innerHTML = "Inside of function: " + typeof CarName + " " + CarName;
}

LocalVar();






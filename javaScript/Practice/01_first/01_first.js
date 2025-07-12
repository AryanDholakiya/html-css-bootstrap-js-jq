const accountNo = 123312;
let accontholder = "abc";
var accontState = "gujarat";

console.log("Account Number is: ", accountNo);
// accountNo = 11212;
//prints the upper statement but gives error after it because we're trying to assign the new value into the constant.

console.log("upper statement shows the error");
//this statement will not going to show on the console untill we solve the error.

console.log("");

let accountName;
console.log(accountName);

console.table([accountNo, accontholder, accontState, accountName]);

console.log(
  "-----------------------------------------------------------------------"
);

// <!-- change the style using the js -->

// document.getElementsByClassName("demo2").style.fontSize = "20px";
//this statement will throw an error because it will be confused between the classList array..beacause it understand and takes the class as an aray so we have to specify the array index of that class number like below.
// hence, we have to use the id. we can use the "querySelector option method also"

document.getElementsByClassName("demo2")[0].style.fontSize = "20px";
// document.querySelector(".demo2").style.fontSize = "25px"; // this will also works.

// <!-- interesting thing: -->

let z = "5";
// If you put a number in quotes, the rest of the numbers will be treated as strings, and concatenated.
let y = 6;
let x = 3;

console.log(
  "sum of all the variables are: ",
  z + x + y,
  " we should have to note that 5 is a string"
);
//o/p : sum of all the variables are:  536  we should have to note that 5 is a string

console.log(
  "see he difference between the previous and this console output: ",
  x + y + z
); //o/p: 95

// <!--Functions in js  -->

function myfunction() {
  document.querySelector("#functionText").innerHTML =
    "this Text is changed using the function method";
}

//  <!-- difference between innerHTML and innerText -->

document.getElementById("difference").innerHTML = "<h1>using innerHTML</h1>";

document.getElementById("difference2").innerText = "using the innerText";

// document.write("This is using the document.write");
// document.write("This is using the document.write");
// document.writeln("hellooo");
// document.writeln("world");

//there is no any change i had seen in write and wrieln.

// variable without data type

withoutVar = "hellllllooooo";
console.log("variable without data type:", withoutVar);

// <!-- variaables in js: -->

let a = 5;
let b = 6;
const c = a + b;
console.log("value of c is : ", c);

// another example

let carName = "mahindra";
let modelName = "BE-6e";

let car = carName + " " + modelName;
document.getElementById("carExample").innerHTML = car; //screen pr show thy ena mate.
console.log("i will buy the", car, "one day."); // console ma show thy ena mate

// <!-- hoisting is possible if we use "var" keyword. but if we try to do same thing with "let" then it will show "Reference error"
//
// "const" also shows the same error
//
// -->

hoistingUsingVar = 50;
var hoistingUsingVar;

console.log("hoisting using var: ", hoistingUsingVar);

document.getElementById("hoisting").innerHTML =
  "hoisting using var keyword, " + hoistingUsingVar;

//example using let:

// hoistingusingLet = 60;
// let hoistingusingLet;
// console.log(hoistingusingLet);

// gives error like this: " Uncaught ReferenceError: Cannot access 'hoistingusingLet' before initialization"

//understand that : if we are using the "const" then we must have to initialize the variable with the declaration.
// this is not acceptable: const PI;
// PI = 3.14;

//but we can do these things with using let and const.

const PI = 3.14;
console.log("'const' declarations must be initialized: ", PI);

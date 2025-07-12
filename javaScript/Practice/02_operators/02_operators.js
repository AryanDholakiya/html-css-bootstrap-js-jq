let a = "hello";
a += ", how are you?";

console.log(a);

// -------------------

let text1 = "20";
let text2 = "5";
let result = text1 < text2;
// document.getElementById("demmo").innerHTML = "Is 20 less than 5? " + result;

console.log(result); // o/p ; false
//bcz ahiya e lexicographically comparision krse..
//it compares the unicodes of given number's string. and give result ...serach for it
//unicode value of "2" is 50 and unicode value of "5" is 53 to 50 < 53 is true then we got result true.(check the unicode value of number 0 to 9)

console.log("-----------------Arithmetic Operators----------------------");

let x = 100 + 500;
console.log("+(Addition):100 + 500 = ", x);

let y = x * x;
console.log("*(Multiplication): 600*600 = ", y);

let z = 5 % 3;
console.log("5  % 3 means that 3 / 5 that gives remider : ", z);

let division = 12 / 5;
console.log("12 / 5 = ", division); // gives 2.4 output

//Exponentiation Assignment operator (**)
// sidhi sidhi bhasa ma ** means "ghat".

let p = 5;
let expo = p ** 2; // it means 5 ni 2 ghat // it produces the same result as "Math.pow( , )""
console.log("5 ** 2 : ", expo);

//Math.pow( , )
let q = 25;
let pow = Math.pow(25, 2); // it means 25 ni 2 ghat
console.log("Math.pow(25, 2) : ", pow);

//PRECEDENCE of Arithmetic Operators:            ()     >     **     >      *, /, %      >         +, -

let preceEx1 = ((2 * 6) / 5) * 2 + 10 - (3 % 2);
console.log("Example of of precedence of operators: ", preceEx1);

let BigIntEX = 20002200002000002222222222n;
console.log(typeof BigIntEX); // if you put 'n' at the end of the number then it gives type "bigint" otherwise "number"

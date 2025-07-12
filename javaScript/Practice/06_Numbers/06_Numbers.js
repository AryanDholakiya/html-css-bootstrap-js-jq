// js accepts the number with or without decimal.

let num1 = 12e5;
let num2 = 12e-5;
console.log(num1);//1200000
console.log(num2);//0.00012


//Floating Precision:

let x = 0.3 + 0.4;
console.log(x)

//NOTE: js ma "+" operator sivaay, jo 2 numbers in a string aapela hoi to js tene "-", "*" ,"/" krta pehla string mathi number ma convrt krv try krse and then e subs, multipli and division krse.

let KingNum1 = "10";
let KingNum2 = "20";

console.log("addition of numbers which re in string: ", KingNum1 + KingNum2);
console.log("Substraction of numbers which re in string: ", KingNum1 - KingNum2);
console.log("Multiplication of numbers which re in string: ", KingNum1 * KingNum2);
console.log("Division of numbers which re in string: ", KingNum1 / KingNum2);


let addi1 = 10;
let addi2 = 20;
let addi3 = "30";
let addi4 = 30;
console.log("addi1,addi2,addi3 Addition : ", addi1 + addi2 + addi3);
//ahiya e pela addi1 and addi 2 no srvalo thy , pachhi string aave etle merge thy jai

console.log("division multiplication and substraction ma ek number ane ek number string ma hoi to pn output brbr aave: ", addi2 / addi3);


//Trying to do arithmetic with a non-numeric string will result in NaN (Not a Number)

let A = 10;
let B = "apple";
console.log("Trying to do arithmetic with a non-numeric string will result in NaN: ", A / B);


//You can use the global JavaScript function isNaN() to find out if a value is a not a number

let checkNaN = isNaN(A / B);
console.log(checkNaN);


// NOTE : The typeof NaN is number


//Number.isInteger method: The Number.isInteger() method returns true if the argument is an integer.


console.log("isInteger method: ", Number.isInteger(A));

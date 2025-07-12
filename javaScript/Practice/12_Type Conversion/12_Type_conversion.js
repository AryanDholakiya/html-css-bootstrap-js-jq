// Converting strings to Numbers

let name = "joy";
console.log("convert string to number:", Number(name)); //NaN

let PI = Math.PI;
console.log("converting PI value to Number:", Number(PI)); //3.14

let PIstring = "3.14";
console.log("converting the string number to nnumber:", Number(PIstring)); //3.14

let note = "33 10";
console.log("converting the string number to nnumber NOTE:", Number(note)); //NOTE : NaN

let emptystring = "";
console.log("converting the empty string into number: ", Number(emptystring)); //0

//another methods:
let num10 = 200;
console.log("using parseInt:", typeof parseInt(num10));
console.log("using parseFloat:", typeof parseFloat(num10));





//Converting Numbers to Strings
let num1 = 10;
let tostr = String(num1);
console.log("Converting Numbers to Strings:", String(tostr));
console.log("typeof num1:", typeof tostr);  //number

//another method;
let usingtoString = 20;
console.log("Before conversion:", typeof usingtoString);
let another = usingtoString.toString();
console.log("After conversion:", typeof another);


console.log('implicit type conversion: ', typeof ('5' + 3)); //automatically convert it to string;
console.log('implicit type conversion: ', ('5' + 3)); //automatically convert it to string;


//Boolean conversion:
console.log("boolean conversion of 0: ", Boolean(0));
console.log("boolean conversion of 1: ", Boolean(1));
console.log("boolean conversion of 'hello': ", Boolean("hellllooo"));
console.log("boolean conversion of empty string': ", Boolean(""));
//NOTE:          0, "", null, undefined, NaN  : Boolean value : false 




// Converting Dates to Numbers
let dt = new Date();
console.log("Converting Dates to Numbers: ", Number(dt)); //milliseconds ma ans

//to string
console.log(typeof new Date());
console.log("converting date to string: ", typeof String(new Date()));





// Converting Booleans to Strings
console.log("Converting Booleans to Strings:", String(false)); // "false"





//NOTE:

console.log("5 + null:", 5 + null); //5 return krse bcz 'null' 0 ma convert thy jse.
console.log("'5' + null:", '5' + null); //'5null' return krse bcz '5' and null is converted to "null". 
console.log("'5' + 2:", '5' + 2); //52
console.log("'5' + 2:", '5' - 2); //NoTE //3 //because 2 is converted to "2"
console.log("'5' * 2:", '5' * '2'); //10
console.log("'5' * 2:", '5' * 2); //10
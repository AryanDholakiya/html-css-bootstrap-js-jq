//toString() method:

let A = 1000;
console.log("typeOf A before applying toString: ", typeof A);

console.log("typeOf A AFTER applying toString: ", typeof (A.toString()));



//toExponential() Method : returns a string, with a number rounded and written using exponential notation

let b = A.toExponential(); //1e+3
console.log("Exponential :", b);

let c = A.toExponential(2);
console.log("Exponential :", c);

let d = A.toExponential(5);
console.log("Exponential :", d);






//toFixed method:

let fortoFixed = 8.23223;
console.log("toFixed(0): ", fortoFixed.toFixed(0)); //toFixed ma 0 aapie to e round off kri dese

console.log("toFixed(2) type check: ", typeof (fortoFixed.toFixed(2))); //string ma fervi nakhe aa method.
console.log("toFixed(2): ", fortoFixed.toFixed(2));
console.log("toFixed(6): ", fortoFixed.toFixed(6));
console.log("toFixed(10): ", fortoFixed.toFixed(10));




//Number method: Number() method can be used to convert JavaScript variables to numbers.
let spe = "12";
let converted = Number(spe);
console.log("type of spe after using the Number method:", typeof converted);


let any = Number("hello");
console.log("Number method: ", typeof (any));
console.log("Number method: ", typeof (Number("11")));
console.log("Number method: ", typeof (parseInt("12")));
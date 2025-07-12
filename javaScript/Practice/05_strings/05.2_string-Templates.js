// Template Strings use back-ticks (``) rather than the quotes ("") to define a string:

let str1 = `This is a string , written in bck-ticks.`;
console.log(str1);


// Template Strings allow both single and double quotes inside a string

let str2 = `'single' and "double" quotes are allowed in back-ticks"`;
console.log(str2);


//interpolation: template string provides the 'string interpolation'.

//Automatic replacing of variables with real values is called string interpolation.


let f_name = 'hello';
let l_name = 'world';

console.log("writing full name using interpolation: ", `${f_name} ${l_name}`);


//another example:


let price = 12.3;
let thing = 0.60;

let result = `the multiplication Result of the given variables is ${(price * (2 + thing)).toFixed(3)}`;
// .toFixed : .(point) pachhi ketla aankda joie 6 ena mate use thy ... we can also use the Math.round() pn ema specific decimal number na aave te round off kri ne ans aape.
console.log(result);
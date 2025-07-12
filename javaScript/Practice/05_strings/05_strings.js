let a = "This is string";
document.getElementById("firstEx").innerHTML = "this is a simple example of string: " + a;


let b = "this how we can use the 'quotes' inside quotes.";
document.getElementById("SecondEx").innerHTML = "You can use quotes inside a string, as long as they don't match the quotes surrounding the string : --- " + b;


let c = `This string is written inside the Template literals. we can freely use any kind of QUOTES in this.`
document.getElementById("thirdEx").innerHTML = c;


let d = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
let lengthofString = d.length;
document.getElementById("fourthEx").innerHTML = "length of given string is : " + lengthofString;


let e = "Escape sequence are usefull when we want to use the \'single\' or \"double \" quoted word or want to use any other word then it is useful. "
let f = "another example \/ "
document.getElementById("fifthEx").innerHTML = e;
document.getElementById("fifthEx").innerHTML = f;
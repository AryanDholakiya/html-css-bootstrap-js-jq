//Object Destructuring

let obj1 = {
    name: "hello",
    age: 10
};

// let {name,age} = obj1;
// console.log(name);

//Object Default Values
// let {name, age, country = "india"} = obj1;
// console.log(country);


// Object Property Alias
let { name: fname, age } = obj1;
console.log(fname);



//Array Destructuring
let arr1 = ["apple", "banana", "cherry"];
let [fruit1, fruit2] = arr1;

console.log(fruit1);

//skipping array value:
let [f1, , f3] = arr1;
console.log(f3); //cherry



let arr2 = ['fortuner', 'seltos', 'harrier', 'altroz', 'Thar', 'swift', 'ferari'];
let { [2]: item1, [3]: item2 } = arr2;
console.log(item1);


let [value1, value2, ...rest] = arr2;
console.log(rest);



//reg expression

let ExOfreplace = "In this string 'THIS' word is replaced THIS.";
let replacedSTR = ExOfreplace.replace(/THIS/i, "SPECIAL"); //bdha this ne 
let replacedSTR2 = ExOfreplace.replaceAll(/THIS/g, "SPECIAL"); //note the difference
console.log("This is the replaced string : ", replacedSTR);
console.log("This is the replaced string : ", replacedSTR2);

let matchEx = "the rain in SPAIN";
console.log("match method: ", matchEx.match("ain"));
//[ 'ain', index: 5, input: 'the rain in SPAIN', groups: undefined ]

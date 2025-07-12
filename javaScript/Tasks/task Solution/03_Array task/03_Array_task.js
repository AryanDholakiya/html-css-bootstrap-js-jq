let arr = [1, 3, "Test", 0, "", -1, null, undefined, "Hello World", "hello", "workd", 54, false, true, "-0", "null"];


// 1. Get all the number from array:

let txt = [];
for (let i of arr) {
    if (typeof i === "number") {
        // console.log(i);
        txt.push(i);
    }
};
// document.getElementById("que1").innerHTML = txt;
console.log("Get all the number from array:", txt);





//2. Get all the string from array:
let txt2 = [];
for (let i of arr) {
    if (typeof i === "string") {
        txt2.push(i);
    }
};
// document.getElementById("que2").innerHTML = txt2;
console.log("Get all the string from array:", txt2);




//3. Get all falsy values from array:
let txt3 = [];
for (let i of arr) {

    if (!i) {
        txt3.push(i);
    }
};
// document.getElementById("que3").innerHTML = txt3;
console.log("Get all falsy values from array:", txt3);




//4.Get all truthy values from array
let txt4 = [];
for (let i of arr) {
    if (i) {    //by default 0, undefined, null, '' and, false => a bdhi value ni condition if mate false thse etle loop ma jse j nai
        txt4.push(i);
    }
};
console.log("Get all truthy values from array:", txt4);


//5. Get sum of all numbers in array:
let sum = 0;
for (let i of arr) {
    if (typeof i === "number") {
        sum += i;
    }
};
console.log("Get sum of all numbers in array:", sum);




// 6. Get all NAN values:
let txt6 = [];
for (let i of arr) {
    if (isNaN(i)) {   //NOTE
        txt6.push(i);
    }
};
console.log("Get all NAN values:", txt6);





//7. Get all values which includes "e":

let txt7 = [];
for (let i of arr) {
    if ((typeof i === "string" && i.includes("e"))) { //NOTE  
        txt7.push(i);
    }
};
console.log("Get all values which includes 'e':", txt7);





//8. Get all values ends with "d":
// let arr = [1, 3, "Test", 0, "", -1, null, undefined, "Hello World", "hello", "workd", 54, false, true, "-0", "null"];
txt8 = [];
for (let i of arr) {
    if (typeof i === "string" && i.endsWith("d")) {
        txt8.push(i);
    }
}
console.log("Get all values ends with 'd':", txt8);

//another method:
// result = arr.filter(word => word.endsWith('d') ); gives error:TypeError: word.endsWith is not a function
// at 03_Array_task.js:106:34
// at Array.filter (<anonymous>)
// at 03_Array_task.js:106:14
//error because not all elements in your array are strings—some are numbers, booleans, null, undefined, etc., and only strings have the .endsWith() method.

result = arr.filter(word => typeof word === "string" && word.endsWith('d'));
console.log("result:", result);










//9. Count number of falsy values:
let countOfFalsy = 0;
for (let i of arr) {
    if (!i) {
        countOfFalsy++;
    }
}
console.log("total number of falsy value in array:", countOfFalsy);
//adding method in the object:
const student = {
    firstname: "hello",
    lastname: "world",
    id: 2100,
};

student.firstMethod = function () {
    return (this.firstname + " " + this.lastname).toUpperCase();
};

console.log("This is the fullname, which is done using the object method: ", student.firstMethod());

//another object

const object2 = {
    fname: "hello",
    lname: "world",
    age: 21,
}
console.log("specific only values of the object: ", Object.values(object2));
let special = Object.values(object2);
console.log("special type : ", typeof (special)); // array avvu joie // but it shows  object

document.getElementById("getvalues").innerHTML = "Getting only the values of the object: " + Object.values(object2);

console.log("only keys/properties of the object: ", Object.keys(object2));
document.getElementById("getkeys").innerHTML = "Getting only the values of the object: " + Object.keys(object2);




// dispaying properties in loop:

let emptyStringKeys = "";  //getting only the keys . 

for (let i in object2) {
    emptyStringKeys += i + " ";  //NOTE
}

console.log("getting only the keys from the Object2: ", emptyStringKeys);

let emptyStringVals = ""; //getting only values

for (let x in object2) {
    emptyStringVals += object2[x] + " "; //NOTE
}
console.log("getting only the values from the Object2: ", emptyStringVals);





//get the keys and value both at a same time

let getBoth = "";
//object.entries no use key and value bnne get krva thy 
for (let [keys, values] of Object.entries(object2)) {  //try to change "of" with "in", we get only keys not value
    getBoth += keys + ":" + values + ",";
}

console.log("getting both keys and values of object2: ", getBoth);



//use JSON.stringify instead of using the Object.entries();

console.log("Using the JSON.srtringify: ", JSON.stringify(object2));





//object Constructor:

// Sometimes we need to create many objects of the same type.
// To create an object type we use an object constructor function.
// It is considered good practice to name constructor functions with an upper-case first letter.

function ObjectConstructor(fname, lname, age) {
    this.fname = fname;
    this.lastname = lname;
    this.age = age;
    this.nationality = "indian";  //default property in object constructor
    this.fullname = function () {
        return (this.fname + " " + this.lastname)
    }
}

//now we can create multiple objects:

const newobject1 = new ObjectConstructor("abc", "bcd", 21);

console.log("value from the new object: ", newobject1.fname);
console.log("value from the new object: ", newobject1.lastname);
console.log("value from the new object: ", newobject1.age);
console.log("value from the new object: ", newobject1.nationality);


console.log("full name from the method of objectConstructor: ", newobject1.fullname());

// Now we can use new Person() to create many new Person objects

const myNewObj = new ObjectConstructor('hello', 'india', 300);

myNewObj.getFullname = function () {
    return ("Getting full name only from the sub object: " + this.fname + this.lastname);
}

myNewObj.language = "hindi";
console.log("language : ", myNewObj.language);

console.log(myNewObj.getFullname());

// delete myNewObj.getFullname(); //a delete krva chhta use kri skay 6 inshort delete thti nathi property if eni andr method bnaveli hoi.

// If you wanted to actually delete the method, you'd do : gpt
// delete myNewObj.getFullname;


delete myNewObj.age;

console.log("deleted property from he myNewObj : ", myNewObj.age);
console.log("This is after the deleting property:", myNewObj.getFullname());



//globally property add krva mate , you have to use prototype.. so main object prthi bnavela bdha j object ma pn e property add thy jse.


ObjectConstructor.prototype.mothertounge = "gujarati"; //remove prototype and see the output of given log below

console.log("prototype na use thi bdha sub object ma property add thy jse: ", myNewObj.mothertounge);




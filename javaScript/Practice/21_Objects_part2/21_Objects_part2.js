//initializing the objects: method 1
let obj1 = {
    fname: "abc",
    lname: 'bcd',
}

//initializing the objects: method 1
const obj2 = new Object();
obj2.fname = "abc";
obj2.lname = 'bcd';

//object constructor : also called object prototype

function person(fname, lname, age, profession) {
    this.firstname = fname,
        this.lName = lname,
        this.PersonAge = age,
        this.work = profession
    this.nationality = "Indian"; //default : we don't need to define this like other propeties
}

let person1 = new person("abc", "bcd", 51, "worker"); ///note this

console.log(person1.firstname);
console.log("fullname is :", person1.firstname + " " + person1.lName + "," + " nationality is: " + person1.nationality);
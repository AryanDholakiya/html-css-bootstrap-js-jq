"use strict";
console.log(this);
function example() {
    console.log(this);
}

example();


//another

let obj = {
    name: "abc",
    lname: "bcd",
    age: 21,
    designation: "intern",
    getfullname: function () {
        return this.name + this.lname;
    }
};
console.log("full name from obj is: ", obj.getfullname());



//understand the this keyword with bind method

const obj2 = {
    fname: "hello",
    lname: "world",
    age: 21,
    fullname: function () {
        return this.fname + this.lname;
    }
};

const obj3 = {
    fname: 'namaste',
    lname: 'world'
};

let anotherfullname = obj2.fullname.bind(obj3);
console.log("this keyword with bind method:", anotherfullname());
//Object.assign() method:  used to merge the 2 objects or overwrite their values.

//ex:1
const target = { a: 1 };
const source = { b: 2, c: 3 };

const returnedTarget = Object.assign(target, source);

console.log(returnedTarget); // { a: 1, b: 2, c: 3 }
console.log(target);


//ex:2
const myObj = {
    fname: "hello",
    lname: "world",
}

const myNewObj = {
    age: 21,
    fname: "namaste"
}
let assignVariable = Object.assign(myObj, myNewObj);
console.log("value after using the assign() method: ", assignVariable);



//Object.create() method :  Object.create() is often used for inheritance — the new object inherits from the given prototype.

const parent = {
    greet() {
        console.log(`Hello, How are you ${this.name}`);
    }
};
const child = Object.create(parent);

child.name = "john";
child.greet();






// Object.defineProperties() Method : Advanced control over property behavior (writable, enumerable, configurable, getter/setter).


const Person = {
    fname: "helloo",
    lname: "world",
}

Object.defineProperties(Person, {
    fname: { value: "helloowww" },
    lname: { value: "world!" },
    age: { value: 21 },
});

console.log("we can edit or add the new properties using the Object.defineProperties!:", Person.age + " " + Person.fname + " " + Person.lname); //note ahiya object.defineproperties ma je value 6 e print thse.

//we use this method for , Lock down certain properties (e.g., make them read-only).

//ex:2 
const person2 = {
    firstname: "abc",
    lastame: "bcd",
    age: 24,
};

Object.defineProperties(person2, {
    firstname: {
        value: "Alice",
        writable: false,
        enumerable: true,
        configurable: true,
    },
    age: {
        writable: true,
        enumerable: true,
        configurable: true,
    }
})

// writable – can the value be changed?
// enumerable – will it show up in loops like for...in?
// configurable – can the property be deleted or changed?

console.log("this is the 2nd example of the defineProperties(): ", person2.firstname);
//here the output will be: Alice , because we changed it into the defineproperties, but further we can not change the firstname because of "writable: false".
// instead we can change the age outside the define properties because we gave "writable: true,".

console.log("age of person2 before we changed it: ", person2.age);

person2.age = 35;

console.log("age of person2 AFTER we changed it: ", person2.age);




//Object.define() Method: This method defines or modifies a single property on an object.

const object3 = {
    hobby: "dance",
    language: "hindi"
}

Object.defineProperty(object3, "hobby", {
    value: "singing",
    writable: true,
    enumerable: true,
    configurable: true
});

console.log("value of hobby in defineProperty:", object3.hobby);




//Object.entries() Method

const object4 = {
    f_name: "ehhey",
    l_name: "ooohooo",
    age: 21
}
console.log("Object.Entries: ", Object.entries(object4));

//entries using loop:
console.log("entries using loop:");

for (let [key, val] of Object.entries(object4)) {
    console.log(`${key} : ${val}`);
}


//Object.freeze() Method : Object.freeze() freezes an object, meaning it prevents any changes to that object. Once an object is frozen : You can't add new properties, You can't remove existing properties, You can't modify existing properties, You can't reconfigure property descriptors

const object5 = {
    name: "abd",
    surname: "villiam",
    age: 50
}

Object.freeze(object5);

object5.name = "hello", //value will not not change to this.
    object5.age = 32;
console.log("after freezing the object5 we can't change the value: ", object5.name, object5.age);



//understanding the events:


function showdate() {
    document.getElementById("events").innerHTML = Date();
}



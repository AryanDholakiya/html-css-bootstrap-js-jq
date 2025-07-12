class car {
    constructor(name, model) {
        this.name = name;
        this.model = model;
    }
}

let car1 = new car("harrier", 2025);
let car2 = new car("curvv", 2024);

console.log("name of car1:", car1.name);
console.log("model of car2:", car2.model);

//example 2:

class Bike {
    constructor(name, model) {
        this.name = name;
        this.model = model;
    }
    age() {
        let year = new Date();
        let age = year.getFullYear() - this.model;
        return age;
    }
}

let bike1 = new Bike("bullet", 2020);

console.log(`i have a ${bike1.name} and it is ${bike1.age()} years old.`);


//inheritance example :

class Parent {
    constructor(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }
    showFullname() {
        return this.name + " " + this.surname;
    }
};

class Child extends Parent {
    constructor(name, surname, age) {
        super(name, surname, age)
        this.name = name;
        this.age = age;
    }
};

let child1 = new Child('hello', 'rathod', 50);
console.log(child1.showFullname());


// You can use the underscore character to separate the getter/setter from the actual property


class Backery1 {
    constructor(item1, item2) {
        this._cake = item1;
    }
    get cakename() {
        return this._cake;
    }
    set setcakename(x) {
        return this._cake = x;
    }
}

let cake1 = new Backery1("chocolate cake");
console.log(cake1.cakename);
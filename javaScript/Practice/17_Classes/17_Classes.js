class myclass {
    constructor(myname, age) {
        this.name = myname;
        this.age = age;
        console.log("my name and age from constructor:", this.name + " and " + this.age);
    }
}
const myobj1 = new myclass("abcd", 21);
const myobj2 = new myclass("wxyz", 24);




//methods in class example.

class bike {
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }
    BikeAge() {
        let currentdate = new Date();
        let age = currentdate.getFullYear() - this.year;
        console.log(`Bike ${this.model} is: ${age} years old.`);
    }
}

let Honda = new bike("Activa", 2021);
Honda.BikeAge();

let Hero = new bike("Splendour", 2023);
Hero.BikeAge();




//getter and setter:

class Account {
    constructor(balance) {
        this.abc = balance;   // we have to take diffferent name like this.abc..other wise it gives error like :at set balance [as balance] (E:\aryan\javaScript\Practice\17_Classes\17_Classes.js:52:26) ......if we take this.balance = balance
    };

    get balance() {
        return this.abc;
    }
    set balance(amount) { //set method ne 1 parameter hoi j
        if (amount < 0) {
            console.log("balance will remain same.");
        }
        else {
            this.abc = amount;
        }
    }
}

let objacc1 = new Account(3000);
console.log("objacc1 balance:", objacc1.balance);

objacc1.balance = -6;
console.log(objacc1.balance);
objacc1.balance = 20;
console.log(objacc1.balance);


//modules in js
import { add, mul } from './17.1_Classes2.js';
console.log("This is the output from the another js module file:", add(2, 3));

mul(2, 3);  

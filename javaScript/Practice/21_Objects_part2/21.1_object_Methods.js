// 1. Object.assign() :  Object.assign(target, source)

let person1 = {
    firstname: "abc",
    lastname: "bcd",
    age: 21
};

let person2 = {
    firstname: "helllow",
    lastname: "cazzzz",   //these properties name should be same for the Object.assign() method.

    say_Hi: function () {     // old method 
        console.log('Hiii');
    },
    say_Hello() {
        console.log("hellooo");
    }
}

Object.assign(person1, person2);  //both object's property name should be same, no of properties same nai hoi to chalse.

console.log("firstname and lastname is changed because of the Object.assign():" + " " + person1.firstname + " " + person1.lastname)




// બે object merge કરવા માટે. : Object.assign()
let child1 = {
    age: 10,
    std: 5
};
let child2 = {
    age: 11,
    std: 6
};
let children = Object.assign(child1, child2); //here merrging is not posibble because properies value is same so properties of child 2 assign to the child1.
console.log(child1.age);
console.log(children);

//see here we are merging the 2 objects
let obj1 = {
    a: 1
};
let obj2 = {
    b: 2
};
let merged = Object.assign(obj1, obj2);
console.log(merged);







// 2. Object.keys()
console.log("person2 Object.keys:", Object.keys(person2)); //array of keys of person2.
console.log("person1 Object.keys:", Object.keys(person1));
console.log("person1 Object.keys:", Object.keys(person1)[0]);


// 3. Object.values()
console.log("person2 Object.values", Object.values(person2));
console.log("person1 Object.values", Object.values(person1)); //['helllow', 'cazzzz', 21, ƒ, ƒ]
console.log("person1 Object.values", Object.values(person1)[3]);

//4. Object.entries()
console.log("person1 Object.entries", Object.entries(person1)); //array of array of key value pairs


// 5. Object.freeze(obj)
let freezedObj = {
    name: "abc"
};
Object.freeze(freezedObj);
freezedObj.name = "bcd";

console.log("Name remains same because of freeze method:", freezedObj.name);



// 6. Object.seal(obj)  :   properties add/delete નહિ કરી શકાય, પણ values change કરી શકાય.
let sealedObj = {
    Bike: "Bullet 350",
};

Object.seal(sealedObj);
sealedObj.modal = "2025";
console.log("cant add/remove the properties:", sealedObj.modal);// undefined because of seal

delete sealedObj.Bike;
console.log("cant delete the properties:", sealedObj.Bike);

sealedObj.Bike = "GT 650";
console.log("can only change the value:", sealedObj.Bike);




//real-life example :

let BankAccount = {
    name: "abc",
    current_Balance: 1000,

    deposite(amount) {
        this.current_Balance += amount;
        return "After Deposite Money Now your Total Balance: " + this.current_Balance;
    },

    withdraw(amount) {
        if (amount > this.current_Balance) {
            return "Khaali hai kese du? thodi km amount dalke try krr.";
        }
        else {
            this.current_Balance -= amount;
            return "After withdrawal Money Now your Total Balance:" + this.current_Balance;
        }
    }


};
console.log(BankAccount.deposite(2000));
console.log(BankAccount.withdraw(4000));



//using for...of loop to print the keys and value together;
let fruits_and_prices = {
    apples: 140,
    mangoes: 150,
    kiwi: 200,
    dragonfruit: 300
}

for (let [fruit, price] of Object.entries(fruits_and_prices)) {
    console.log(fruit + ":" + price);
    console.log();
}


//for...in loop
for (let i in fruits_and_prices) {
    console.log(fruits_and_prices[i]);
}




//properies of objects:

let properies_obj = {
    car: "Harrier",
    model: "2025"
}

//adding a property
properies_obj.price = 2300000;
console.log(properies_obj.price);

//updating property

properies_obj.car = "Altroz";
console.log(properies_obj.car);
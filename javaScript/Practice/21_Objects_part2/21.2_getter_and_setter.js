let student = {
    fname: "abc",
    lname: "def",

    get getfullname() {
        return this.fname + " " + this.lname;
    },


    set fullname(name) {
        let nameParts = name.split(" ");
        console.log("Name parts: ", nameParts);

        this.fname = nameParts[0];
        this.lname = nameParts[1];
    }
}

console.log("old name: ", student.getfullname); //getter 

student.fullname = "hello india"; //setter : changing the name 

console.log("new name: ", student.getfullname);
console.log("student firstname:", student.fname);
console.log("student lastname:", student.lname);



//getter() example 
let person = {
    name: "heyy",
    surname: "hellow",
    age: 22,

    get Age() {
        return this.age;
    }
};

console.log("getter example : Age of person: ", person.Age);

//setter example 
let person2 = {
    name: "bsdb",
    surname: 'ngng',
    age: null,

    set Age(value) { //put get instead of set: error:- A 'get' accessor cannot have parameters.
        return this.age = value;
    }
}

console.log("setter exaple: ", person2.Age = 21);
console.log(person2.age);


//difference between js function and getter():
//function
let person3 = {
    name: "person 3",
    surname: "shah",
    age: 21,

    functionAge() {
        return this.age;
    }
}
console.log("difference between js function and getter:", person3.functionAge());

//getter
let person4 = {
    name: "person 4",
    surname: "shah",
    age: 21,

    get getAge() {
        return this.age;
    }
}
console.log("difference between js function and getter:", person4.getAge); //getter ma () na lagavva pde end ma
//if we use getter then we can access age as a property.
const myFirstObj = {
    name: "abc",
    age: 20,
    profession: "i.t"
}

document.getElementById("firstObj").innerHTML = "name property in 'myFirstObj' : " + myFirstObj.name;
document.getElementById("firstObj2").innerHTML = "age property in 'myFirstObj' : " + myFirstObj.age;


const ObjMethod = {
    firstName: "hello",
    lastName: "world",
    getFullName: function FullName() { //note this line , how we took object as property
        return this.firstName + " " + this.lastName;
    }
};

document.getElementById("ObjMethod").innerHTML =
    "Here we taken a function as a object property : " + ObjMethod.getFullName();

console.log("this is the function in console: ", ObjMethod.getFullName());

// accessing the Object properties: 2 ways 

console.log("different ways of access  property in object: ", myFirstObj.name);
console.log("different ways of access  property in object: ", myFirstObj["name"]); //note that ahiya property " " ma lkhvani hoi 

//object is call by reference:

const thirdobj = {
    fname: "abcd",
    lname: "efgh",
    age: 21
}

let thirdparty = thirdobj;

thirdparty.age = 20;

console.log("if value of thirdparty obj change: ", thirdparty.age);
console.log("value of actual obj will also change: ", thirdobj["age"]); //new pattern to access prop. note to write it in quotes



const fourthObj = {
    name: "abc",
    age: 21,
    subObj: {
        education: "i.t",
        designation: "manager"
    }
}

console.log("exaple of object of object: ", fourthObj.subObj["education"]); //double quote ma lkhvu neccessary 6 if we are using [].

document.getElementById("ObjOfObj").innerHTML = "exaple of object of object: " + fourthObj.subObj.designation;


//adding a new property in the object:


fourthObj.name = "bcd";
console.log("this is how we can change the value of the property of an object outside the Object:", fourthObj.name);

fourthObj.nationality = "indian";
console.log("adding a new 'nationality' property in fourthObj:", fourthObj.nationality);



//deleting the properties from the given object:

delete fourthObj.age;
console.log("This is he deleted property from the fourthObj: ", fourthObj.age); //unefined bcz of delete
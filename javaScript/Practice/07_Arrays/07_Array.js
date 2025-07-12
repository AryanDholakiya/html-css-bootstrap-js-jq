const arr1 = ["Hello", 'heyy', "Hii"];
console.log("First simple array:", arr1);
// document.getElementById("first").innerHTML = "The First simple Array: " + arr1;





//Accessing array using the array index  
console.log("Accessing array item of index 1: ", arr1[1]);





//changing the value of an element of array:
arr1[0] = "How are you?";
console.log("we changed the value of element on index-0 :", arr1[0]); // How are you?





//converting the array into string: using tostring() method:
console.log("arr1 type BEFORE conversion: ", Array.isArray(arr1));

let convertingArrtoStr = arr1.toString();
console.log("arr1 type AFTER conversion using 'Array.isArray()': ", Array.isArray(convertingArrtoStr));
console.log("arr1 type AFTER conversion using 'instanceof': ", convertingArrtoStr instanceof Array);
console.log("arr1 type AFTER conversion: ", typeof convertingArrtoStr);

//NOTE : Arrays are a special type of objects. The typeof operator in JavaScript returns "object" for arrays. so we have to use the methods like 'Array.isArray()' or 'instanceof' for cheking the object is array or not.





//length property in array:
console.log("Length property in Array: ", arr1.length); //3 because total number of items in array are 3.

// NOTE: Array index , Array ni length krta 1 ochhi hoi.  // array.length = total number of index + 1





//accessing the last array element
console.log("accessing the last array element:", (arr1.length - 1));


console.log();



console.log('looping an array: ');

//Looping an Array

for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
}

let text = "<ul>";
for (let i = 0; i < arr1.length; i++) {
    text += "<li>" + arr1[i] + "</li>";
}
text += "</ul>";

document.getElementById("listTypeArr").innerHTML = text;



//using the foreach loop

let list2 = "<ul>";

arr1.forEach((greeType, index) => {
    list2 += "<li>" + `${index} : ${greeType}` + "</li>";
});

list2 += "</ul>";

document.getElementById("listTypeArrForEach").innerHTML = list2;





//adding an element into the array
document.getElementById("push").innerHTML = arr1;


// arr1.push("Hola");
// console.log("arr1 after adding(push) one element: ", arr1);


function pushBtn() {
    arr1.push("Hola");
    document.getElementById("push").innerHTML = arr1;
    console.log("length of arr1 after clicking the button: ", arr1.length);
}




//How to Recognize an Array

console.log("if we use 'typeof' to check the type of array, it will give object: ", typeof arr1);
console.log("we've to use 'isArray' or 'instanceOf': ", Array.isArray(arr1), arr1 instanceof Array);



//NOTE this EXAMPLE:

let final = "";

const person = {
    name: "abc",
    age: 50,
    cars: [
        { name: "mercedes", models: ["Maybach", "GLS", "G-WAGON"] },
        { name: "land Rover", models: ["range rover", "Defender", "velar"] },
        { name: "Maruti Suzuki", models: ["Funty", "swift", "baleno"] },
    ]
}

for (let i in person.cars) {
    final += "<h3>" + person.cars[i].name + "</h3>";
    for (let j in person.cars[i].models) {
        final += person.cars[i].models[j] + "<br>";
    }
}

document.getElementById("nestedObjAndArr").innerHTML = final;
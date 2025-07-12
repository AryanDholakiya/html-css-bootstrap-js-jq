const arr = ["item1", 'item2', 'item3', 'item4', 'item5'];


//for loop:
//simple loop:
for (let i = 0; i <= 5; i++) {
    console.log(i);
}



//uppr na arry ma loop chalavie
let container = "";
for (let i = 0; i < arr.length; i++) {
    container += arr[i] + " ";
}
console.log(container);





//for...in  :

//Object ના દરેક key માટે.
//JavaScript for in statement loops through the properties of an Object

const obj = {
    fname: 'hello',
    lname: 'world',
};

let contain = "";

for (let key in obj) {
    contain += obj[key] + " ";
    console.log(key + ":" + obj[key]);
}
console.log(contain);

//ex : 2 

let obj2 = {
    model: 'harrier',
    year: 2022,
};



let car = "";
for (let key in obj2) {
    console.log(key + ":" + obj2[key]);
    car += obj2[key] + " ";
};
console.log(car);



// for(let keys of Object.keys(obj2)){   //this is how we have to use if we want to use the for..of in obj
//     console.log(keys + ":" + obj2[keys]);
// }



//for...of statment   

const arr2 = ["jay", "sonu", "akshy", "raju", "kaju"];

let boys = "";

for (let i of arr2) {
    boys += [i] + " ";

}

console.log("this is exmple of for...of: ", boys);

//for...of with string
let str = "JAVASCRIPT";

for (let i of str) {
    console.log(i);
}


//inshort for...in => object ma ma use krvi   
//        for...of => array,string ma use krvi


//forEach()

// const arr2 = ["jay","sonu","akshy","raju","kaju"];

arr2.forEach((value, index) => {
    console.log(index + ":" + value);
});

arr2.forEach((value) => {
    console.log(value);
});

//practice example of for...in

const forIn = {
    lname: "bcd",
    middlename: 'acd',
};

for (let i in forIn) {
    console.log(i + ">" + forIn[i]);
}




//while loop:

let str2 = "hello,India";

let empty = "";
let index = 0;

while (index < str2.length) {
    console.log(str2[index]);
    empty += str2[index];
    index++;
}
console.log(empty);




//break 

let breakEx = [10, 20, 30, 40, 50, 60];

for (let i = 0; i < breakEx.length; i++) {

    if (breakEx[i] == 30) {
        break;
    }
    console.log(breakEx[i]);
}


//continue

for (let i = 0; i < breakEx.length; i++) {
    if (breakEx[i] == 20) {
        continue;
    };
    console.log("continue:", breakEx[i]);
}


//label and break :
emptystrr = "";
labelloop: {
    emptystrr += breakEx[0] + " ";
    emptystrr += breakEx[1] + " ";
    emptystrr += breakEx[2] + " ";
    break labelloop;
    emptystrr += breakEx[3];
    emptystrr += breakEx[4];
    emptystrr += breakEx[5];
};
console.log("emptystrr:", emptystrr);


//for loop with label:

list: for (let i = 0; i < breakEx.length; i++) {
    if (breakEx[i] == 40) {
        break list;
    };
    console.log("label break with loop: ", breakEx[i]);
};



// simple understanding and difference between the for...in and for...of loop:

let anystring = "Example Of for...in and for...of";

//iterating using the for..in:
for (let i in anystring) {
    console.log(anystring[i]); //jo aapne ahi "console.log(i)"..aa rite lkhie to output only index number aape
}

//iterating using the for...of
for (let i of anystring) {
    console.log("using for...of: ", i);
}




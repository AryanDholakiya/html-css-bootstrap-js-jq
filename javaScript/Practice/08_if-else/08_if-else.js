
//if example:
if (new Date().getHours() > 12) {
    console.log("good afternoon");
}

//if-else example:
if (new Date().getHours() < 12) {
    console.log("it's going to be 12 o'clock");
}
else {
    console.log("it's going to be evening");
}

//ternary example:
console.log(new Date().getHours() < 12 ? "Good morningggg! TERNARY" : "Good Afternoon TERNARY");
console.log(new Date().getHours() < 12 ? 'Good Morning' : new Date().getHours() < 18 ? 'Good Afternoon' : 'Good Evening');



//else-if
if (new Date().getHours() < 12) {
    console.log("may you day become good");
}
else if (new Date().getHours() < 18) {
    console.log("Good day!");
}
else {
    console.log("good evening");
}


//switch()

let day = new Date().getDay();
// console.log("day",day); //4

switch (day) {
    case 0: console.log("it's a Sunday");
        break;
    case 1: console.log("it's a Mon");
        break;
    case 2: console.log("it's a Tue");
        break;
    case 3: console.log("it's a Weds");
        break;
    case 4: console.log("it's a Thurs");
        break;
    case 5: console.log("it's a fri");
        break;
    case 6: console.log("it's a Sat");
        break;
    default: console.log("not a valid day");
}
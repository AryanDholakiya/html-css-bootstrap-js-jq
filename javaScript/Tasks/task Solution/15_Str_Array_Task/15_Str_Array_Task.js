//Task 1: String to array with first letter capital
//Que: user String : oscar career point 
//output: ["Oscar", "Career", "Point"]
let a = "oscar career point";

let b = a.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1));
console.log(b); //['Oscar', 'Career', 'Point']

// function capitalizeFirstLetterOfEachWord(arr) {
//     return arr.map(word => word.charAt(0).toUpperCase() + word.slice(1));
// }









//Task 2: Check string is palindrome or not
//user string: "naman a naman"
//output: string is palindrome.


let inputfiled = document.getElementById("inputstring");
let message = document.getElementById("message");
let btn = document.getElementById("check");

let empty = [];

btn.addEventListener('click', () => {
    let inputfieldvalue = inputfiled.value;

    for (let i = 0; i < inputfieldvalue.length; i++) {
        let singlecharArr = inputfieldvalue[i];
        empty.push(singlecharArr);
    }
    console.log(empty);
    // console.log(empty.reverse());
    let result_string = empty.reverse().join("");
    console.log("result_string:", result_string);

    if (inputfieldvalue === result_string) {
        console.log("palindrome");
        message.innerHTML = "Given string is PALINDROME.";
        empty = [];
    }
    else {
        console.log("Not Palindrome");
        message.innerHTML = "Given string is NOT PALINDROME.";
        empty = [];
    }
});







//Task 3: word in ascending order with capital.
//Que: user string: "oscar career point"
//output: CAREER OSCAR POINT


let strring = "oscar career point";
console.log("QUE-3:", strring);
let toupper = strring.toUpperCase();

let changedtoArray = toupper.split(" ");
console.log(changedtoArray);

let sorted = changedtoArray.sort();
console.log("QUE-3 OUTPUT: ", sorted.join(" ")); //ans

console.log("get ans in one line:", strring.toUpperCase().split(" ").sort().join(" "));









//Task 4: which characters are repeating and how many times?
// que: user string - "motavarchha", user character  - a
//output : 4


let area = "Motavarachha";
let count = 0
for (let i = 0; i < area.length; i++) {
    if (area.charAt(i) === 'a') {
        count++;
    }
}
console.log("a repeat time: ", count);


let inputedWord = document.getElementById("counting");
let buttonWord = document.getElementById("selected_word");
let findword = document.getElementById("find");
let showCount = document.getElementById("showCount");

let increamentor = 0;

buttonWord.addEventListener('click', () => {
    debugger;
    for (let i = 0; i < inputedWord.value.length; i++) {
        // console.log(inputedWord.value.charAt(i));
        if (inputedWord.value.charAt(i) === findword.value) {  //note: inputedWord.value.charAt(i)
            increamentor++;
        }
    }
    showCount.innerHTML = ` "${findword.value}" is repeatng ${increamentor} times.`;
})
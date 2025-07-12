/*

let mystring="       hello! everyone how are you? how can i help you?     ";

Q1. find the index of "are".
Q2. remove the white space in string.
Q3. Capitalize the current string.
Q4. find the last index of "how" also using indexof.
Q5. cut the string only get "how can i help you?".

*/


let mystring = "       hello! everyone how are you? how can i help you?     ";


//q.1
let q1 = mystring.indexOf("are");
console.log(q1);
document.getElementById("q1").innerHTML = "Q.1 find the index of 'are': " + `<b>${q1}</b>`;

//q.2
let q2 = mystring.trim();
document.getElementById("q2").innerHTML = `Q.2 This the string without the white-space: ${q2}`;
console.log("removed whitespace: ", q2.length);
console.log("with white-space: ", mystring.length);


//q3
document.getElementById("q3").innerHTML = `Q.3 Capitalize the given string: ${mystring.toUpperCase()}`;
let removingwhiteS = mystring.trim();
let getFirstChar = removingwhiteS.split(" ");
console.log("getting first char: ", getFirstChar);

//-------Pending for loops---------------



//q.4
document.getElementById("q4").innerHTML = `Q.4 Last Index of "how": ${mystring.lastIndexOf('how')}`;


let q5 = mystring.lastIndexOf('how'); // q.5 maaate : bcz if string size moti hoi and apne slice kravvu pde to ema index number gnva na revu pde

//q.5
document.getElementById("q5").innerHTML = `Q.5 cutting the string to get "how can i help you?": ${mystring.slice(q5)}`; //q5
document.getElementById("q5").innerHTML = `Q.5 cutting the string to get "how can i help you?": ${mystring.slice(-24)}`; //ama index num. gnva besvu pde.
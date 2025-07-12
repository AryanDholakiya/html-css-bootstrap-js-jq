let textareaText = document.getElementById("TextareaPara");

let characters = document.getElementById("counter");
let words = document.getElementById("words");

textareaText.addEventListener('input', () => {
    let insertedData = textareaText.value;

    let word = insertedData.split(" ").filter(x => x).length; //'filter(x => x)' only truthy value return kre te mate. if user 1 krta vdhu space aape to tene word ma count na kre te mate.
    characters.innerHTML = "Characters: " + insertedData.length;
    words.innerHTML = "Words: " + word + " ";
});






//get only truthy value example: 03_Array_Task.js 47

//let arr = [1, 3, "Test", 0, "", -1, null, undefined, "Hello World", "hello", "workd", 54, false, true, "-0", "null"];

// let txt4 = [];
// for (let i of arr) {
//     if (i) {    //by default 0, undefined, null, '' and, false => a bdhi value ni condition if mate false thse etle loop ma jse j nai
//         txt4.push(i);
//     }
// };
// function greet() {
//     return "Hello, How are you?";
// };
// console.log(greet());

greet = function () {
    return "Hello, How are you?";
};
console.log(greet());

//arrow function
greet2 = () => {
    return "hello,from greet 2.";
};
console.log(greet2());



//another example of arrow function

let add = function (a, b) {
    console.log(`addition of ${a} + ${b} in 'add' is:`, a + b);
}
add(2, 4);

    
let add2 = (a, b) => {
    console.log(`addition of ${a} + ${b} in 'add2' is:`, a + b);
}
add2(2, 5);
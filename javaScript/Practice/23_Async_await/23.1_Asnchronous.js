//asynchronous example.

function asynchronousEx() {
    console.log("Hellllooooo India!");
}
setTimeout(asynchronousEx, 2000); //here 'asynchronousEx' is used as callback function.
// NOTE : When you pass a function as an argument, remember not to use parenthesis. 

//we can also do like this also
setTimeout(function asynchronousEx2() {
    console.log("HelloWorllld!");
}, 2000);

setTimeout(() => {
    console.log("Hello Worllld!");
}, 2000);


//example 2:

setTimeout(() => {
    let currentdate = new Date();
    console.log(currentdate.getHours() + ":" + String(currentdate.getMinutes()).padStart(2, 0) + ":" + String(currentdate.getSeconds()).padStart(2, 0));
}, 1000);
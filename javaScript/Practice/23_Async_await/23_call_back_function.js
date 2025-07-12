function first(name, callbackfun) {
    console.log("hello" + " " + name);
    callbackfun();
};
function sayBye() {
    console.log("A very Good bye");
};
first("abcd", sayBye);



//example 2:
function myDisplayer(some) {
    console.log(some);
}
function myFirst() {
    myDisplayer("Hello");
}
function mySecond() {
    myDisplayer("Goodbye");
}
myFirst();
mySecond(); //mySecond() last ma call thyu etle console ma aanu j output btavse.


//example 3:

function calculateTotal(anyfunc, ...numbers) {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    anyfunc(sum);
};
function showTotal(some) {
    console.log(some);
}
// let any = calculateTotal(10, 20, 25);
calculateTotal(showTotal,10, 20, 35);

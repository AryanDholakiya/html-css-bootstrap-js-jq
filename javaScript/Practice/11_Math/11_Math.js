console.log(Math.PI);  //Math.PI by default value aape set na krvi pde
console.log(Math.SQRT2); //1.4142135623730951 default.  


//Main methods of Math object

//1. Math.round(x) :  	Returns x rounded to its nearest integer
console.log("Math.round():", Math.round(4.5)); //5
console.log("Math.round():", Math.round(4.4)); //4
console.log("Math.round():", Math.round(4.6)); //5
console.log("Math.round():", Math.round(-3.5)); //3 //NOTE : ahiya te 3 j apse jo value plus 3.5 hot to e 4 aapte
console.log();

//2.Math.ceil(x) : number ને hemesha ઉપર round કરે છે
console.log("Math.ceil:", Math.ceil(4.3)); //5
console.log("Math.ceil:", Math.ceil(-2.3)); // -2 //inshort je moti value bne e return kre
console.log("Math.ceil:", Math.ceil(8.7));
console.log();

//3.Math.floor() : number ને hemesha નીચે round કરે છે
console.log("Math.floor:", Math.floor(4.8)); //4
console.log("Math.floor:", Math.floor(-4.8)); // inshort je nani value bne e retun kre
console.log("Math.floor:", Math.floor(12.9)); //12,
console.log();

//4. Math.trunc(x) : number નું decimal ભાગ કાઢી દે છે . returns the integer part of x
console.log("Math.trunc:", Math.trunc(6.4)); //6
console.log("Math.trunc:", Math.trunc(-6.4)); //6
console.log("Math.trunc:", Math.trunc(-16.9)); //-16
console.log();

//5. Math.sign(x) :
// it returns in 0,1,-1,NaN: if x= -1 to -infinite in  the return -1, 1 to +infininte then return 1, 0 if x = 0; NaN if value empty or string

console.log("Math.sign:", Math.sign(0));// 0
console.log("Math.sign:", Math.sign(-1));// -1
console.log("Math.sign:", Math.sign(-399090909));// -1
console.log("Math.sign:", Math.sign(1));// 1
console.log("Math.sign:", Math.sign(12142454998987654));// 1
console.log("Math.sign:", Math.sign());// NaN
console.log();

//8. Math.pow(x,y) : x નો y power આપે છે
console.log("Math.pow:", Math.pow(2, 3)); //8
console.log("Math.pow Minus:", Math.pow(-3, 2)); //9
console.log("Math.pow Minus:", Math.pow(3, -2)); // 0.1111111111111111 // 1/9 = 0.1111111111111111
console.log();

//9.Math.sqrt(x) : square root આપે છે
console.log("Math.sqrt:", Math.sqrt(81)); //9
console.log("Math.sqrt:", Math.sqrt(-81)); //NaN : In JavaScript, the Math.sqrt function only works with non-negative real numbers.
console.log();

//10.Math.abs() : number નું absolute value આપે છે (એટલે કે positive version)
console.log("Math.abs():", Math.abs(-2.4)); //2.4
console.log();

//11.Math.min(x1, x2, ...) : સૌથી નાનો number આપે છે
console.log("Math.min():", Math.min(2, 4, 32, 12));
console.log("Math.min():", Math.min(32, 12));
console.log();

//12.Math.max(x1, x2, ...) : સૌથી મોટો  number આપે છે
console.log("Math.max():", Math.max(2, 4, 32, 12));
console.log("Math.max():", Math.max(32, 12));
console.log();

//13. Math.random(): 0 અને 1 ની વચ્ચે random number આપે છે
console.log(Math.random());

//14. Math.random() * 10: returns the integer between 0 to 9
console.log("Math.random() * 10: ", Math.random() * 10);
console.log("Math.floor(Math.random() * 10): ", Math.floor(Math.random() * 10));

//15. Math.random() * 11: returns the integer between 0 to 10
console.log("Math.floor(Math.random() * 11) :", Math.floor(Math.random() * 11));  //jya sudhi ni value joiti hoi tenathi ek vdhu sathe math.random() ne multiply krvu pde


//button
function generateNum() {
    document.getElementById("number").innerHTML = Math.floor(Math.random() * 7);
}

function checkAge() {
    let age = document.getElementById("age").value;
    document.getElementById("outputz").innerHTML = age > 18 ? "Elgible to vote" : "Note Eligible to vote";
}



//The Nullish Coalescing Operator (??)
let name;
console.log('your good name is :', name ?? "Lalu");

let age = null;
console.log("your age should be:", age ?? 20);

//with function 
function getName(Name) {
    console.log("Your Name is:", Name ?? "Unknown");
}

getName();
getName("hello world");
getName(null);




//Optional Chaining Operator (?.)

const intro = {
    name: "abc",
    address: {
        city: "surat",
    }
};

console.log("name in intro object: ", intro?.name);
console.log("age of intro:", intro?.age);  //available nthi to error aapya avgr sidhu undefined aapse;

console.log("address in the intro obj: ", intro.address?.city);
console.log("address in the intro obj: ", intro.address?.area);


const arr12 = [0, null, "abc", { name: "lalu", age: 21 }, ""];

console.log("optional chaining operator in array:", arr12[3]?.age);
console.log("optional chaining operator in array:", arr12[3]?.phone);

//નેસ્ટેડ ઓબ્જેક્ટના ચેક્સ:

const obj12 = {
    employee: {
        name: "helloworld",
        email: {
            password: 12333.
        }
    }
};

console.log("getting value from nested object:",obj12?.employee?.name);
console.log("getting value from nested object:",obj12?.employee?.password);


const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

let numb = fruits.get("apples");
console.log(fruits)
console.log(numb)
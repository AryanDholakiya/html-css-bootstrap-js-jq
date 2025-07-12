let JaherArray = ["item1", "item2", "item3", 'item4', 'item5'];

console.log("simple array:", JaherArray)

//length
console.log("Length method: ", JaherArray.length);

//tostring()
console.log("tostring() method: ", JaherArray.toString());

//at(index number)
console.log("at() method: ", JaherArray.at(2));
console.log("another simple method instead of at(): ", JaherArray[2]); // if JaherArray[-1] = undefined


//join(separator) :  It behaves just like toString(), but in addition you can specify the separator
console.log("join() method: ", JaherArray.join("/"));  // '/' is separator.


//pop() 
console.log("pop() method:", JaherArray.pop()); // NOTE:  The pop() method returns the value that was "popped out"
console.log("our remaining array items after pop():", JaherArray);

//push()
console.log("push() method:", JaherArray.push('item5')); // NOTE: The push() method returns the new array length
console.log("our array with new array item:", JaherArray);

//shift()
console.log("shift() methdd:", JaherArray.shift()); //The shift() method returns the value that was "shifted out"
console.log("our remaining array items after shift() method:", JaherArray);

//unshift() 
console.log("unshift() method:", JaherArray.unshift("item1")); // NOTE: The unshift() method returns the new array length
console.log("our array after unshifting an item into array:", JaherArray);

//changing the value at the specific index:
//usually our JaherArray = [ 'item1', 'item2', 'item3', 'item4', 'item5' ];
JaherArray[0] = "ittemm1";
console.log("after chaanging the value at index 0, our array:", JaherArray);

//concat() method:
const Boys = ['boy1', 'boy2', 'boy3'];
const Girls = ['girl1', 'girl2', 'girl3'];
const others = ['other1', 'other2', 'other3'];
console.log("concat() method to merge the two arrays: ", Boys.concat(Girls));
console.log("concat method cn take any number of arguments:", Boys.concat(Girls, others));//concat method cn take any number of arguments
console.log("concat method can take string as an argument:", Boys.concat("Boy4"));//concat method can take string as an argument


//copyWithin() Method
const childs = ['child1', 'child2', 'child3', 'child4', 'child5'];
//console.log("copyWithin:", childs.copyWithin(2, 0)); //[ 'child1', 'child2', 'child1', 'child2', 'child3' ]

/* 2(1st argment)(target) : aa number ni index prthi copied value mukavani start thse. aa index ni agal ni value as it is rese. 
                    jem k ahiya, index 0 pr 'child1' and index 1 pr 'child2' as it is rese ane pachhini index 2 prthi agal copied value mukase.
*/


/* 0(2nd argument)(start) : aa number ni index prthi value copy thvani start thse. 
                     jo 3rd argument nthi aapta to value array na end index sudhi copy thse.
                     jem k ahiya 0 index prthi value copy thse ane last: 'child5' sudhi copy thse
*/

//etle ahiya hve index 0 ane 1 number pr ni value as it is rese ane index 2 prthi value kaik aa rite mukavani sru thse ane array ni length sudhi mukase ['child1', 'child2', 'child1', 'child2', 'child3'], //array length 5

/*3rd argument(end) : items aa index number thi 1 ochha sudhi copy thse.
                      3rd argu (end) aapi devathi value starting position thi laine array length sudhi copy nai thse ane end copy thi 1 ochhi index sudhi copy thse
*/

console.log("copywithin with 3 arguments:(target,start,end): ", childs.copyWithin(2, 0, 4)); //[ 'child1', 'child2', 'child1', 'child2', 'child3' ]

//flat() method:
const flatEx = [1, 2, [5, 7]];
console.log("flat() method without any depth: ", flatEx.flat());
//ahi aaapne flat(depth level) ma depth noti api etle by default depth 1 sudhi flat krse.

const flatEx2 = [1, 2, [5, 7, [8, 6]]];
console.log("only depth level 1 sudhi flat krse: ", flatEx2.flat());

//with depth 2
console.log("with depth 2: ", flatEx2.flat(2));


//flatMap():

const flatMapEx = [1, 2, 3, 4, 5];
console.log("example of flatMap():", flatMapEx.flatMap(any => [any, any * 10]));
console.log("example of flatMap():", flatMapEx.flatMap(any => [any * 10]));

const flatMapEx2 = ["first", "two", "third"];
console.log("example of flatMap():", flatMapEx2.flatMap(any => [any, any.split("")]));
console.log("example of flatMap():", flatMapEx2.flatMap(any => [any.split("")]));


//splice() method: element add or remove krva use thy.
//syntax:  array.splice(start, deleteCount, item1, item2, ..., itemN) // item1, item2,.. e je value insert krvi hoi te chhe.


const spliceEx1 = ['item-1', 'item-2', 'item-3', 'item-4', 'item-5'];

//only remove the elements:
console.log("remove the elements using 'splice()':", spliceEx1.splice(1, 3));
//o/p: [ 'item-2', 'item-3' ] : bcz index 1 thi 2 element remove krse ane remove krela element return krya
console.log("after using the splice our rest array elements are:", spliceEx1);


const spliceEx2 = ['item-1', 'item-2', 'item-3', 'item-4', 'item-5'];
// Remove અને Insert બંને
console.log("Remove અને Insert બંને using splice: ", spliceEx2.splice(0, 3, "added 1", "added 2")); // [ 'item-1', 'item-2', 'item-3' ] //remove krela elements j return krse
console.log("after using the splice our rest array elements are:", spliceEx2);


const spliceEx3 = ['item-1', 'item-2', 'item-3', 'item-4', 'item-5'];
//ફક્ત Insert કરવું હોય : second argument 0 aapvi
console.log("only inserting the elements:", spliceEx3.splice(3, 0, 'new add-1', 'new add-2')); //[] return krse..bcz kai remove nthi krta
console.log("our new array: ", spliceEx3);

// Remove from end
const spliceEx4 = ['item-1', 'item-2', 'item-3', 'item-4', 'item-5'];
console.log("Remove from end using splice():", spliceEx4.splice(-3, 2));
console.log("AFTER remove from end using splice, our array will looks like: ", spliceEx4);
//[ 'item-1', 'item-2', 'item-5' ]






//slice() method: //The slice() method creates a new array.
const sliceEx1 = ['Slice-item-1', 'Slice-item-2', 'Slice-item-3', 'Slice-item-4', 'Slice-item-5'];
console.log("slice() method: ", sliceEx1.slice(3));

console.log('slice method: same a string slice: ', sliceEx1.slice(2, 3));
const ex2 = sliceEx1.slice(2, 3);
console.log('our array after performing slice on array: ', sliceEx1);










//---------------------Array Search Method--------------------

//indexOf()
//lastindexof()


//includes()
const searchArrEx = ['item-1', 'item-2', 'item-3', 'item-4', 'item-5'];
console.log("includes() method:", searchArrEx.includes("item-1"));

// const searchArrEx2 = [1, 2, 3, 4, 5];
// console.log("includes() method2:", searchArrEx2.includes(1)); //true but most of we have to use 'incudes' for NaN values



//find() method: note that it takes a function as a argument  : value na mle to: undefined
console.log("find method:", searchArrEx.find(A => A === "item-2"));

const findEx = [12, 32, 11, 50];
console.log("find() in numbers", findEx.find(x => x > 40));


const findEx2 = [
    {
        name: 'abc',
        id: 1
    },
    {
        name: 'bcd',
        id: 2
    },
    {
        name: 'dfd',
        id: 3
    }
];

console.log("find example in array object: ", findEx2.find(z => z.id === 3));


//findIndex() method: je first element match thy eni index number aape. //find() value ape.  
// : value na mle to: -1
console.log("findIndex() method: ", findEx2.findIndex(x => x.name === 'abc'));



//findLast() : findLast() method that will start from the end of an array and return the value of the first element that satisfies a condition.
const findLastEx = [1, 2, 3, 1, 1, 3];
console.log("findlast() method:", findLastEx.findLast(x => x > 2));


//findLastIndex() method:  findLastIndex() method finds the index of the last element that satisfies a condition.
console.log("findLastIndex() method:", findLastEx.findLastIndex(y => y > 2));








//---------------------Array Sorting Method--------------------

const sortEx = ["Banana", "Orange", "Apple", "Mango"];
const sortEx2 = [5, 1, 4, 3, 2]; //aa as a alphbeticall order ma gothvse. bhle ans aspected j avse but note it

// sort()
console.log("sort() method:", sortEx.sort());
console.log("sort() and reverse() togather:", sortEx.sort().reverse());
console.log("sort() method in array of numbers:", sortEx2.sort());
//correct method to sort numbers:
console.log("Correct method to sort number in ascending order:", sortEx2.sort((a, b) => a - b));
// console.log("in desceding order:", sortEx2.sort((a, b) => b - a)); //without use of reverse. 

const users = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 }
];
console.log(users.sort((a, b) => a.age - b.age)); //NOTE : aa j rite levu pde otherwise na ave aspected output.

//reverse() method:
console.log("reverse method:", sortEx2.reverse());


// NOtE this points:
const points = [40, 100, 1, 5, 25, 10];
console.log("sort alphabetically:", points.sort()); //alphabetically //O/P: [ 1, 10, 100, 25, 40, 5 ]
console.log("sort numerically:", points.sort((a, b) => a - b)) //numerically //O/P: [ 1, 5, 10, 25, 40, 100 ]

//click button to sort numbers randomly
const rndmNUM = [40, 100, 1, 5, 25, 10];

// document.getElementById("nums").innerHTML = rndmNUM;

// function clickk() {
//     return document.getElementById("nums").innerHTML = `Numbers are setted in random way: ${rndmNUM.sort(() => 0.7 - Math.random())}`;
// }



//finding min or max in array: there is no built in method :
console.log("min value in array named 'rndmNUM':", rndmNUM.sort((a, b) => a - b));
console.log("min is:", rndmNUM[0]);
console.log("max is:", rndmNUM[rndmNUM.length - 1]);
console.log("another method to find max number in given array:", rndmNUM.sort((a, b) => b - a));
console.log("another method to fidn max : ", rndmNUM[0]);


console.log(Math.min(1, 2, 3, 4));

//another method to find the min and max from array:
function minval(arr) {
    return Math.min.apply(null, arr);
}
function maxval(arr) {
    return Math.max.apply(null, arr);
}

console.log("this is how we can make a function and use the math.min.apply to find minimum number:", minval(rndmNUM));
console.log("this is how we can make a function and use the math.max.apply to find maximum number:", maxval(rndmNUM));


//there more simpler way than math.min.apply() : //use spread operator instead of this.

function minimumval(arr) {
    return Math.min(...arr);
}
console.log("this is how we can make a function and use the spreadOperator to find minimum number:", minimumval(rndmNUM));
//અહીં ...arr એ array ની દરેક value ને જુદી જુદી રીતે Math.min() માં pass કરે છે
//Imagine કે arr = [4, 2, 9, 1]
// તો ...arr એ થશે: Math.min(4, 2, 9, 1)


// sorting an array of objects using the 
const arryOfObj = [
    { model: 'creta', year: 2016 },
    { model: 'punch', year: 2024 },
    { model: "verna", year: 2012 }
];

// console.log(arryOfObj.sort(function (a, b) { return a.year - b.year }));
console.log(arryOfObj.sort((a, b) => a.year - b.year));  //both things are same











//------------------------Array Iteration Methods-----------------------------

const ipl = ["GT", "CSK", "DC", 'PBKS', "RR", 'KKR', "LSG", "MI"];

//array forEach()

ipl.forEach((iplteam) => {
    console.log("name of team: ", iplteam);
});

console.log();

ipl.forEach((iplteam, index) => {
    console.log(index + ":" + iplteam);
});



//map() function: 
console.log("example of flatMap():", ipl.flatMap(any => ["TEAM " + any]));  //flatMap()

console.log("map() method: ", ipl.map((team) => ["TEAM " + team])); //this method is same as flat map
// console.log("map() method: ", ipl.map(team => "TEAM " + team));
// [
//     ['TEAM GT'],
//     ['TEAM CSK'],
//     ['TEAM DC'],
//     ['TEAM PBKS'],
//     ['TEAM RR'],
//     ['TEAM KKR'],
//     ['TEAM LSG'],
//     ['TEAM MI']
// ]


//map method in objecct:

const Man = [
    { name: 'abc', year: 20 },
    { name: 'nbddd', year: 23 }
];
console.log("map() in object:", Man.map(a => a.name));


//filter method: condition ne match krta ele. j return krre :filter() નો ઉપયોગ થાય છે જ્યારે તમારે arrayમાંથી કેટલાક special elements જ રાખવા હોય — based on condition.

//find and findLast nu global version 6 aa.

const filterEx = [10, 30, 4, 5, 50];
console.log("sort out the values > 20 using filter method: ", filterEx.filter((x) => x > 20));
console.log("sort out the values > 20 using filter method: ", filterEx.filter((x) => { return x > 20 }));



//filter in object: Man valo obje as ex
console.log("filter in object:", Man.filter((any) => any.name === "abc"));




//reduce method():

// array.reduce((accumulator, currentValue) => {
//   return result;
// }, initialValue);  initialValue: શરૂઆતમાં accumulator ને શુ કિંમત આપવી

// const numerics = [10, 20, 30, 50, 10];
const numerics = [10, 20, 30, 50, 10];

console.log("final result after reduce method: ", numerics.reduce((accumulator, current) => { return accumulator + current }, 0));

//ex2
// const numbers = [1, 2, 3, 4, 5];

// const total = numbers.reduce((acc, curr) => {
//   return acc + curr;
// }, 0);

// console.log(total);

// 1st iteration: acc = 0, curr = 1 → acc + curr = 1
// 2nd: acc = 1, curr = 2 → 3
// 3rd: acc = 3, curr = 3 → 6
// 4th: acc = 6, curr = 4 → 10
// 5th: acc = 10, curr = 5 → 15


//word ne jodva:

const wordSent = ['hello', ',', 'How', 'are', 'you', '?'];

const special = wordSent.reduce((acc, curr) => {
    return acc + " " + curr
});

console.log("final sentence:", special);


//every() method 

// const numerics = [10, 20, 30, 50, 10];
console.log("every method example from array 'numerics':", numerics.every((num) => num > 10)); //false 10 !> 10 


//some() method 
console.log("some method: ", numerics.some((x) => x > 10)); //true


//keys()
let keys = numerics.keys();
for (let key of keys) {     //we must have to use the for...of loop or spread operator
    console.log(key);
};
console.log("keys method using the ...spread operator:", ...numerics.keys());  //more easy

//entries() method:
let entriii = numerics.entries();
for (let [index, value] of entriii) {  // we can take any other name like 'entry' and do log of it but it give array output.
    console.log(index, value);
}
console.log("entries method using the ...spread operator:", ...numerics.entries());  //more easy



//with() method:
const withEx = ['jan', 'fab', 'mar', 'apr'];
console.log("with example:", withEx.with(1, 'februaryyyyyyy'));


// ...spread operator: array ane object bnne ma same rite use thy.
//ghna bdha uses 6:
// 1. Array Elements Copy કરવી

const withExCopy = [...withEx];
console.log("this is made using ..spread operator.", withExCopy); //[ 'jan', 'fab', 'mar', 'apr' ]

// 2. Array જોડવું (Join Arrays)
console.log([...numerics, ...withEx]);


//3. Array માં value add કરવી
const fruits = ['apple', 'banana'];
const newFruits = ['mango', ...fruits, 'chikoo'];
console.log(newFruits);
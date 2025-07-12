// String Length
let a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log("Length of the string a :", a.length)



//Extracting string characters
//4 method of extracting string characters: 1) charAt(), 2) charCodeAt() , 3) at(), 4) Property Access [] method

//charAt method : " returns the character at a specified index (position) in a string".
console.log("charAt method returns the character at a specified index (position) in a string : ", a.charAt(3));



//charCodeAt(): "returns the Unicode of the character at a specified index in a string"
console.log("charCodeAt(): returns the code of the character at a specified index in a string : ", a.charCodeAt(0));
//see the difference between the ASCII val and Unicode: basic is ascii is subset of unicode.



//at(): "method returns the character at a specified index (position) in a string". same result as charAt(). this method looks more readable and easy
console.log("method returns the character at a specified index (position) in a string. same result as charAt() : ", a.at(3));



// property access [] : or "bracket" method.. :  "returns an indexed element from a string".
console.log("'[]' returns an indexed element from a string : ", a[3]);


console.log("-------------------------------------------------------------------------------------------------------")
















//  Extracting String Parts

//3 methods: 1) slice(start, end) , 2) substring(start, end), 3) substr(start, length) (outdated: not prefer to use)


//1) slice (start, end) : extracts a part of a string and returns the extracted part in a new string.
// end position is not included
//bija parameter ni value first parameter krta vdhu hoi to "empty string" return krse.. output ma kai print thse nai

let fruits = "Apple, Banana, Mango";
console.log("slice extracts a part of a string and returns the extracted part in a new string : ", fruits.slice(7, 13));

//second parameter n aapie to starting position thi lai ne 6ek puri thse tya sudhi ni string o/p ma mlse
console.log("omiting the second parameter : ", fruits.slice(7));

//If a parameter is negative, the position is counted from the end of the string:
console.log("taking paramater in negative : ", fruits.slice(-7)); // 20 - 7 = 13 ... to 13 thi laine last index sudhi print
console.log("taking in negative : ", fruits.slice(-12, -7));


console.log("another example of negative indexing in slice : ", fruits.slice(-14, -9));
// console.log(fruits.length); // o/p : 20

//easy method to understand negative indexing in slice:
// the string is 20 characters long:

// -14 becomes 20 - 14 = 6
// -9 becomes 20 - 9 = 11

// So fruits.slice(6, 11):
// Index 6 → space ' '
// Index 7 → 'B'
// Index 8 → 'a'
// Index 9 → 'n'
// Index 10 → 'a'
// So it returns ' Bana'

//another method is that : -14 number ni index thi -8 number prr je hse tya sudhi lese... only NOTE that -indexing ma pachhal ni side thi ganvama ave.


console.log();
console.log("------------------------------------Substring method---------------------------------------------")


//substring(start, end) : lgbhg lgbhg same as slice.

//rules:

// Works only with non-negative indices.
//If startIndex > endIndex, it swaps them automatically ..etle k if (10, 4) hse to te output as a (4 , 10) apse.
// "-" (negative index) ne 0 thi gnse..etle k if (-3, 5) em hse to (0, 5) em lese -3 nu 0 kri nakhse.



let substringEX = "JAVASCRIPT";

console.log("Normal substing example :", substringEX.substring(4, 10));
console.log("omit the second arguement :", substringEX.substring(0));

console.log("'-' indexing in substring :", substringEX.substring(-3, 4)); // -3 ne 0 laine 0 this start krse
console.log("'both' index parameters are in - :", substringEX.substring(-3, -3)); // kai j print nai thse bcz 0 0 

//some real life examples.

let Fullname = "Gujarat Titans";

//take only first letter of first name "Gujarat" and lastname "Titatns"

let spaceIndex = Fullname.indexOf(" "); // 7
console.log("Short form is :", Fullname.substring(0, 1) + Fullname.substring(spaceIndex + 1, spaceIndex + 2));
console.log("Short form is using slice :", Fullname.slice(0, 1) + Fullname.slice(spaceIndex + 1, spaceIndex + 2));


//extract only the first name:

console.log("extract only the first name: ", Fullname.substring(0, spaceIndex));


//another example: get the value before "@" sign

let email = "abcd12345@gmil.com";

let getsign = email.indexOf("@");
console.log(getsign);

console.log("getting the vlaue before @ in email :", email.substring(0, getsign));


let fullName = "John Michael";
console.log("critical situation: ", fullName.slice(4, 1)); //outout: kai j nai print thse.
// aani bdle aapne substrinng use krte to te parameters ne change kri dete like substring(1,4)













//Converting to Upper and Lower Case


//toUpperCase()
let convertUpper = "JHoN LArry page";
console.log("converted string into upper case: ", convertUpper.toUpperCase());

//toLowerrCase()
let convertLower = 'Mission Sindoor';
console.log("converted string into lower case: ", convertLower.toLowerCase());



//concat() : syntax: // string1.concat(string2, string3, ..., stringN);

let concastr1 = "firstname";
let concastr2 = 'lastname';

console.log("example of concat() method in string:", concastr1.concat(" ", concastr2));
console.log("example of concat() method in string:", concastr1.concat(concastr2));
console.log("example of concat() method in string:", concastr1.concat(" ", concastr2, " ..."));



//trim() :  removes whitespace from both sides of a string

let trimEX = '   ...hellooow World...   ';
console.log("string length BEFORE the trim: ", trimEX.length); //26
let trimed = trimEX.trim();
console.log("string length AFTER the trim: ", trimed.length);//20
console.log("Eaxample of trim method, which removes whitespace from both side of string: ", trimed);

//trimStart() : removes whitespace only from the start of a string.

let trimStartEX = "   ...hellooow World...   ";//26
let trimStartResult = trimStartEX.trimStart();
console.log("Length after trimStart: ", trimStartResult.length); //23
console.log("Eaxample of trim method, which removes whitespace from start of string: ", trimStartResult);

//trimEnd() : removes whitespace only from the end  of a string.

let trimEndEX = "   ...hellooow World...   ";//26
let trimEndResult = trimEndEX.trimEnd();
console.log("Length after trimEnd: ", trimEndResult.length); //23
console.log("Eaxample of trim method, which removes whitespace from end of string: ", trimEndResult);




// padStart() : It pads a string at start, with another string (multiple times) until it reaches a given length

let padEX1 = "A";
console.log("example of padStart() meth0d:", padEX1.padStart(4, "x"));
//this example means , jya sudhi "padEX1" ni length jya sudhi 4 nai thse tya sudhi tena starting ma "x" add thse.

// NOTE: if we want to add  pad in the number than we have to convert it into the string and then we can perform padding on it.

let numberPadding = 5;
console.log("type of numberPadding before toString method: ", typeof numberPadding);
//convert it into string first.

let convertedNumToString = numberPadding.toString();
console.log("type of numberPadding AFTER toString method: ", typeof convertedNumToString);

console.log("adding a padding from start after converting the number into string: ", convertedNumToString.padStart(5, "0"));



// padEND() : It pads a string at end, with another string (multiple times) until it reaches a given length

let padEX2 = "B";
console.log("example of padEnd() method:", padEX1.padEnd(4, "x"));
//this example means , "padEX2" ni length jya sudhi 4 nai thse tya sudhi tena ending ma "x" add thse.





//repeat()  - syntax : string.repeat(count)

let RepeatMethodEX = "Hello!";
console.log("This is the example of repeat method in string: ", RepeatMethodEX.repeat(4));



//replace() - replaces a specified value with another value in a string

//syntax: string.replace("jene replace krvano 6 e word", "jeni saathe krvno 6 e word")

//rules : 1) replace() method replaces only the first match( use a regular expression with a /g flag (global match)) ,
//        2) replace() method is case sensitive(To replace case insensitive, use a regular expression with an /i flag (insensitive))

let ExOfreplace = "In this string 'THIS' word is replaced.";
let replacedSTR = ExOfreplace.replace("THIS", "SPECIAL");
console.log("This is the replaced string : ", replacedSTR);

// function Replace() {
//     let specialText = document.getElementById("speci").innerHTML;
//     // console.log(specialText);
//     // let specialText2 = document.getElementById("speci");   //check the difference between both
//     // console.log(specialText2);
//     console.log("replaced: ", specialText.replace("THIS", 'SPECIAL'));
//     let replacedtext = specialText.replace("THIS", 'SPECIAL');

//     document.getElementById("speci").innerHTML = replacedtext;
// }



//replace only first match:
let firstmatch = "'hello' world 'hello'";
console.log("only replace the fist match of string: ", firstmatch.replace("hello", "namaste"));

//replace the all the match , we have to use the regular expression /g
let allmatch = "'hello' world 'hello'";
console.log("replace all the match:", allmatch.replace(/hello/g, "namaste")); //regular expre. ma quote use no thy


//case sensitive

let casesensi = "'HELLO' world 'HELLO'";
console.log("case sensitive ex in replace:", casesensi.replace('hello', 'heyy'));

//to avoid case sensitivity we have to use the regular exp. /i
let incasesensi = '"NAMSTE" world "NAMSTE"';
console.log("avoid the case sensitivity using /i : ", incasesensi.replace(/NAMSTE/i, "HEyy"));



//replaceAll()

let masterRepl = "'every word' is going to be replace 'every word'."
console.log("replaceAll() method example: ", masterRepl.replaceAll('every word', "everthing"));


let masterRepl2 = "'every word' is going to be replace 'EVERY WORD'."
console.log("replaceAll() method example 2: ", masterRepl2.replaceAll("every word", "EVERYTHING"));
console.log("replaceAll() method example 2: ", masterRepl2.replaceAll(/every word/g, "EVERYTHING")); //no any change







console.log();

//split() method : very useful method

//If you want to work with a string as an array, you can convert it to an array.

//syntax: string.split(separator, limit(optional))


let splitex1 = "HELLO WORLD";
console.log("split the each Character of the string:", splitex1.split(""));
//['H', 'E', 'L', 'L','O', ' ', 'W', 'O', 'R', 'L', 'D']

//separate using separator:
let splitex4 = "i'm Learning JavaScript.";
console.log("plit using the separator 'space:", splitex4.split(" "));

let splitex2 = "Apple,Banana,Mango";
console.log("split using the separator:", splitex2.split(",")); //[ 'Apple', 'Banana', 'Mango' ]


//use the limit:

let splitex3 = "Apple,Banana,Mango";
console.log("use the limit argument in split:", splitex3.split(",", 2));  // [ 'Apple', 'Banana' ]


//no separator:

let splilt5 = "JAVASCRIPT";
console.log("without separator it gives entire string as one arra element.", splilt5.split()) //JAVASCRIPT

let splilt6 = "Apple,Banana,Mango";
console.log("without separator it gives entire string as one arra element.", splilt6.split()) //JAVASCRIPT


// | **Use Case**           | **Example**               | **Output**        |
// | ---------------------- | ------------------------- | ----------------- |
// | Split by space         | `"a b c".split(" ")`      | `["a", "b", "c"]` |
// | Split by comma         | `"a,b,c".split(",")`      | `["a", "b", "c"]` |
// | Split by character     | `"abc".split("")`         | `["a", "b", "c"]` |
// | Limit number of splits | `"a b c d".split(" ", 2)` | `["a", "b"]`      |
// | No separator provided  | `"abc".split()`           | `["abc"]`         |






//Other method of strngs:

// endsWith() : Check if a string ends with "SpecificWord":

let ExOfEndsWith = "This is the example of endsWith method of string";
console.log("This is the example of endsWith method of string:", ExOfEndsWith.endsWith("string")); // true

//endsWith() with parameters : 
//syntax: string.endsWith(searchvalue, length)

console.log("endsWith method with the parameters: ", ExOfEndsWith.endsWith("This", 4));
// length 4 sudhi no last word given word hse to true.


//startsWith() : Check if a string starts with "SpecificWord": same as endsWith()

let ExOfStartsWith = "This is the example of endsWith method of string";
console.log("This is the example of startsWith method of string:", ExOfStartsWith.startsWith("This")); // true




//startsWith() with parameters : 
//syntax: string.startsWith(searchValue, start)

console.log("startsWith method with the parameters: ", ExOfStartsWith.startsWith("This", 4)); //4 length pachhi kyay This word nai avto etle ...> false 




//includes():

let Exincludes = "this string includes the HELLO word.";
console.log("example of includes: ", Exincludes.includes("HELLO")); //true

//use includes with paraeters instead of startsWith 

console.log("includes method with the parameters: ", Exincludes.includes("HELLO", 25)); //it means 25 mi position thi laine 





//indexOf() method:
//The indexOf() and lastIndexOf() method returns -1 if the value is not found.

let ExindexOf = "This is the example of INDEXOF."
console.log("Example of indexOf():", ExindexOf.indexOf("INDEXOF"));
console.log("Another Example of indexOf():", ExindexOf.indexOf("T"));
console.log("Another Example of indexOf():", ExindexOf.indexOf(" "));

// string.lastIndexOf(searchvalue, start) start is optional: The position where to start.


//lastIndexOf():

let ExlastIndexOf = "you have to understand lasIndexOf(), you must have to.";
console.log("example of lastindexOf():", ExlastIndexOf.lastIndexOf("you"));

//with second parameter
console.log("finds last occurrance of speciifc string which serach within the specified range of string:", ExlastIndexOf.lastIndexOf("you", 20));
//ahiya te 20 number ni index sudhi ma jose k "you" last time kai position pr rhelo 6.



//match method: and matchAll()

let matchEx = "the rain in SPAIN";
console.log("match method: ", matchEx.match("ain"));
// o/p:  [ 'ain', index: 5, input: 'the rain in SPAIN', groups: undefined ]

console.log("match method with reg. Exp.: ", matchEx.match(/ain/g));
//"ain" sbd string ma jetli var aavto hse ene array bnavi ne aapse...like if SPAIN --> spain lakhayelu hote to output: [ 'ain', 'ain'] aavte.
console.log("finding the same words of given string using 'matchAll' instead of using (/ain/g): ", Array.from(matchEx.matchAll("ain")));

//ignore case sensitivity:
console.log("using reg. Exp. /gi in match: ", matchEx.match(/ain/gi));






//prototype property: The prototype property allows you to add new properties and methods to existing objects

function employee(name, age, position) {
    this.name = name;
    this.age = age;
    this.position = position;
}

employee.prototype.salary = 20000; //NOte this line , we added a property

let exObj = new employee("abc", 21, "developer");
console.log("salary of the eployee : ", exObj.salary);

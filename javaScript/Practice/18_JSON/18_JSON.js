let obj = {
    fname: "abcd",
    lname: "bcda",
    age: 21
}


//JSON.stringify(): JavaScript object ને JSON string માં convert કરે

let jsonStringify = JSON.stringify(obj);
// debugger;
console.log("using JSON.stringify: JavaScript object ને JSON string માં convert: ", jsonStringify);  // {"fname":"abcd","lname":"bcda","age":21}



//JSON.parse : JSON string ને ફરીથી JavaScript object માં convert કરે

let jsonparse = JSON.parse(jsonStringify);
console.log("using JSON.parse: JSON string ને ફરીથી JavaScript object માં convert: ", jsonparse); //{ fname: 'abcd', lname: 'bcda', age: 21 }
console.log("Accessing object property after converting the jsonstring into object:", obj.lname);


let text = '{"employees":[' + '{"firstName":"John","lastName":"Doe" },' + '{"firstName":"Anna","lastName":"Smith" },' +
    '{"firstName":"Peter","lastName":"Jones" }]}';

let parsetext = JSON.parse(text);
console.log("parsed text :", parsetext);
//output after parse: 
/*   
{ employees: 
 [{ firstName: 'John', lastName: 'Doe' },{ firstName: 'Anna', lastName: 'Smith' },{ firstName: 'Peter',lastName: 'Jones' }],
} */

console.log("acccess the data after parse the text: ", parsetext.employees[1].firstName); //Anna






//note 
/* 
    0 == "";  //true
*/
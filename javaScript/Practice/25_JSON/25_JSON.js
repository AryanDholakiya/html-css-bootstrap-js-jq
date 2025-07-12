//comverting JSON data into object
let firstJSON = '{"name":"John", "age":30, "city":"New York"}';
let parsedJSON = JSON.parse(firstJSON);
console.log(parsedJSON);

for (let i in parsedJSON) {
    console.log(`${i} : ${parsedJSON[i]}`);
};


//now again convert the object into jSON string using "JSON.stringify";
console.log(JSON.stringify(parsedJSON));


//Array as JSON.
let arrayJSON = '["TATA", "Hyundai", "SUZUKI"]';
let parseArrayJSON = JSON.parse(arrayJSON);
console.log("parsed the array JSON: ", parseArrayJSON);

//again convert the array into JSON form:
console.log(JSON.stringify(arrayJSON));

//array as JSON
let jSONarray = `
{ 

    "fruits": ["apple", "cherry", "guavava"]

}`;

console.log(JSON.parse(jSONarray));
let parsedfruitsJSON = JSON.parse(jSONarray);
console.log(typeof parsedfruitsJSON); //object
console.log(parsedfruitsJSON.fruits[0]); //apple


//another example:

let data = `
{
  "users": [
    { "id": 1, "name": "Aryan" },
    { "id": 2, "name": "Meet" }
  ]
}
`;

let parsedata = JSON.parse(data);
console.log(parsedata);

console.log(parsedata.users[0]);
console.log(parsedata.users[0].id);
console.log(parsedata.users[1].name);

parsedata.users.forEach((user) => {
    console.log(`${user.id} : ${user.name}`)
});
// "use strict"; not neccessary to use


// let b = a;
// console.log("b:",b);  //refrence error apse: ReferenceError: a is not defined

try {
    let b = a;
}
catch (err) {
    console.log("error:", err.message);
}


//erralert("Helllllooooooooooouuuuu"); // ReferenceError: erralert is not defined

try {
    erralert("Helllllooooooooooouuuuu");
}
catch (error) {
    console.log("Handled error: ", error.message);
}


function divide(a, b) {
    if (b === 0) {
        throw new Error("Error: 0 se divide is just like impossible.");
    }
    return a / b;
};


try {
    let a = divide(2, 0);
}
catch (err) {
    console.log(err.message);
}


//another example of try catch
let jsonstrrring = "{'name':'ABC','age': 20}"; //note ahi error bcz : json ma keys and value always "" ma j hovi joie
try {
    let anothervar = JSON.parse(jsonstrrring);
    console.log("json string value:", anothervar.name);
}
catch (err) {
    console.log("Error:", err.message);
}

//another example:
let anotherjson = '{"name":"ABC","age": 20}';

try {
    let parsedjson = JSON.parse(anotherjson);

    if (!parsedjson.address) {
        throw new Error("This keyvalue pair is not defined in object");
    }
}
catch (err) {
    console.log("Custom Error:", err.message);
}




// program of try catch throw
function check() {
    let val = document.getElementById("input").value;
    let trimVal = val.trim();
    let newtrimmmedval = Number(trimVal);
    try {
        if (newtrimmmedval == "") {
            throw new Error("field is empty,Please fill the value in input.");
        }
        else if (isNaN(newtrimmmedval)) {
            throw new Error("Value is Not a Number");
        }
        else {
            if (newtrimmmedval > 100) {
                throw new Error("value is out of range...");
            }
            else if (newtrimmmedval < 33) {
                throw new Error("value is too low...");
            }
            else {
                document.getElementById("result").innerHTML = newtrimmmedval + " is the value which you filled into the input."
            }
        }

    }
    catch (err) {
        console.log("Error Occured:", err.message);
    }
}

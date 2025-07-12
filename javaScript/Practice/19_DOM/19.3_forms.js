
function validation() {
    let formvalues = document.forms['newform']["fname"].value;
    let age = document.forms['newform']['age'].value;

    if (formvalues === "") {
        alert("Fill the value in input");
        return false;
    }

    if (isNaN(age) || age == "" || age <= 0) {
        alert("age should not be in words, should not be null or not less than 0.");
        return false;
    }
};

console.log(document.forms['newform']['fname'].type);
//or we can take upper line like this also: 
let login = document.forms['newform'];
console.log(login.elements['fname'].type);




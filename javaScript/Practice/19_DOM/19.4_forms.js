let form_inputs = document.forms["form"];

function validateForm() {
    let name = form_inputs.elements['suurname'].value.trim();
    let age = form_inputs.elements['age'].value;
    let email = form_inputs.elements['email'].value.trim();
    let email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let pass1 = form_inputs.elements['pass1'].value;
    let pass2 = form_inputs.elements['pass2'].value;
    let valid = true;

    if (name === "") {
        document.getElementById("nameerror").innerHTML = " fill the value.";
        valid = false;
    }
    if (age === "" || isNaN(age) || age < 0 || age > 140) {
        document.getElementById("ageerror").innerHTML = " enter Valid age";
        valid = false;
    }
    if (!email_pattern.test(email)) {
        document.getElementById("emailerror").innerHTML = " Invalid Email";
        valid = false;
    }
    if (pass1 == "" || pass2 == "") {
        alert("Password fields cannot be empty");
        valid = false;
    }
    else if (pass1 !== pass2) {
        alert("password doen't match");
        valid = false;
    }
    else{
        alert("password matched.")
    }
    return valid;


}
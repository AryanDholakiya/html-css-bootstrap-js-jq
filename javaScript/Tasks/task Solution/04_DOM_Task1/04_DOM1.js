let formval = document.forms['form'];


let names = formval.elements['names'];
// console.log(names);
let password = formval.elements['password'];

formval.addEventListener('submit', function (e) {
    NameFn(e);
    PassFn(e);
});


names.addEventListener("input", (e) => {
    // console.log(e);
    NameFn(e);
});
password.addEventListener('input', (e) => {
    PassFn(e);
})

    
function NameFn(e) {
    if (names.value === "") {
        document.getElementById('nameID').innerHTML = "UserName requires.";
        e.preventDefault(); //we can also use the 'return false' instead of preventDefault() to prevent form to get submitted.
        // console.log(e);
    }
    else if (names.value.length < 3) {
        document.getElementById('nameID').innerHTML = "UserName requires min 3 characters.";
        e.preventDefault();
        // console.log(e);
    }
    else {
        document.getElementById('nameID').innerHTML = "";
        e.preventDefault();
    }
}


function PassFn(e) {
    if (password.value.length > 0) {
        document.getElementById('passID').innerHTML = "";
        e.preventDefault();
    }
    else {
        document.getElementById('passID').innerHTML = "Password is Empty.";
        e.preventDefault();
    }
}
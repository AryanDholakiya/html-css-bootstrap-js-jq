let formvalues = document.forms['form']; //object type  

//let radios = formvalues.elements['gender']; // formvalues.elements only works with the name attribute of the form fields.
//console.log(radios); //RadioNodeList(3) [input#Male, input#Female, input#Other, value: '']

let radios2 = document.querySelectorAll('.gen');
//console.log(radios2); //NodeList(3) [input#Male.gen, input#Female.gen, input#Other.gen]
let checkboxes = document.querySelectorAll(".special");

formvalues.addEventListener("submit", (e) => {

    //for radio buttons:
    let store = false;

    for (let i = 0; i < radios2.length; i++) {
        e.preventDefault();
        if (radios2[i].checked) {
            store = true;
            document.getElementById("radioError").innerHTML = "You selected your gender: " + radios2[i].value;

            document.getElementById("radioError").style.color = "green";
        }
        if (!store) {
            document.getElementById("radioError").innerHTML = "Select your Gender Please.";
        }
    }


    //for checkboxes:

    let selected = [];
    let selectedBox = document.querySelectorAll('input[class="special"]:checked');
    // console.log(typeof selectedBox); object

    if (selectedBox.length === 0) {
        document.getElementById("CheckError").innerHTML = "Select any one skill please.";
        document.getElementById("CheckError").style.color = "red";
    }
    else {
        for (let i = 0; i < selectedBox.length; i++) {
            selected.push(selectedBox[i].value);
        }
        // console.log(selected);
        document.getElementById("CheckError").innerHTML = "Your selected skills are: " + selected;
        document.getElementById("CheckError").style.color = "blue";
    }
});









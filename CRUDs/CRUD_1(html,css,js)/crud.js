let form = document.getElementById('form');

// let ModalSaveDataBtn = document.getElementById('saveData');
let ModalCloseBtn = document.getElementById("cancel");

let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let errorMsg = document.getElementById('errorMsg');
let errorMsg2 = document.getElementById('errorMsg2');

// let a = {
//     index: 1,
//     fname: "",
//     lname: "",
// }

// let table = document.getElementById("table");
// let row = table.rows.length - 1;
// console.log(row);


let tableBody = document.querySelector("#table tbody");

//this code is for the remove the warning of console.
let modal = document.getElementById("modal4");
modal.addEventListener("hide.bs.modal", () => {
    if (document.activeElement && document.activeElement !== document.body) {
        document.activeElement.blur();
    }
});

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let firstname = fname.value.trim();
    let lastname = lname.value.trim();

    errorMsg.innerHTML = '';
    errorMsg2.innerHTML = '';
    fname.classList.remove('is-invalid');
    lname.classList.remove('is-invalid');
    fname.style.borderColor = "";
    lname.style.borderColor = "";
    let isProblmatic = false;  // this is to show the both the error together.

    fname.classList.remove("is-valid"); //these classes are applying from the 'input' EventListener
    lname.classList.remove("is-valid");

    if (firstname === "") {
        errorMsg.innerHTML = "First Name Required.";
        fname.classList.add('is-invalid');
        isProblmatic = true;
    }
    else if (firstname.length < 3) {
        errorMsg.innerHTML = "Name must be atleast in 3 Characters.";
        fname.classList.add('is-invalid');
        isProblmatic = true;
    }
    if (lastname === "") {
        errorMsg2.innerHTML = "last Name Required.";
        lname.classList.add('is-invalid');
        isProblmatic = true;
    }
    else if (lastname.length < 3) {
        errorMsg2.innerHTML = "last name must be atleast in 3 Characters.";
        lname.classList.add('is-invalid');
        isProblmatic = true;
    }

    if (isProblmatic) {
        return;
    }
    fname.classList.remove('is-invalid');
    lname.classList.remove('is-invalid');

    addNewRow(firstname, lastname);

    //Note that how to close bootstrap modal
    let bootstrapModal = bootstrap.Modal.getInstance(modal);
    bootstrapModal.hide();

    form.reset();
})

fname.addEventListener('input', () => {
    if (fname.value === "") {
        errorMsg.innerHTML = "First Name Required.";
        fname.classList.add('is-invalid');
    }
    else if (fname.value.length < 3) {
        fname.classList.add("is-invalid");
        errorMsg.innerHTML = "first name must be atleast in 3 Characters.";
    }
    else if (fname.value.length >= 3) {
        fname.classList.remove('is-invalid');
        fname.classList.add('is-valid');
        errorMsg.innerHTML = "";
    }
})
lname.addEventListener('input', () => {

    let value = lname.value.trim();

    switch (true) {
        case (value === ""):
            errorMsg2.innerHTML = "last Name Required.";
            lname.classList.add('is-invalid');
            break;

        case (value.length < 3):
            lname.classList.add("is-invalid");
            errorMsg2.innerHTML = "last name must be atleast in 3 Characters.";
            break;

        case (value.length >= 3):
            lname.classList.remove('is-invalid');
            lname.classList.add('is-valid');
            errorMsg2.innerHTML = "";
            break;
    }
})
function closeBtn() {
    errorMsg.innerHTML = '';
    errorMsg2.innerHTML = '';
    fname.classList.remove('is-invalid');
    lname.classList.remove('is-invalid');
    fname.style.borderColor = "";
    lname.style.borderColor = "";
    lname.classList.remove("is-valid");
    fname.classList.remove("is-valid");

    let BootstrapModal = bootstrap.Modal.getInstance(modal);
    BootstrapModal.hide();
    form.reset();
}


//========== add new row======
function addNewRow(firstname, lastname) {

    let NewRow = document.createElement("tr");
    NewRow.classList.add("align-middle");

    let IndexNoTd = document.createElement("td");
    IndexNoTd.innerHTML = tableBody.rows.length + 1;
    NewRow.appendChild(IndexNoTd);

    let firstnameTd = document.createElement("td");
    firstnameTd.innerHTML = firstname;
    NewRow.appendChild(firstnameTd);

    let lastnameTd = document.createElement("td");
    lastnameTd.innerHTML = lastname;
    NewRow.appendChild(lastnameTd);

    let ActionTd = document.createElement("td");
    ActionTd.classList.add("d-flex", "gap-3");

    let editBtn = document.createElement("button");
    editBtn.innerHTML = "Edit";
    editBtn.classList.add("btn", "btn-outline-success");

    let DeleteBtn = document.createElement("button");
    DeleteBtn.innerHTML = "Delete";
    DeleteBtn.classList.add("btn", 'btn-outline-danger');
    DeleteBtn.addEventListener("click", () => {
        NewRow.remove();
        updateRowIndex();
    })

    ActionTd.appendChild(editBtn);
    ActionTd.appendChild(DeleteBtn);

    NewRow.appendChild(ActionTd);


    tableBody.appendChild(NewRow);
    updateRowIndex()
}


function updateRowIndex() {
    let rowsIntableBody = tableBody.querySelectorAll("tr");
    rowsIntableBody.forEach((row, index) => {
        row.querySelector("td").innerHTML = index + 1;
    })
}


// let DeleteBTNS = document.querySelectorAll(".btn-outline-danger");
// //============ Delete Btn ===================
// DeleteBTNS.forEach((element) => {
//     element.addEventListener('click', () => {
//         let trVal = element.closest("tr");
//         trVal.remove();

//         // let tdOftr = trVal.querySelectorAll("td");
//         // tdOftr.forEach((value, index) => {
//         //     console.log(`${index} : ${value.innerHTML}`);
//         // });
//     })
// });
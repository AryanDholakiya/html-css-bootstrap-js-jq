let form = document.getElementById('form');

let ModalCloseBtn = document.getElementById("cancel");

let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let errorMsg = document.getElementById('errorMsg');
let errorMsg2 = document.getElementById('errorMsg2');


let tableBody = document.querySelector("#table tbody");

let obj = [
    {
        index: 1,
        fname: "bcd",
        lname: "fdfd"
    },
    {
        index: 2,
        fname: "fefe",
        lname: "asa"
    },
]

addData();
function addData() {
    let alldata = "";

    obj.forEach((row) => {
        alldata += `
    <tr class='align-middle'>
        <td>${row.index}</td>
        <td>${row.fname}</td>
        <td>${row.lname}</td>
        <td class = "d-flex gap-3">
            <button type="button" class="btn btn-outline-success" onclick="Editrow(${row.index})">Edit</button>
            <button type="button" class="btn btn-outline-danger" onclick="Deleterow(${row.index})">Delete</button>
        </td>
    </tr>
    `
    })

    // console.log(alldata);
    tableBody.innerHTML = alldata;
}

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


    if (isEditMode) {
        let target = obj.find(x => x.index === editIndex);

        if (target) {
            target.fname = firstname;
            target.lname = lastname;
        }
        isEditMode = false;
        editIndex = null;
    } else {
        obj.push({
            index: obj.length + 1,
            fname: firstname,
            lname: lastname
        })
    }

    addData();

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

//============ Delete Btn ===================
Deleterow = (index) => {

    obj = obj.filter(x => x.index !== index);
    // let findINdex = obj.findIndex(x => x.index === index) //alternate, if we dont wanna use the filter method 
    // obj.splice(findINdex,1)
    obj.forEach((row, index) => {
        row.index = index + 1;
    });
    addData();
}


// Edit Button
let isEditMode = false;
let editIndex = null;

function Editrow(index) {
    let data = obj.find(x => x.index === index);
    console.log(data);

    // if (!data) {
    //     return;
    // };

    fname.value = data.fname;
    lname.value = data.lname;

    isEditMode = true;
    editIndex = index;

    let bootstrap_modal = new bootstrap.Modal(modal);
    bootstrap_modal.show();

}
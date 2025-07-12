let note = document.getElementsByClassName("intro");

document.getElementById("demo").innerHTML = "This is how we can access the any one element from the same name of calss name: " + note[0].innerHTML;


console.log(note[0].innerHTML);


// queryselector;

// document.querySelector('.same').innerHTML = "same 1 is changed using queryselector";
document.querySelectorAll('.same').forEach(same => {
    console.log(same.innerHTML);
}); //ek srkha name na ghna class hoi ane bdha ni value joit hoi tyare aav kai kri skay




// Finding HTML Elements by HTML Object Collections



let formvalues = document.forms['formm']; //HTML document) માં આવેલા બધા <form> elements ની list આપે છે.જે array જેવી object હોય છે.


console.log(typeof formvalues); //obj
let emptystring = "";

btnsub.addEventListener("click", () => {

    for (let i = 0; i < formvalues.length; i++) {
        emptystring += formvalues[i].value + " ";
    };

    document.getElementById("last").innerHTML = emptystring;
});


const obbje = {
    fname: 'abc',
    lname: 'bcd',
    age: 21
}
console.log("length:", obbje.length);
console.log("length:", Object.keys(obbje).length);
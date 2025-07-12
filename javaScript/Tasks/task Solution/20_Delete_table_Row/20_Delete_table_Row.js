// function getRow(btn) {
//     let row = btn.closest('tr');
//     row.remove();
// console.log(row);

//method: 2
// let row2 = btn.parentNode.parentNode;
// let table = row2.parentNode;
// console.log(row2);
// console.log(table);
// table.removeChild(row2);


//method 3:
//   const row = button.parentNode.parentNode;
//   const table = document.getElementById('myTable');
//   table.deleteRow(row.rowIndex);
// }


//uppr ni bdhi methods ma bdha buttons pr onclick event pr getRow() lgavva javu pdse nihce ni method ma direct thse.

//own method:
let DeleteBTNS = document.querySelectorAll('button.delete-btn');

let popUp = document.getElementById("popUpDiv");
let dataInPopUp = document.getElementById("data");
let confirmDeleteinpopUp = document.getElementById("confirmDELETE");
let deniedDeleteinpopUp = document.getElementById("deniedDELETE");
let aany = document.getElementsByClassName("speDIV")[0];

let rowToDelete = null; //Note this variable... we made it bcz when user clicks on delete button, all 5 rows are came into when we assign the value in this variable at line no.37 and then we make it null again so no other rows will stay into it expected selected one.

DeleteBTNS.forEach(element => {
    element.addEventListener('click', () => {
        
        rowToDelete = element.closest("tr");
        let rowNo = rowToDelete.querySelector("td").innerHTML;
        aany.style.boxShadow = "1000px 1000px 0px rgba(0,0,0,0.8) inset";
        // console.log(rowNo);
        aany.style.visibility = "visible";
        dataInPopUp.innerHTML = `Are you sure to delete the row with ID :- ${rowNo} ?`;
    })
});

confirmDeleteinpopUp.addEventListener('click', () => {
    if (rowToDelete) {
        rowToDelete.remove();
        aany.style.visibility = "hidden";

        rowToDelete = null; //Note we do empty it again.

        let table = document.getElementById("table");
        let All_Rows = table.querySelectorAll('tbody tr');
        // console.log(All_Rows);
        All_Rows.forEach((row, index) => {
            // console.log(`${index} : ${row.innerHTML}`);
            // console.log(row);
            let firsTD = row.querySelector('td');
            // console.log(firsTD.innerHTML);
            if (firsTD) {
                console.log(index + 1)
                firsTD.innerHTML = index + 1;
            }
        });
    }
});

deniedDeleteinpopUp.addEventListener('click', () => {
    rowToDelete = null;
    aany.style.visibility = "hidden";
});
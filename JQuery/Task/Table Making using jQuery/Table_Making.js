$(document).ready(function () {
    //creating an table from user inputed rows and cols.

    //this is for hide and show the input fields to add the data into the columns.
    let dataAddPart = $("#dataAddPart");
    dataAddPart.fadeOut();




    //this function is created to prevent user from adding values in alphabet,leading zero and with decimal point.
    //if we dont use the input type text then easy way is , use input type number and it min and max prop
    validateInput = (inputText) => {
        valueIninputField = $(inputText).val();
        valueIninputField = valueIninputField.replace(/[^0-9]/g, '');
        valueIninputField = valueIninputField.replace(/^0+/, '');
        $(inputText).val(valueIninputField);
    };
    let totalNoOfRows;
    let totalNoOfCols;

    $("#AddRowColBtn").click(function () {
        // debugger
        totalNoOfRows = $("#NumOfRows").val();
        totalNoOfCols = $("#NumOfCols").val();

        if (totalNoOfRows === "" || totalNoOfCols === "" || totalNoOfRows > 10 || totalNoOfCols > 10) {
            alert("Input field value is Missing.");
            return;
        }
        else {
            CreateTable(totalNoOfRows, totalNoOfCols);
        }
    });

    let tableBody = $("#myTable");


    function CreateTable(rows, cols) {
        // debugger;
        tableBody.empty(); // Clear previous content

        // $(tableBody).insertAfter("#UpperDiv");

        for (let i = 1; i <= rows; i++) {
            let row = $(`<tr class='text-center' id="r${i}"></tr>`); //note the template literal here
            for (let j = 1; j <= cols; j++) {
                row.append($(`<td id='cell-${i}-${j}'></td>`).text(''));
            }
            tableBody.append(row);
        }
        dataAddPart.fadeIn();
        dataAddPart.removeClass("visibleOrNot");
        //its because when we reload window it will show for very minimum amount of time and to prevent window from to happening this we added a class with visibility hidden and here we are remove that clas.
    }
    //creating an table from user inputted rows and cols.--- End ---



    //adding data into cells
    $("#AddRowColTextBtn").click(function () {
        let RowNoOfChange = $("#TargettedRow").val();
        let ColNoOfChange = $("#TargettedCol").val();
        let Text = $("#InputtedText").val();


        addVal(RowNoOfChange, ColNoOfChange, Text);

    });
    function addVal(row, col, text) {
        let cellId = $(`#cell-${row}-${col}`);
        // let cell = $("#" + cellId);
        cellId.text(text);
    }

});
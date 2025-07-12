$(document).ready(function () {
    $("#filter_area").on("keyup", function () {

        let searched_val = $(this).val().toLowerCase();
        console.log(searched_val);

        $("#mytable tr").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(searched_val) > -1);
        });
    });



    //filtering in list:

    $("#SearchInList").on("keyup", function () {

        let valueofInput = $(this).val().toLowerCase();

        $("#listgroups li").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(valueofInput) > -1)
        })
    })
});
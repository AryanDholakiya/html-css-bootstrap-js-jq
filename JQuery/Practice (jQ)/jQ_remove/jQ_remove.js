$(document).ready(function () {
    //firstly adding the element using jq add method
    $("#btnAdd1").click(function () {
        let addingPara1 = $("<p></p>").text("this is the added para 1.").addClass("addedPara1");
        $("body").append(addingPara1);
    });

    $("#EmptyBtn").click(function () {
        // $("p").empty(".addedPara1"); this syntax is wrong, right is $("p").empty() and empty removes all the p elements

        //to remove the specific element we have to do like this
        $(".addedPara1").empty();
    });

    $("#EmptyAllBtn").click(function () {
        $("p").empty();
    });


    //remove
    $("#removeDiv").click(function () {
        $("#specialDiv").remove();
    });

    $("#removeBtn").click(function () { 
        $("#btnAdd1").remove();
    });

    //remove content of specefic class
    $("h5").remove(".h5");
});
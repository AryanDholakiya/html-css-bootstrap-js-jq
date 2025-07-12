
$(document).ready(function () {
    //<!-- practice 1 -->
    $("#btn").click(function () {
        let paraColour = $("firstP");
        if (paraColour.css("color") === "rgb(255, 0, 0)") {  //JQuery always rgb values j return kre.
            paraColour.css("color", "green");
        }
        else {
            paraColour.css("color", 'red');
        }
    })
    // ------------------------------------



    //<!-- practice 2 -->
    $("#hide").click(function () {
        $("#hidePara").hide();
    })
    // ------------------------------------



    //<!-- practice 3 -->
    $("#thisBtn").click(function () {
        $(this).hide();
    });




    $("#removeItem").click(function () {
        $("ul li:first").hide();  //we can take 'last' also instead of "first"
    });

})



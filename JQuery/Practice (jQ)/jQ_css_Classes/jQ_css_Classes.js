$(document).ready(function () {
    //addClass
    $("#Addclass").click(function () {
        $("h4,p").addClass("colored");
        $("#divv").addClass("updateDivCss");
    });

    //removeclass
    $("#removeclass").click(function () {
        $("h4,p").removeClass("colored");
        $("#divv").removeClass("updateDivCss");
    });

    $("#toggleclass").click(function () {
        $("h4,p").toggleClass("colored");
        $("#divv").toggleClass("updateDivCss");
    });


    //adding css manually using jquery instead of adding class
    $(".manuallCss").css("margin-top", "30px");
    $(".manuallCss p").css({ "margin-top": "30px", "font-size": "20px", "color":"blue" });


});
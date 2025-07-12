$(document).ready(function () {
    $("#btn").click(function () {
        $("p").text("Text is changed.");

        $("p").css("color", "DodgerBlue");

        $("p").addClass("addedClass");
    });
})
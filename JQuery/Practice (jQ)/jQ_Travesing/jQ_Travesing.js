$(document).ready(function () {
    $("span").parent().css({ "border-color": "red" });
    //parent() only direct parent hoi te j return krse....parents() will return all the parent element of span.

    $("span").parents("ul").css({ "border-color": "blue" }); //koik specific parent ne pkdva mate   

    // $("span").parentsUntil("div").css({ "border": "2px solid hotpink" });  // parentsUntil




    $("li").children().css("border", "3px solid purple");

    $("div").find("ul").css({ "font-size": "10px", "font-weight": "600" }); //it searches all descendant <ul> elements.
    // $("div").find("span").css({ "font-size": "30px", "font-weight": "900" });





    // siblings
    $(".secondDiv h2").siblings().css({ "color": "red", "font-size": "20px" });  // h2 sivay h2 na bdha siblings ne aa css lagse
    $(".secondDiv h2").next().css({ "background-color": "red", "color": "white" }) //selected element ni trt pachhi aavto sibling select krse
    // ".nextAll()" will return the all the siblings which are after the selected element


    // The nextUntil() method returns all next sibling elements between two given arguments.
    $(".secondDiv p").nextUntil(".secondDiv h2").css({ "background-color": "yellow" })

});
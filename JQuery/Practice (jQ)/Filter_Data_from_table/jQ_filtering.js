$(document).ready(function () {
    $("div").first().css({ "background-color": "red", "color": "white" });
    $("div").last().css({ "background-color": "dodgerblue", "color": "white" })

    $("div").eq(2).css({ "background-color": "yellow", "color": "black" });

    //filter
    $("p").filter(".filter").css({ "background-color": "black", "color": "whitesmoke" })    

    //not
    $("p").not(".filter").css({ "background-color": "green", "color": "whitesmoke" })    
    
});
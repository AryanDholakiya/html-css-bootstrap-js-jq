$(document).ready(function () {


    //append method:
    $(".append1").append("<span> Appneded text.</span>"); // this will add into the all the p tag. (inside the all p tag where it ends)
    $("ol").append("<li>Added Item</li>");
    $("button").append("<p>Hello world</p>"); // inside the button element.

    $("#appendListItem").click(function () {
        $("ol").append("<li>Added item using the button click.</li>");
    });


    //prepand method:
    $("p").prepend("<b>Prepended text </b>");

    $("#prependUsinfBtn").click(function () {
        $("#ol2").prepend("<li><b>perepended item</b></li>");
    });

    //this two lines are only for the understanding that we also can add the text using jQuery like this way.
    let textAppendingMethod1 = $("<p></p>").text("This is added using the different method.");
    $("body").append(textAppendingMethod1);

    let textAppendingMethod2 = $("<p>Helloooo Everyone.</p>");
    $("body").append(textAppendingMethod2);

    let textAppendingMethod3 = document.createElement("p");
    textAppendingMethod3.innerHTML = "helllloooouuu EveryOne.";
    $("body").append(textAppendingMethod3);
})
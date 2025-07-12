$(document).ready(function () {
    //get and set text:
    $("#btnText").click(function () {
        let text = $("#check").text();
        $("#result").text(text);
    });
    //get and set html 
    $("#btnHtml").click(function () {
        let innerhtml = $("#check").html();
        $("#result").text(innerhtml);
    });
    //get and set attribute
    $("#btn2").click(function () {
        let attr = $(".anchor").attr("href");
        $("#result2").text(attr);
    });
    //get and set value of input field
    $("#valShow").click(function () {
        let valiiu = $("#name").val();
        $("#showval").text(valiiu);
    });



    //  <!-- callback function for the text(), html(), and val() -->
    $("#callback_Text").click(function () {
        $("#callbackWithText").text(function (i, OriginalText) {
            return "Old text: " + OriginalText + " New Text: Hello world." + " (index No. " + i + ")";
        });
    });

    $("#callback_Html").click(function () {
        $("#callbackWithText").html(function (i, OriginalTextHtml) {
            return "old html:" + OriginalTextHtml + " new Html: Hello <b>Woooorld</b>" + " (Index No. " + i + ")";
        })
    });

    //set attribute:
    $("#changeAttr").click(function () {
        let new_attri = $("#changeAttri").attr("href", "https://www.w3schools.com/"); //it returns [obj obj]
        // let new_attri = $("#changeAttri").attr("href", "https://www.w3schools.com/")[0]; we can perform like this also 
        // console.log(new_attri.attr("href"));
        $("#changeMsg").text(function (i, oldAttri) {
            console.log("new attribute:", new_attri); //note: this will return : [object object]
            return "old href : " + oldAttri + " , new href : " + new_attri.attr("href");
        });
    });
});
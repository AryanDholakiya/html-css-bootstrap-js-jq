$(document).ready(function () {

    //click event
    $('.first').click(function () {
        $("#first").toggle();
    });

    //dblclick event
    $("#second").dblclick(function () {
        $(".first").hide();
    })

    //mouseenter event
    $("#mouseover").mouseenter(function () {
        alert("you enterred the mouse on paragraph.")
    })

    //mouseleave event
    $("#mouseleave").mouseleave(function () {
        $(this).css("color", "green");
    });

    //hover on element
    $("#hover").hover(
        function () {
            $(this).css("backgroundColor", "green");
        },
        function () {
            $(this).css("backgroundColor", "red");
        }
    )

    //mousedown
    $(".mousedown").mouseup(function () {
        $(this).css("backgroundColor", "dodgerblue");
    });


    //mousemove
    $(".mousemove").mousemove(function (e) {
        let x = e.clientX;
        let y = e.clientY;
        let x1 = e.pageX;
        let y1 = e.pageY;
        $("#coords").text("mouse x: " + x1 + ", mouse y: " + y1 + ", clientX: " + x + ", clientY: " + y);
    });

    $("input").focus(function () {
        $(this).css("background-color", "green");
    });
    $("input").blur(function () {
        $(this).css("background-color", "red");
    });


    //on method
    $(".On").on({
        mouseenter: function () {
            $(this).css("background-color", "gray");
        },
        mouseleave: function () {
            $(this).css("background-color", "dodgerBlue");
        },
        click: function () {
            $(this).css("background-color", "yellow");
        },
    });



    //Keyboard event : keydown
    let result = "";
    let reg = /^[a-zA-Z0-9 ]$/;
    $("#keydown").keydown(function (e) {
        $("#keydownPara").text("you just pressed: " + e.key);

        if (reg.test(e.key)) {
            result += e.key;
        }
        if (e.key === "Backspace") {
            result = result.slice(0, -1);
        }
        $("#keydownresult").text("Final Result: " + result);
    });
});


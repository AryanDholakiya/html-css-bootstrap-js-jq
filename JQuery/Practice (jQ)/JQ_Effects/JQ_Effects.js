$(document).ready(function () {

    //<!-- ex:1 Hide and Show -->
    $("#btn").click(function () {
        $(".main").hide("slow");
    });

    //method 2: for hide div
    // $(".main #btn").click(function () {
    //     $(this).parents(".main").hide("slow");
    // });

    //show div
    $("#btn2").click(function () {
        $('.main').show("slow");
    });

    $("#btn3").click(function () {
        $('.paraDiv').toggle(1000);
    });





    //<!-- ex:2 Fade -->

    //fadeIn
    $("#fadeIn").click(function () {
        $(".box1").fadeIn(500);  //css of boxes must be the display : none ... otherwise it will not show the fade effe
        $(".box2").fadeIn(1000);
        $(".box3").fadeIn(2000);
    });

    //fadeOut
    $("#fadeOut").click(function () {
        $(".box1").fadeOut(3000);
        $(".box2").fadeOut(2000);
        $(".box3").fadeOut(1000);
    });

    //fadeToggle
    $("#fadeToggle").click(function () {
        $(".box1").fadeToggle(2000);
        $(".box2").fadeToggle(1500);
        $(".box3").fadeToggle(1000);
    });

    $("#fadeTo").click(function () {
        $(".box1").fadeTo(1000, 0.3);
        $(".box2").fadeTo(2000, 0.5);
        $(".box3").fadeTo(3000, 0.7);
    })


    $("#startLoad").click(function () {
        loopFade($(".dot"));
    });

    function loopFade(e) {
        let i = 0;
        setInterval(function () {
            e.eq(i).fadeTo(300, 0.2).fadeTo(300, 1);
            i = (i + 1) % e.length;
        }, 400);
    }

    // $("#startLoad").click(function () {
    //     $("#progressBar")
    //         .fadeTo(200, 1)
    //         .animate({ width: "100%" }, 3000)
    //         .fadeTo(200, 0.5);
    // });





    //<!-- ex:3 Slide -->
    $(".slide_head").click(function () {
        $(".slider").slideDown("slow");
    });

    $(".slide_head").dblclick(function () {
        $(".slider").slideToggle();
    })




    //<!-- ex:4 Animate -->
    $("#animation").click(function (e) {
        $(".animatedDiv").animate({
            left: "300px" //note this quates in pixels})
        });
    });

    $("#animation2").click(function () {
        $(".animatedDiv").animate({
            left: "100px",
            opactiy: "0.5",
            height: "200px",
            width: "200px",
        })
    });

    $("#animation3").click(function () {
        $(".animatedDiv").animate({
            height: "+=200px",
            width: "+=200px",
            left: "+=200px"
        })
    });
    $("#animation4").click(function () {
        $(".animatedDiv").animate({
            height: "200px",
            opactiy: "0.4"
        }, "slow");

        $(".animatedDiv").animate({
            width: "200px",
            opactiy: "1"
        });

        $(".animatedDiv").animate({
            height: "100px",
            opactiy: "0.4"
        }, "slow");

        $(".animatedDiv").animate({
            width: "100px",
            opactiy: "1"
        });
    });

    $('#animation5').click(function () {
        $(".animatedDiv").animate({
            height: "toggle", //same we can take "show", "hide" also.
        }, "slow");
    });


    $("#animation6").click(function () {
        $(".animatedDiv").animate({
            left: "100px",
            height: "200px",
            width: "200px"
        }, "slow");

        $(".animatedDiv").animate({
            fontSize: "90px",
        })
    });





    // <!-- ex:5 stop -->
    $(".slider2Btn").click(function () {
        $(".slider2").slideToggle(2000);
    });

    $("#stop").click(function () {
        $(".slider2").stop();
    });




    $("#chaining").click(function () {
        $(".chaining").css("color", "red").slideUp(1500).slideDown(1500);;
    });

});

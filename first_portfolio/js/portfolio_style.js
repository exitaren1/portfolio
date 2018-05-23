$(function () {
    //    1페이지 효과
    $(".b").ready(function () {
        $(".b").stop().animate({
            height: "50px"
        }, 500, function () {
            $(".v").stop().animate({
                height: "175px"
            }, 500, function () {
                $(".sv").stop().animate({
                    width: "50px"
                }, 500, function () {
                    $(".side1").stop().animate({
                        width: "2px",
                        top: "-200px",
                        left: "-2px"
                    }, 700);
                    $(".side2").stop().animate({
                        width: "2px",
                        bottom: "-200px",
                        right: "-2px"
                    }, 700);
                    $(".logo img").stop().animate({
                        height: "102px"
                    }, 700);
                });
            });
        });
    });
    //    2페이지 효과
    $(".nav_pro>li").on("mouseover focusin",function(){
        var index1 = $(this).index();
        $("#page2>div>div").stop().fadeOut(1000);
        $("#page2>div>div").eq(index1).stop().fadeIn(1000);
        $(this).siblings("li").css("opacity","0.3");
        $(this).css("opacity","1");
    });
    
    //    3페이지 효과
    $(".skill_call").click(function () {
        $(this).css({
            "box-shadow" : "none",
            "margin" : "30px 20px -10px",
            "transition" : "0.3s",
            "font-weight" : "normal"
            });
        $(this).text("아니 어떻게 알았지?!!");
        $(".ss1").stop().animate({
            width: "500px"
        }, 600);
        $(".ss2").stop().animate({
            width: "475px"
        }, 600);
        $(".ss3").stop().animate({
            width: "450px"
        }, 600);
        $(".ss4").stop().animate({
            width: "450px"
        }, 600);
        $(".ss5").stop().animate({
            width: "400px"
        }, 600);
        $(".ss6").stop().animate({
            width: "400px"
        }, 600);
    });
    $(".skill_call").mouseenter(function(){
        $(this).css({
            "box-shadow" : "0 5px #a33a3a",
            "margin" : "25px 20px -5px",
            "transition" : "0.5s"
            });
    })
    $(".skill_call").mouseleave(function(){
         $(this).css({
            "box-shadow" : "0 10px #a33a3a",
            "margin" : "20px 20px 0",
            "transition" : "0.5s",
            "font-weight" : "bold"
            });
        $(this).text("This is not a button");
//        $(".skill_status").stop().animate({
//            width: "0px"
//        }, 600);
    });
})




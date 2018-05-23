$(function () {   
    /*business 로딩 효과*/
    $(".b_con1").stop().animate({
        top: "0%"
    }, 500);
    $(".b_con2").stop().animate({
        right: "0%"
    }, 500);
    $(".b_con3").stop().animate({
        left: "0%"
    }, 500);
    $(".b_con4").stop().animate({
        bottom: "0%"
    }, 500);
    
    
    /*business 클릭 효과*/
    $(".b_con>section").click(function () {
        $(this).removeClass("box_off");
        $(this).addClass("box_on");
        $(".box_on").stop().animate({
            width: "846px",
            height: "846px",
            borderWidth: "28px"
        }, 500).css({
            "z-index": "500",
            "background-position": "-100% -100%",
            "background-color": "#fff",
            "cursor": "auto"
        }).children("h3").fadeOut(200);
        $(".box_on").children(".b_con_text").stop().fadeIn(500).stop().animate({
            top: "60%",
            left: "103px",
            opacity: "1"
        }, 500);
        $(".box_on").children(".fix_box").stop().animate({
            top: "25%"
        }, 500).fadeIn(500);
        $(".box_on").children(".com_logo").stop().animate({
            top: "80%"
        }, 500).fadeIn(500);
        $(".box_on").next(".close").fadeIn(700);
    });

    $(".close").click(function () {
        $(".b_con>section").removeClass("box_on");
        $(this).prev(".b_con>section").addClass("box_off");

        $(".box_off").stop().animate({
            width: "415px",
            height: "415px",
            borderWidth: "14px"
        }, 500).css({
            "z-index": "200",
            "background-position": "center 70%",
            "background-color": "#fff",
            "cursor": "pointer"
        }).children("h3").fadeIn(200);
        $(this).prev(".b_con>section").siblings(".b_con>section").css({"z-index": "100"});
        $(".box_off").children(".b_con_text").stop().fadeOut(300);
        $(".box_off").children(".com_logo").stop().fadeOut(300);        
        $(".box_off").children(".fix_box").fadeOut(500);
        $(this).fadeOut(700);
    });
    
    /*communication 로드 효과*/
    $(".border_box").animate({
        top: "0px",
        opacity: "1"
    }, 700);
    $(".contact_info").animate({
        left: "0px",
        opacity: "1"
    }, 700);
    $(".map").animate({
        right: "0px",
        opacity: "1"
    }, 700);

    /*portfolio 클릭 효과*/

    $(".comment_list>li").click(function () {
        $(this).addClass("sli_active");
        $(this).siblings("li").removeClass("sli_active");
    });
    var pb = $(".position_box");
    pb.eq(0).css({
        "opacity": "1",
        "z-index": "5000"
    });
    $(".comment_list>li").eq(0).click(function () {
        pb.eq(0).css({
            "opacity": "1",
            "z-index": "5000"
        });
        pb.eq(0).siblings().css({
            "opacity": "0",
            "z-index": "1000"
        });
    });
    $(".comment_list>li").eq(1).click(function () {
        pb.eq(1).css({
            "opacity": "1",
            "z-index": "5000"
        });
        pb.eq(1).siblings().css({
            "opacity": "0",
            "z-index": "1000"
        });
    });
    $(".comment_list>li").eq(2).click(function () {
        pb.eq(2).css({
            "opacity": "1",
            "z-index": "5000"
        });
        pb.eq(2).siblings().css({
            "opacity": "0",
            "z-index": "1000"
        });
    });
    $(".comment_list>li").eq(3).click(function () {
        pb.eq(3).css({
            "opacity": "1",
            "z-index": "5000"
        });
        pb.eq(3).siblings().css({
            "opacity": "0",
            "z-index": "1000"
        });
    });
    $(".comment_list>li").eq(4).click(function () {
        pb.eq(4).css({
            "opacity": "1",
            "z-index": "5000"
        });
        pb.eq(4).siblings().css({
            "opacity": "0",
            "z-index": "1000"
        });
    });
});

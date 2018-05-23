$(function () {
    //배너 회전
    var current = 0;
    var banner = $(".bg_wrap li");
    setInterval(function () {
        var prev = banner.eq(current);
        prev.css("top", 0).stop().animate({
            "top": "-100%"
        }, 700);
        current++;
        if (current == banner.size()) current = 0;
        var next = banner.eq(current);
        next.css("top", "100%").stop().animate({
            "top": 0
        }, 700);
    }, 3500);
    //tropical Place 배너 확대    
});

// $(".box1").on({
//                "mouseover" : function(){
//                    $(this).addClass("over");
//                },
//                "mouseout" : function(){
//                    $(this).removeClass("over");
//                }                
//            })


//$(function(){
//            $("button").click(function(){
//                $("div").animate({
//                    "left":"1000px"
//                },1000,function(){
//                    $("div").animate({
//                        "top":"400px",
//                        "background-color":"hotpink"
//                    }, 1000)
//                })
//            })
//        })

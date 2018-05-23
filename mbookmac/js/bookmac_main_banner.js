$(function(){
    //중앙배너
    var visual = $(".banner>li");
    var button = $("#visual>button");
    var current = 0;
    var setId;
    visual.eq(0).css("top",0);
    button.eq(0).addClass("on");
    button.on({
        click : function(){
            var sNum = $(this).index();
            if(sNum==current) return;
            console.log(sNum);
            button.removeClass("on");
            $(this).addClass("on");
            var prev = visual.eq(current);
            var next = visual.eq(sNum);
            prev.css("top",0).stop().animate({
                "top" : "-100%"
            },500);
            next.css("top","100%").stop().animate({
                "top" : 0
            },500);            
            current = sNum;
        }
    })
    timer();
    function timer(){
        setId = setInterval(function(){
            var n = current+1;
            if(n==4){
                n=0;
            }
            button.eq(n).trigger("click");
            console.log(n);
        },4000)
    }
})
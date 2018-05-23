$(function () {
    //중앙배너
    var visual = $(".banner>li");
    var button = $("#visual>button");
    var current = 0;
    var setId;
    visual.eq(0).css("top", 0);
    button.eq(0).addClass("on");
    button.on({
        click: function () {
            var sNum = $(this).index();
            if (sNum == current) return;
            button.removeClass("on");
            $(this).addClass("on");
            var prev = visual.eq(current);
            var next = visual.eq(sNum);
            prev.css("top", 0).stop().animate({
                "top": "-100%"
            }, 700);
            next.css("top", "100%").stop().animate({
                "top": 0
            }, 700);
            current = sNum;
        }
    })
    timer();

    function timer() {
        setId = setInterval(function () {
            var n = current + 1;
            if (n == 4) {
                n = 0;
            }
            button.eq(n).trigger("click");
            console.log(n);
        }, 5000)
    }

    //검색창 클릭시 display
    $(".s_ico").click(function () {
        $("#s_text").fadeToggle(200);
    })

    //close_btn클릭 시 side메뉴 닫기
    var count = 0;
    $(".close_btn").click(function () {
        count++;
        if (count % 2 == 1) {
            $("#contents").stop().animate({
                "right": "-240px"
            }, 200);
            $(".close_btn").css("transform","rotateY(180deg)");
        } else {
            console.log(count);
            $("#contents").stop().animate({
                "right": "20px"
            }, 200);
            $(".close_btn").css("transform","rotateY(0deg)");
        }

    });
    $(".more").click(function(){
        $(".con_over").css("display","block")
    })
})

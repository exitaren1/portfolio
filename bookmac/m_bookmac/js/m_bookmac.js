$(function () {
    //    메뉴 on/off
    var btn = $(".m_head>button");
    var mClick = 0;
    btn.click(function () {        
        $(this).toggleClass("btn_toggle");
        mClick++;
        if(mClick % 2 == 1){
            $(".m_menu").stop().animate({
                "left" : 0
            },500);
        } else {
            $(".m_menu").stop().animate({
                "left" : "100%"
            },500);
        }
    });
    //    컨테이너 메뉴 on/off
    $(".mainMenu>li>a").click(function () {
        $(this).next(".sub").slideToggle(300);
        console.log(this);
        $(this).parent("li").siblings().children(".sub").slideUp(500);
    });
    //    visual animate
    var current = 0;
    var banner = $(".mBanner>li");
    var bcw = 0;
    setInterval(function () {
        banner.eq(current).css("left", "0").stop().animate({
            "left": "-100%"
        }, 1000);
        current++
        if (current == 4) {
            current = 0
        }
        banner.eq(current).css("left", "100%").stop().animate({
            "left": 0
        }, 1000);
        bcw++;
        if (bcw == 4) {
            bcw = 0
        }
        if (current == bcw) {            $("#visual>button").eq(current).addClass("mBtn_cu").siblings().removeClass("mBtn_cu")
        }        
    }, 3000);   
    
    
    //bestseller 스와이프
    var list = $(".b_inner>ul");
    var best_num = 0;
    var total = list.children("li").size();
    var li_width = list.children("li").outerWidth();
    var obj = list.children("li").clone();
    list.append(obj);
    console.log(list);
    list.children("li").children(".b_right").click(function () {
        if (best_num == total) {
            best_num = 0;
            list.css("margin-left", "0")
        }
        best_num++;
        list.stop().animate({
            "margin-left": -li_width * best_num
        }, 500)
    })
    list.children("li").children(".b_left").click(function () {
        if (best_num == 0) {
            best_num = total;
            list.css("margin-left", -li_width * best_num + "px")
        }
        best_num--;
        list.stop().animate({
            "margin-left": -li_width * best_num
        }, 500);
    });
    $(".more").click(function(){
        $(".con_over").css("display","block")
    });
})

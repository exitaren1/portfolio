$(function () {
    //버거버튼 클릭하면 mMenu가 나오도록
    var count = 0;
    $(".mIcon").click(function () {
        count++;
        if (count % 2 == 1) {
            $("#mGnb").stop().animate({
                "top": "100px"
            }, 1000);
            $(".mIcon").css("background-image", "url(images/ico_close.png)");
        } else {
            $("#mGnb").stop().animate({
                "top": "-250%"                
            }, 1000);
            $(".mIcon").css("background-image", "url(images/mIcon.png)");
        }
    });
    $("#mGnb .nav>li").click(function () {
        $(this).siblings().children(".sub").slideUp(500);
        $(this).children(".sub").slideToggle(500);
    });
})

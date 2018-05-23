$(document).ready(function () {
    $('#fullpage').fullpage({
        //이동
        anchors: [],
        navigation: true,
        navigationPosition: 'right',
        css3: true,
        scrollingSpeed: 700,
        dragAndMove: true,
        afterLoad: function (anchorLink, index) {}
    });
    var visual = $(".section3-con>ul>li");
    var buttonBox = $(".section3 .btn-area div");
    var button = $(".section3 .btn-area div button");
    var current = 0;
    visual.eq(0).css("left", 0);
    buttonBox.eq(0).addClass("active");
    button.on({
        click: function () {
            var ind = $(this).parent("div").index();
            if (ind == current) return;
            buttonBox.removeClass("active");
            $(this).parent("div").addClass("active");
            
            var prev = visual.eq(current);
            var next = visual.eq(ind);
            prev.css("left", 0).stop().animate({
                "left": "-100%"
            }, 700);
            next.css("left", "100%").stop().animate({
                "left": 0
            }, 700);
            current = ind;
        }
    })
});

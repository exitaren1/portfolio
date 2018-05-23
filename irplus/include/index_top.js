$(function () {
    $('#fullpage').fullpage({
        slidesNavigation: true,
        slidesNavPosition: 'bottom',
        navigation: true,
        navigationPosition: 'right'
    });
    $('.bxslider').bxSlider({
        auto: true,
        pager: true
    });
    $(".bx-controls-direction").css("display", "none");
    $(".bx-wrapper .bx-pager").css("bottom", "-15vw");
    $(".topbox").click(function () {
        $("#fp-nav ul li").eq(0).children("a").trigger("click");
    });
    $(".view").mouseover(function () {
        $(".view").css("background-color", "#333");
    });
    $(".view").mouseleave(function () {
        $(".view").css("background-color", "#fff");
    });
});

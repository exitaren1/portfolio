$(function () {
    $('#fullpage').fullpage({
        //Navigation
        navigation: true,
        navigationPosition: 'right'
    });
    var cl = $(".comment_list>li");
    var nl = $("#fp-nav ul li");
    cl.eq(0).children("a").click(function () {
        nl.eq(1).children("a").trigger("click");
    });
    cl.eq(1).children("a").click(function () {
        nl.eq(2).children("a").trigger("click");
    });
    cl.eq(2).children("a").click(function () {
        nl.eq(3).children("a").trigger("click");
    });
    cl.eq(3).children("a").click(function () {
        nl.eq(4).children("a").trigger("click");
    });
    $(".top").click(function () {
        nl.eq(0).children("a").trigger("click");
    });
});

$(function () {
    var btn = $("#o_header>button")
    btn.click(function(){
        $(this).toggleClass("on");
        $(".mobile").slideToggle(500);        
    });
})

$(function(){
    $(".switch-style").click(function(){
        if ($(this).siblings("input").is(":checked")) {
            $(this).siblings("input").prop("checked", false);
        } else {
            $(this).siblings("input").prop("checked", "checked");
        }
    });
});

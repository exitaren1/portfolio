$(document).ready(function () {
    $('#fullpage').fullpage({
        //        anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage'],
        afterLoad: function (anchorLink, index) {
            var loadedSection = $(this);
            //색인 사용
            var section1_con = $(".section1 .section-con");
            var section2_con = $(".section2 .section-con");
            var section3_con = $(".section3 .section-con");
            var section4_con = $(".section4 .section-con");
            var section5_con = $(".section5 .news-con");
            var section2_img = $(".section2 .img-area");
            var section3_img = $(".section3 .img-area");
            var section4_img = $(".section4 .img-area");
            var section1_semicircle = $(".section1 .bg-main-semicircle");
            var section2_semicircle = $(".section2 .bg-main-semicircle");
            var section3_semicircle = $(".section3 .bg-main-semicircle");
            var section4_semicircle = $(".section4 .bg-main-semicircle");

            if (index == 1) {
                loadEffect(section1_con, "t", "50%", "1");
                setTimeout(function(){
                    loadEffect(section1_semicircle, "l", "50%", "1");
                },800);
            } else {
                loadEffect(section1_con, "t", "60%", "0");
                setTimeout(function(){
                    loadEffect(section1_semicircle, "l", "50%", "0");
                },800)
            };



            if (index == 2) {
                loadEffect(section2_con, "mt", "0", "1");
                setTimeout(function () {
                    loadEffect(section2_img, "t", "50%", "1");
                }, 500);
                setTimeout(function () {
                    loadEffect(section2_semicircle, "l", "50%", "1");
                }, 1000);
            } else {
                loadEffect(section2_con, "mt", "10%", "0");
                loadEffect(section2_img, "t", "60%", "0");
                loadEffect(section2_semicircle, "l", "50%", "0");
            };



            if (index == 3) {
                loadEffect(section3_con, "mt", "0", "1");
                setTimeout(function () {
                    loadEffect(section3_img, "t", "50%", "1");
                }, 500);
                setTimeout(function () {
                    loadEffect(section3_semicircle, "l", "50%", "1");
                }, 1000);
            } else {
                loadEffect(section3_con, "mt", "10%", "0");
                loadEffect(section3_img, "t", "60%", "0");
                loadEffect(section3_semicircle, "l", "50%", "0");
            };



            if (index == 4) {
                loadEffect(section4_con, "mt", "0", "1");
                setTimeout(function () {
                    loadEffect(section4_img, "t", "50%", "1");
                }, 500);
                setTimeout(function () {
                    loadEffect(section4_semicircle, "l", "50%", "1");
                }, 1000);
            } else {
                loadEffect(section4_con, "mt", "10%", "0");
                loadEffect(section4_img, "t", "60%", "0");
                loadEffect(section4_semicircle, "l", "50%", "0");
            };


            if (index == 5) {
                loadEffect(section5_con, "mt", "0", "1");
            } else if (index == 6) {
                loadEffect(section5_con, "mt", "0", "1");
            } else {
                loadEffect(section5_con, "mt", "10%", "0");
            };

        }
    });

    //ie, ff 등에서 text-overflow 말줄임표
    var dot_space = $(".news-con .news-zone .article p");
    dot_space.each(function () {
        var length = 100;
        if ($(this).text().length >= length) {
            $(this).text($(this).text().substr(0, length) + '...');
        }
    });
});


function loadEffect(con, posiType, posiVal, opVal){
    if(posiType == "t") {
        con.animate({
            top: posiVal,
            opacity: opVal
        }, 500);
    } else if(posiType == "mt") {
        con.animate({
            marginTop: posiVal,
            opacity: opVal
        }, 500);
    } else if(posiType == "l"){
        con.animate({
            left: posiVal,
            opacity: opVal
        }, 500);
    }
}

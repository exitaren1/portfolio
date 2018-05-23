$(function () {
    //GNB 호버시 색변환 이벤트
    var header = $(".header");
    var logo = $(".header>.w1200>h1>a>img");
    var nav_sub = $(".sub");
    var header_linkTo = $(".linkTo");
    header.mouseenter(function () {
        header.css({
            "background": "rgba(255, 255, 255, 0.15)",
            "border-bottom": "1px solid rgba(255, 255, 255, 0.29)"
        });
        header_linkTo.css({
            "background": "#313131",
            "border": "1px solid #313131"
        })
        setTimeout(function () {
            nav_sub.stop().slideDown(200);
        }, 200);
        //        $(".intro_down").css("background-image","url(../images/ico_intro_down_hover.png)");
        $(".intro_down>a").css("color", "#7b633f");
        //        logo.attr("src","../images/logo_hover.png");
    }).mouseleave(function () {
        setTimeout(function () {
            nav_sub.stop().slideUp(200, function () {
                header.css({
                    "background": "rgba(255, 255, 255, 0)",
                    "border-bottom": "0"
                });
                $(".intro_down>a").css("color", "#fff");
                //            $(".intro_down").css("background-image","url(../images/ico_intro_down.png)");
                //            logo.attr("src","../images/logo.png");
                header_linkTo.css({
                    "background": "rgba(0, 0, 0, 0)",
                    "border": "1px solid #fff"
                });
            });
        }, 200);
    });
    var loca_v = false;
    var clk_area = "";
    var _this = "";
    $(".loca-area ul li button").on("click", function () {
        _this = $(this);
        clk_area = _this.parent("li");
        var nd_height = _this.siblings("div").find("ul").height();
        if (loca_v == false) {
            _this.addClass("active");
            var h86 = _this.hasClass("h86")
            if(h86 == true){
                _this.siblings("div").stop().animate({
                height: "86px"
            }, 300);
            } else {
                _this.siblings("div").stop().animate({
                height: "180px"
            }, 300);
            }
            _this.css("color", "#c69654");
            loca_v = true;
        } else {
            _this.removeClass("active");
            _this.siblings("div").stop().animate({
                height: "0"
            }, 300);
            _this.css("color", "#fff");
            loca_v = false;
        }
        clk_area.mouseleave(function () {
            clk_area.find("button").removeClass("active");
            _this.siblings("div").stop().animate({
                height: "0"
            }, 300);
            _this.css("color", "#fff");
            loca_v = false;
        })
    });

    var share = false;

    function shareOpen() {
        $(".hide-area").animate({
            left: "0"
        }, 200);
    }

    function shareClose() {
        $(".hide-area").animate({
            left: "200"
        }, 200);
    }
    $(".share-btn").on("click", function () {
        if (share == false) {
            $(this).addClass("active");
            shareOpen();
            share = true;
        } else {
            $(this).removeClass("active");
            shareClose();
            share = false;
        }
    });
    //서비스 소개
    var service_intro_text1 = $("#content .content-wrap .content-service-intro .sub-text");
    service_intro_text1.animate({
        "margin-left": "470px",
        "opacity": "1"
    }, 700);
    var service_intro_text2 = $(".content-service-intro-bg p");
    service_intro_text2.animate({
        "margin-right": "648px",
        "opacity": "1"
    }, 700);

    //서비스 특징
    /*var service_feature_text = $("#content .content-wrap .content-service-feature .feature-top li div>span");
    service_feature_text.animate({
        "font-size": "20px",
        "line-height": "30px",
        "letter-spacing": "0px"
    }, 1000);*/
    var feature_list1 = [$(".service-feature-list1"), $(".service-feature-list2"), $(".service-feature-list3")]
    var feature_list2 = [$(".service-feature-list4"), $(".service-feature-list5"), $(".service-feature-list6")]
    window.addEventListener('scroll', function () {
        if (window.scrollY >= 350) {
            for(var i in feature_list1){
                feature_list1[i].animate({
                    "background-position-x" : "center",
                    "background-position-y" : "0px",
                    "opacity":"1"
                },700);
            }
        };
        if (window.scrollY >= 950) {
            for(var i in feature_list2){
                feature_list2[i].animate({
                    "background-position-x" : "center",
                    "background-position-y" : "0px",
                    "opacity":"1"
                },700);
            }
        }
    });
});

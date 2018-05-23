$(function(){
    //banner를 저장할 변수
    var list=$(".new_banner");
    //보여줄 list의 갯수를 체크할 변수
    var show_num=1;    
    //현재 메뉴가 보여주는 상태를 체크할 변수 만들기
    var num=0;
    //list의 갯수를 체크해줄 변수만들기
    var total=list.children("li").size();
    console.log(total);
    //banner 하나의 사이즈값 얻어오기
    var li_width=list.children("li").outerWidth();
    console.log(li_width);
   
    //목록 복사하기
    var obj=list.children("li").clone();
    list.append(obj);
    
    
     $(window).resize(function(){
         list.css("margin-left",-li_width*num)
        li_width=list.children("li").outerWidth();
    })
    
    //z오른쪽 버튼을 클릭하면 li가 한개씩 왼쪽으로 이동
    $(".nf_right_btn").click(function(){
        console.log(num);
        if(num==total){
            num=0;
            list.css("margin-left","0")
        }
            num++;
        list.stop().animate({
            "margin-left" : -(li_width*num)
        },500)
    })
    //왼쪽버튼을 클릭하면 li를 른쪽으로 한개씩 이동
    $(".nf_left_btn").click(function(){
        console.log(num);
        if(num==0){
            num=total;
            list.css("margin-left",-li_width*num+"px")
        }
        num--;
        list.stop().animate({
            "margin-left" : -li_width*num
        },500)
    });
})
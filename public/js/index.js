// 視窗卷軸
$(window).scroll(function(){
    // 判斷如果視窗高度超過 # nav ， # top-btn 加上active
    const navtop = document.getElementById("nav")
    // console.log($(window).scrollTop(), navtop.offsetTop);
    if ($(window).scrollTop() > navtop.offsetTop){
        // console.log("test")
        $("#top-btn").addClass("active")
    }else{
        $("#top-btn").removeClass("active")
    }

})// window scroll end


// 點擊事件
$("#top-btn").on("click",function(){
    // console.log("topbt-test");
    $("html,body").animate({
        "scrollTop":0},400)
}) // top-btn click end
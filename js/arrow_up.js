$("document").ready(function(){
    var displaySize = $(window).height(),
        newA = document.createElement("a");

    $(window).scroll(function(){
        if ($(window).width() >= 768){
            if ($(this).scrollTop() > displaySize){
                showArrow();
            } else {
                $(".arrow_up").detach();
            }
        }
    });



    function showArrow(){
        newA.className = "arrow_up";
        $("body").append(newA);
        $(".arrow_up").attr("href","#home");
    }


});
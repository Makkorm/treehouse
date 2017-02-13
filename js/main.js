$(document).ready(function(){
   function heightValue(){
       $(".top_head").css("height", $(window).height());
   }
    $(window).resize(function(){
        heightValue();
    });


    //кнопка меню на маленьких экранах
    function showMenu (){
        var count = 0;
        if ($(window).width() <= 768){
            $(".but_menu").click(function(){
                count++;
                if (count % 2 == 0){
                    $(".main_nav").fadeOut(600);
                    $(".table_td").removeClass("opas");
                } else{
                    $(".main_nav").fadeIn(600);
                    $(".table_td").addClass("opas");
                }
            })
        }
    }
    // скрываем меню, при нажатии на ссылку
    $(".main_nav ul li").click(function(){
       $(".but_menu").trigger("click");
    });


    // page scroll to id
    $(".main_nav ul a").mPageScroll2id();
    $(".arrow_up").mPageScroll2id();




    heightValue();
    showMenu();

});
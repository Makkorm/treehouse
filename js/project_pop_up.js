$(document).ready(function(){
    var button = $("#contact"), // ������ "Contact us"
        popUp = $(".s_next_project .wrapper_pop_up"),
        innerBox = $(".wrapper_pop_up .pop_up_inner"),
        close = $(".close"),
        butMenu = $(".but_menu"); // ������������ ������ ���� (���� ������ ��� ���������� ������)

    button.bind("click", showPopUp);
    close.bind("click", hidePopUp);

    function showPopUp(){
        popUp.fadeIn(); //��������� �����
        setTimeout(function(){
            innerBox.slideDown(800);
            butMenu.hide(); // ������ ������
        },400)
    }
    function hidePopUp(){
        innerBox.slideUp(800);
        setTimeout(function(){
            popUp.fadeOut();
            butMenu.show();
        },850);
    }
});
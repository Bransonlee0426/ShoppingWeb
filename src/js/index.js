$(document).ready(function () {

    //Listeing media to fix the hover effect.
    let CurWidth = window.matchMedia("(max-width: 767px)");
    CurWidth.addListener(resizeWidth);
    resizeWidth(CurWidth);
    
    function resizeWidth(pMatchMedia){
      if (pMatchMedia.matches) {
        $('.item').removeClass('hvr-underline-reveal');
      }else{
        $('.item').addClass('hvr-underline-reveal');
      }
    }
    //showmenu
    $('.showmenu').on('click', function (e) {
        e.preventDefault();
        $('body').toggleClass('menu-show');
    });
});
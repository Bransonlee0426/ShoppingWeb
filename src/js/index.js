$(document).ready(function () {
  const element = document.querySelector('.slidestitle')
  //Listeing media to fix the hover effect.
  let CurWidth = window.matchMedia("(max-width: 767px)");
  CurWidth.addListener(resizeWidth);
  resizeWidth(CurWidth);

  function resizeWidth(pMatchMedia) {
    if (pMatchMedia.matches) {
      $('.item').removeClass('hvr-underline-reveal');
    } else {
      $('.item').addClass('hvr-underline-reveal');
    }
  }
  //showmenu
  $('#showmenu').on('click', function (e) {
    e.preventDefault();
    $('body').toggleClass('menu-show');
  });
  //navbar icon animation
  $('#showmenu').click(function () {
    $(this).toggleClass('open');
  });
  let mySwiper = new Swiper('.swiper-container', {

    // Optional parameters
    direction: 'horizontal',
    loop: true,
    effect: 'fade',
    roundLengths: true,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 3000,
    },

  })


  
});
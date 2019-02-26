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
  let mySwiper1 = new Swiper('.swiper-container1', {

    // Optional parameters
    direction: 'horizontal',
    loop: true,
    effect: 'fade',
    roundLengths: true,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination1',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next1',
      prevEl: '.swiper-button-prev1',
    },
    autoplay: {
      delay: 3000,
    },
  })

  let mySwiper2 = new Swiper('.swiper-container2', {

    // Optional parameters
    direction: 'horizontal',
    loop: true,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination2',
      dynamicBullets: true
    },
    autoplay: {
      delay: 3000,
    },
  })

  function isEmailEmpty() {
    var email = $(".subscript-input").val();
    var message = "";
    if (email == '') {
      alert("Please input your Email address!");
    } else{
      alert("You Have Been Successfully Subscribed!");
    }
}
  $('.subscript-btn').click(function (e) {
      e.preventDefault();
      //驗證郵箱
      isEmailEmpty();
  });
});
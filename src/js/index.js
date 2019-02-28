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

  let productionsAll = '<li><a href="" class="productions-item"><img src="../src/images/dumbbell.jpg" alt=""><span>Dumbbell</span><div>$299</div></a></li><li><a href="" class="productions-item"><img src="../src/images/Clip.jpg" alt=""><span>Clip</span><div>$459</div></a></li><li><a href="" class="productions-item"><img src="../src/images/shoes.jpg" alt=""><span>Shoes</span><div>$1599</div></a></li><li><a href="" class="productions-item"><img src="../src/images/protein.jpg" alt=""><span>Protein</span><div>$1099</div></a></li>';
  let productionsMachine = '<li><a href="" class="productions-item"><img src="../src/images/dumbbell.jpg" alt=""><span>Dumbbell</span><div>$299</div></a></li><li><a href="" class="productions-item"><img src="../src/images/Clip.jpg" alt=""><span>Clip</span><div>$459</div></a></li>';
  let productionsShose = '<li><a href="" class="productions-item"><img src="../src/images/shoes.jpg" alt=""><span>Shoes</span><div>$1599</div></a></li>';
  let productionsFoods = '<li><a href="" class="productions-item"><img src="../src/images/protein.jpg" alt=""><span>Protein</span><div>$1099</div></a></li>';

  $('#category-all').click(function (e) { 
    e.preventDefault();
    $('.productions-items').html(productionsAll);
  });
  $('#category-machine').click(function (e) { 
    e.preventDefault();
    $('.productions-items').html(productionsMachine);
  });
  $('#category-shoes').click(function (e) { 
    e.preventDefault();
    $('.productions-items').html(productionsShose);
  });
  $('#category-foods').click(function (e) { 
    e.preventDefault();
    $('.productions-items').html(productionsFoods);
  });
});
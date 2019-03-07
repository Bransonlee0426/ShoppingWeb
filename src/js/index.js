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
    } else {
      alert("You Have Been Successfully Subscribed!");
    }
  }
  $('.subscript-btn').on('click', function (e) {
    e.preventDefault();
    //vaildMail
    isEmailEmpty();
  });

  let productionsAll = '<li><a href="../src/dumbbell.html" class="productions-item"><img src="../src/images/dumbbell.jpg" alt=""><span>Dumbbell</span><div>$299</div></a></li><li><a href="../src/clip.html" class="productions-item"><img src="../src/images/clip.jpg" alt=""><span>Clip</span><div>$459</div></a></li><li><a href="../src/shoes.html" class="productions-item"><img src="../src/images/shoes.jpg" alt=""><span>Shoes</span><div>$1599</div></a></li><li><a href="../src/protein.html" class="productions-item"><img src="../src/images/protein.jpg" alt=""><span>Protein</span><div>$1099</div></a></li>';
  let productionsMachine = '<li><a href="../src/dumbbell.html" class="productions-item"><img src="../src/images/dumbbell.jpg" alt=""><span>Dumbbell</span><div>$299</div></a></li><li><a href="../src/clip.html" class="productions-item"><img src="../src/images/clip.jpg" alt=""><span>Clip</span><div>$459</div></a></li>';
  let productionsShose = '<li><a href="../src/shoes.html" class="productions-item"><img src="../src/images/shoes.jpg" alt=""><span>Shoes</span><div>$1599</div></a></li>';
  let productionsFoods = '<li><a href="../src/protein.html" class="productions-item"><img src="../src/images/protein.jpg" alt=""><span>Protein</span><div>$1099</div></a></li>';

  $('#category-all').on('click', function (e) {
    e.preventDefault();
    $('.productions-items').html(productionsAll);
  });
  $('#category-machine').on('click', function (e) {
    e.preventDefault();
    $('.productions-items').html(productionsMachine);
  });
  $('#category-shoes').on('click', function (e) {
    e.preventDefault();
    $('.productions-items').html(productionsShose);
  });
  $('#category-foods').on('click', function (e) {
    e.preventDefault();
    $('.productions-items').html(productionsFoods);
  });

  //remove the production item.
  $('.remove-a').on('click', function (e) {
    e.preventDefault();
    if (confirm('確定要刪除這項商品？')) {
      $(this).parents('tr').empty();
    }
  });
  $('.remove-a-total').on('click', function (e) {
    e.preventDefault();
    if (confirm('確定要刪除這項商品？')) {
      $(this).parents('tr').empty();
    }
  });

  //price
  $('.addcart-btn').on('click', function (e) {
    e.preventDefault();
    //css('background-color', 'red');
    let product_info = {
      name: $(this).parent().prevAll('.product-title').data('name'),
      price: $(this).parent().prevAll('.price-discount').data('price'),
      amount: parseInt($(this).prev().find('.product-qty').val())
    };


    //檢查購物車是否存在
    let cart = isCartEmpty();
    //判斷物件是否重複
    if (cart.length === 0) { //如果cart為空
      cart.push(product_info);
      console.log('cart為空');
    } else {
      //如果cart有東西判斷物件是否重複
      for (let i = 0; i < cart.length; i++) {
        //如果物件重複
        if (cart[i].name === product_info.name) {
          cart[i].amount = cart[i].amount + product_info.amount;
          console.log('重複檢查');
          break;
          //到最後一個都沒有重複的話
        } else if (i === cart.length - 1) {
          cart.push(product_info);
          console.log('PUSH');
          break;
        }
      }
    }
    
    //放到localstorage裡面
    let item = JSON.stringify(cart);
    localStorage.setItem('cart', item);
    console.log(cart);
    console.log("localStorage " + Object.keys(localStorage) + ":" + Object.values(localStorage));
  });

  $('#cl').on('click', function () {
    localStorage.clear();
    console.log("localStorage " + Object.keys(localStorage) + ":" + Object.values(localStorage));
  });



  $('#te').on('click', function () {
    let cartObj = cart;
    console.log(cartObj);
  });



  //判斷是否有建立過購物車
  function isCartEmpty() {
    if (localStorage.getItem('cart') === null) {
      let cart = [];
      localStorage.setItem('cart', JSON.stringify(cart));
      return cart;
    } else {
      let cart = JSON.parse(localStorage.getItem('cart'));
      return cart;
    }
  }



});
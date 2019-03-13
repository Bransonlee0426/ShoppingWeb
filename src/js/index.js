$(document).ready(function () {
  const element = document.querySelector('.slidestitle')
  //Listeing media to fix the hover effect.
  let CurWidth = window.matchMedia("(max-width: 767px)");
  CurWidth.addListener(resizeWidth);
  resizeWidth(CurWidth);
  //cart list. 
  isCartEmpty();
  showTotal();

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


  let productionsAll = '<li><a href="../src/dumbbell.html" class="productions-item"><img src="../src/images/dumbbell250*280.jpg" alt=""><span>Dumbbell</span><div>$299</div></a></li><li><a href="../src/clip.html" class="productions-item"><img src="../src/images/clip250*280.jpg" alt=""><span>Clip</span><div>$459</div></a></li><li><a href="../src/shoes.html" class="productions-item"><img src="../src/images/shoes250*280.jpg" alt=""><span>Shoes</span><div>$1599</div></a></li><li><a href="../src/protein.html" class="productions-item"><img src="../src/images/protein250*280.jpg" alt=""><span>Protein</span><div>$1099</div></a></li><li><a href="../src/rope.html" class="productions-item"><img src="../src/images/rope250*280.jpeg" alt=""><span>Rope</span><div>$199</div></a></li>';
  let productionsMachine = '<li><a href="../src/dumbbell.html" class="productions-item"><img src="../src/images/dumbbell250*280.jpg" alt=""><span>Dumbbell</span><div>$299</div></a></li><li><a href="../src/clip.html" class="productions-item"><img src="../src/images/clip250*280.jpg" alt=""><span>Clip</span><div>$459</div></a></li><li><a href="../src/rope.html" class="productions-item"><img src="../src/images/rope250*280.jpeg" alt=""><span>Rope</span><div>$199</div></a></li>';
  let productionsShoes = '<li><a href="../src/shoes.html" class="productions-item"><img src="../src/images/shoes250*280.jpg" alt=""><span>Shoes</span><div>$1599</div></a></li>';
  let productionsFoods = '<li><a href="../src/protein.html" class="productions-item"><img src="../src/images/protein250*280.jpg" alt=""><span>Protein</span><div>$1099</div></a></li>';

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
    $('.productions-items').html(productionsShoes);
  });
  $('#category-foods').on('click', function (e) {
    e.preventDefault();
    $('.productions-items').html(productionsFoods);
  });

  //remove the production item.
  $('.remove-a').on('click', function (e) {
    e.preventDefault();

    let cart = isCartEmpty();
    let curItem = $(this).prev().text();
    let subtotalBefore = parseInt($(this).parents('.cart-table').next().find('.total').text().substr(1));

    for (let i = 0; cart.length > 0; i++) {
      if (curItem === cart[i].name) {
        if (confirm('確定要刪除這項商品？')) {
          subtotal = subtotalBefore - cart[i].total;
          if (subtotal > 0) {
            $(this).parents('.cart-table').next().find('.total').text('$' + subtotal);
          } else if (subtotal === 0) {
            $(this).parents('.cart-table').next().find('.total').text('');
          }
          $(this).parents('tr').empty();
          cart.splice(i, 1);
          localStorage.setItem('cart', JSON.stringify(cart));
          break;
        } else {
          break;
        }
      }
    }

  });
  //remove rwd
  $('.remove-a-total').on('click', function (e) {
    e.preventDefault();
    let cart = isCartEmpty();
    let curItem = $(this).parent().prevAll('.production-name-td').find('.production-name-a').text();
    let subtotalBefore = parseInt($(this).parents('.cart-table').next().find('.total').text().substr(1));

    for (let i = 0; cart.length > 0; i++) {
      if (curItem === cart[i].name) {
        if (confirm('確定要刪除這項商品？')) {
          subtotal = subtotalBefore - cart[i].total;
          if (subtotal > 0) {
            $(this).parents('.cart-table').next().find('.total').text('$' + subtotal);
          } else if (subtotal === 0) {
            $(this).parents('.cart-table').next().find('.total').text('');
          }
          $(this).parents('tr').empty();
          cart.splice(i, 1);
          localStorage.setItem('cart', JSON.stringify(cart));
          break;
        } else {
          break;
        }
      }
    }
  });

  //price
  $('.addcart-btn').on('click', function (e) {
    e.preventDefault();
    //css('background-color', 'red');
    let product_info = {
      name: $(this).parent().prevAll('.product-title').data('name'),
      price: $(this).parent().prevAll('.price-discount').data('price'),
      amount: parseInt($(this).prev().find('.product-qty').val()),
      total: $(this).parent().prevAll('.price-discount').data('price') * parseInt($(this).prev().find('.product-qty').val())
    };
    //檢查購物車是否存在
    let cart = isCartEmpty();
    //判斷物件是否重複
    if (cart.length === 0) { //如果cart為空
      cart.push(product_info);
    } else {
      //如果cart有東西判斷物件是否重複
      for (let i = 0; i < cart.length; i++) {
        //如果物件重複
        if (cart[i].name === product_info.name) {
          cart[i].amount = cart[i].amount + product_info.amount;
          cart[i].total = cart[i].total + product_info.total;
          break;
          //到最後一個都沒有重複的話
        } else if (i === cart.length - 1) {
          cart.push(product_info);
          break;
        }
      }
    }
    //放到localstorage裡面
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('item(s) added!')
  });

  $('.qty-input').on('click change', function () {
    let cart = isCartEmpty();
    let currItem = $(this).parent().prevAll().find('.production-name-a').text();
    let currItemQTY = parseInt($(this).val());
    let subtotalArray = [];
    for (let i = 0; cart.length > 0; i++) {
      if (cart[i].name === currItem) {
        cart[i].amount = currItemQTY;
        cart[i].total = currItemQTY * cart[i].price;
        $(this).parent().next().children('div').text('$' + cart[i].total);
        localStorage.setItem('cart', JSON.stringify(cart));
        break;
      }
    }

    for (let i = 0; i < cart.length; i++) {
      subtotalArray.push(cart[i].total);

    }
    let subtotal = subtotalArray.reduce((acc, cur) => acc + cur);
    $('.total').text('$' + subtotal);

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


  //inial cart list
  function showTotal() {
    let cart = isCartEmpty();
    let subtotalArray = [];

    for (let i = 0; i < cart.length; i++) {

      let productName = cart[i].name;
      let productPrice = cart[i].price;
      let productAmount = cart[i].amount;
      let productTotal = cart[i].price * cart[i].amount;
      var htmlString =
        '                <tr>' +
        '                    <td id="productimg-td">' +
        '                        <div id="productimg"><a href="../src/' + productName + '.html"><img src="../src/images/' + productName + '95*95.jpeg"></a></div>' +
        '                    </td>' +
        '                    <td class="production-name-td">' +
        '                        <div class="production-name">' +
        '                            <a class="production-name-a" href="../src/' + productName + '.html">' + productName + '</a>' +
        '                            <a class="remove-a">REMOVE</a>' +
        '                        </div>' +
        '                    </td>' +
        '                    <td class="price-td" data-price="' + productPrice + '">$' + productPrice + '</td>' +
        '                    <td><input class="qty-input" type="number" value="' + productAmount + '" min="1"></td>' +
        '                    <td id="total-td">' +
        '                        <div>' + '$' + productTotal + '</div>' +
        '                        <a class="remove-a-total">REMOVE</a>' +
        '                    </td>' +
        '                </tr>';
      $('.cart-table').append(htmlString);
      subtotalArray.push(productTotal);
    }

    if (subtotalArray == 0) {
      $('.total').text('');
    } else if (subtotalArray != 0) {
      let subtotal = subtotalArray.reduce((acc, cur) => acc + cur);
      $('.total').text('$' + subtotal);
    }
    $('.total').text();
  }
  //chart.js
  new Chart(document.getElementById("line-chart"), {
    type: 'line',
    data: {
      labels: [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050],
      datasets: [{ 
          data: [86,114,106,106,107,111,133,221,783,2478],
          label: "Africa",
          borderColor: "#3e95cd",
          fill: false
        }, { 
          data: [282,350,411,502,635,809,947,1402,3700,5267],
          label: "Asia",
          borderColor: "#8e5ea2",
          fill: false
        }, { 
          data: [168,170,178,190,203,276,408,547,675,734],
          label: "Europe",
          borderColor: "#3cba9f",
          fill: false
        }, { 
          data: [40,20,10,16,24,38,74,167,508,784],
          label: "Latin America",
          borderColor: "#e8c3b9",
          fill: false
        }, { 
          data: [6,3,2,2,7,26,82,172,312,433],
          label: "North America",
          borderColor: "#c45850",
          fill: false
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'World population per region (in millions)'
      }
    }
  });
});
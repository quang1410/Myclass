var modal = document.getElementById("myModal")
var btn = document.getElementById("cart")
var close = document.getElementsByClassName("close")[0]
var close_footer = document.getElementsByClassName("close-footer")[0];
var order = document.getElementsByClassName("order")[0];

btn.onclick = function() {
    modal.style.display="block";
}

close.onclick = function(){
    modal.style.display="none";
}

close_footer.onclick = function() {
    modal.style.display="none";
}

order.onclick=function(){
    alert("Cảm ơn bạn đã thanh toán")
}

window.onclick=function(e){
    if(e.target==modal){
        modal.style.display="none"
    }
}

//xóa sản phẩm trong giỏ hàng
var remove_cart_item = document.querySelectorAll(".btn-danger")
for(var i=0;i<remove_cart_item.length;i++){
    var button = remove_cart_item[i]
    button.addEventListener("click",function(e){
        var button_remove = e.target
        button_remove.parentNode.parentNode.remove()
        updateCart()
    })
}

//thay đổi số lượng sản phẩm
var quantity_inputs=document.querySelectorAll('.cart-quantity-input')
for(var i=0;i<quantity_inputs.length; i++){
    var input = quantity_inputs[i]
    input.addEventListener('change',function(e){
        input=e.target
        if(input.value<=0){
            input.value=1
        }
        updateCart()
    })
}

//hàm updateCart thay đổi giá
function updateCart(){
    var cart_item = document.querySelector(".cart-items")
    // var cart_item = document.getElementsByClassName("cart-items")[0];
    var cart_rows = cart_item.querySelectorAll('.cart-row')
    var total = 0;
    for(var i=0; i<cart_rows.length; i++){
        var cart_row=cart_rows[i];
        var price_item = cart_row.querySelector('.cart-price')
        var price = parseFloat(price_item.innerText)
        var quantity_item = cart_row.querySelector('.cart-quantity-input')
        var quantity=quantity_item.value
        total = (price* quantity)+total
        console.log(total)
    }
    document.querySelector('.cart-total-price').innerText=total+'VNĐ'
}

//thêm giỏ hàng
var add_cart = document.querySelectorAll('.btn-cart')
for (var i = 0; i <add_cart.length; i++){
    var add = add_cart[i]
    add.addEventListener('click',function(e){
        var button = e.target
        var product = button.parentNode.parentNode;
        var img = product.parentNode.querySelector('.img-prd').src;
        var title = product.querySelector('.content-product-h3').innerText
        var price = product.querySelector('.price').innerText
        addItemToCart(title, price, img)
        // Khi thêm sản phẩm vào giỏ hàng thì sẽ hiển thị modal
        modal.style.display = "block";
        updateCart()
    })
}

function addItemToCart(title, price, img) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cart_title = cartItems.getElementsByClassName('cart-item-title')
    for (var i = 0; i < cart_title.length; i++) {
      if (cart_title[i].innerText == title) {
        alert('Sản Phẩm Đã Có Trong Giỏ Hàng')
        return
      }
    }
  
    var cartRowContents = `
    <div class="cart-item cart-column">
        <img class="cart-item-image" src="${img}" width="100" height="100">
        <span class="cart-item-title">${title}</span>
    </div>
    <span class="cart-price cart-column">${price}</span>
    <div class="cart-quantity cart-column">
        <input class="cart-quantity-input" type="number" value="1">
        <button class="btn btn-danger" type="button">Xóa</button>
    </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', function () {
      var button_remove = event.target
      button_remove.parentElement.parentElement.remove()
      updateCart()
    })
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', function (event) {
      var input = event.target
      if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
      }
      updateCart()
    })
  }

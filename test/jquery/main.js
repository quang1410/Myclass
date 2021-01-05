// Jquery for responsive Header
$(document).ready(function () {
    $("#newback").click(function(){
        $("#newitemback").slideToggle("slow");
    });

    $("#men").click(function(){
        $("#men-item").slideToggle("slow");
    });
});

// Jquery của Footer
$(document).ready(function(){
    $("#company-text").click(function(){
        $("#content1").slideToggle();
        $("#company-text").toggleClass("change1");
    })
    $("#policy-text").click(function(){
        $("#content2").slideToggle();
        $("#policy-text").toggleClass("change2");
    })
    $("#contact-text").click(function(){
        $("#content3").slideToggle();
        $("#contact-text").toggleClass("change3");
    })
    $("#info-text").click(function(){
        $("#content4").slideToggle();
        $("#info-text").toggleClass("change4");
    })
})

// Jquery for cart in nav
$(document).ready(function(){
    $("#cart-panel-close").click(function(){
        $("#cart-panel").animate({right: '-40%'}, "8000ms");
        $("#over-layer").fadeOut();
        $("#cart-panel").fadeOut();
        $("body").removeClass("no-scroll");
    })
    $("#over-layer").click(function(){
        $("#cart-panel").animate({right: '-40%'}, "8000ms");
        $("#over-layer").fadeOut();
        $("#cart-panel").fadeOut();
        $("body").removeClass("no-scroll");
    })
    $("#continue-shopping").click(function(){
        $("#cart-panel").animate({right: '-40%'}, "8000ms");
        $("#over-layer").fadeOut();
        $("#cart-panel").fadeOut();
        $("body").removeClass("no-scroll");
    })
    $("#cart-panel-open").click(function(){
        $("#cart-panel").fadeIn("0ms");
        $("#cart-panel").animate({right: '0%'}, "8000ms");
        $("#over-layer").fadeIn();
        $("body").addClass("no-scroll");
    })
    $("body").delegate(".add-to-cart", "click", function(){
      var equal = 0;
      var titleItem = $(this).siblings(".itemTitle").text();
      var hiddenPrice = Number($(this).siblings(".product-price-hidden").text());
      var count = Number($("#cart-panel-open div").text());
      count += 1;
      $("#no-item").fadeOut();
      $("#continue-shopping").fadeOut();
      $("#cart-panel-open div").text(count);
      $("#cart-panel .cart-panel-body").css("justify-content","flex-start");
      $("#cart-item-list").fadeIn();

      $(".item-title").each(function(){
          if($(this).text() == titleItem) {
            $(this).siblings(".item-price").find("input").val(Number($(this).siblings(".item-price").find("input").val()) + 1);
            $(this).siblings(".item-price").find(".number-down").css("opacity", "1");
            $("#total-price-hidden").text(Number($("#total-price-hidden").text()) + hiddenPrice);
            $("#price").text(parseInt(Number($("#total-price-hidden").text())).toLocaleString());
            equal = 1;
          }
      })
      if(equal == 0) {
        var htmlAdder = '<div class="cart-item"><img src="';
        htmlAdder += $(this).siblings("img").attr("src") + '" >';
        htmlAdder += '<div class="item-detail"><span class="item-title">';
        htmlAdder += $(this).siblings(".itemTitle").text() + '</span>';
        htmlAdder += '<div class="item-price"><div class="item-number"><input type="text" readonly class="count-number" value="1"><img src="images/icon/caret-up-solid.svg" alt="" class="number-up"><img src="images/icon/caret-down-solid.svg" alt="" class="number-down"></div> x ';
        htmlAdder += $(this).siblings("span").text() + '<div class="cart-item-price-hidden">';
        htmlAdder += $(this).siblings(".product-price-hidden").text() + '</div></div></div><a class="delete-item"><img src="images/icon/trash-alt-regular.svg" alt=""></a></div>';
        $("#cart-item-list").append(htmlAdder);
        $("#total-price-hidden").text(Number($("#total-price-hidden").text()) + hiddenPrice);
        $("#price").text(parseInt(Number($("#total-price-hidden").text())).toLocaleString());
        $(".payment").css("display", "block");
      }
    })
  $("body").delegate(".delete-item", "click", function(){
        var hiddenPrice = Number($(this).parent().find(".cart-item-price-hidden").text());
        var countCart = Number($("#cart-panel-open div").text());
        var countItem = Number($($(this).siblings(".item-detail")).find("input").val());
        countCart -= countItem;
        $("#cart-panel-open div").text(countCart);
        $(this).parent().remove();
        $("#total-price-hidden").text(Number($("#total-price-hidden").text()) - hiddenPrice*countItem);
        $("#price").text(parseInt(Number($("#total-price-hidden").text())).toLocaleString());
        if(countCart == 0)
        {
          $("#cart-panel .cart-panel-body").css("justify-content","center");
          $("#cart-item-list").css("display", "none");
          $(".payment").css("display", "none");
          $("#no-item").fadeIn();
          $("#continue-shopping").fadeIn();
        }
  })
  $("body").delegate(".number-up", "click", function(){
        var hiddenPrice = Number($($(this).parent()).parent().find(".cart-item-price-hidden").text());
        var count = Number($(this).siblings("input").val());
        count += 1;
        $(this).siblings("input").val(count);
        $("#total-price-hidden").text(Number($("#total-price-hidden").text()) + hiddenPrice);
        $("#price").text(parseInt(Number($("#total-price-hidden").text())).toLocaleString());
        $("#cart-panel-open div").text(Number($("#cart-panel-open div").text()) + 1);
        if(count > 1)
          $(this).siblings(".number-down").css("opacity", "1");
  })
  $("body").delegate(".number-down", "click", function(){
        var hiddenPrice = Number($($(this).parent()).parent().find(".cart-item-price-hidden").text());
        var count = Number($(this).siblings("input").val());
        if(count > 1) {
          count -= 1;
          $(this).siblings("input").val(count);
        $("#total-price-hidden").text(Number($("#total-price-hidden").text()) - hiddenPrice);
        $("#price").text(parseInt(Number($("#total-price-hidden").text())).toLocaleString());
          $("#cart-panel-open div").text(Number($("#cart-panel-open div").text()) - 1);
          if(count == 1)
            $(this).css("opacity", "0.5");
        }
  })
})

// Jquery for divMenu & divFavour
$(document).ready(function() {
    $(".tooltip").fadeOut(0);
    $(".divMenu .divItem img").hover(
        function(){
            $(this).attr("src", function(i, oldValue){
                oldValue = oldValue.slice(7);
                return "images/hover_" + oldValue;
            });
        }, 
        function(){
            $(this).attr("src", function(i, oldValue){
                oldValue = oldValue.slice(13);
                return "images/" + oldValue;
            });
        }
    )
    $(".moreInfo").click(function(){
        $(".moreInfo .tooltip").fadeToggle();
    })
})

// Jquery for detail page
$(document).ready(function(){
    $(".divMain .divImg .img").click(
        function(){
            $("#scaleImg").fadeIn(400);
            $("#scaleImg").attr("src", $(this).attr("src"));
        }
    )
    $("#scaleImg").mouseleave(function(){
        $("#scaleImg").fadeOut(400);
        $("#scaleImg").attr("src", "");
    })
    .click(function(){
        $("#scaleImg").fadeOut(400);
        $("#scaleImg").attr("src", "");
    })
})

// Jquery for List page
$(document).ready(function(){
            $("#toggle-text").click(function(){
                var text = $("#toggle-text").text();
                if (text == "Hiện bộ lọc"){
                    $("#filter-box").slideToggle();
                    $("#toggle-text").text("Ẩn bộ lọc");
                } else {
                    $("#toggle-text").text("Hiện bộ lọc");
                    $("#filter-box").slideToggle();
                }
            })
            $("#color").click(function(){
                if ($("#color-checkbox").css("display") == "none"){
                    $(this).css({"font-weight":"bold", "color":"black"});
                } else 
                    $(this).css({"font-weight":"normal", "color":"#4d4944"});
                    $("#color-checkbox").slideToggle();
            })
            $("#size").click(function(){
                if ($("#size-checkbox").css("display") == "none"){
                    $(this).css({"font-weight":"bold", "color":"black"});
                } else 
                    $(this).css({"font-weight":"normal", "color":"#4d4944"});
                    $("#size-checkbox").slideToggle();
            })
            $("#gender").click(function(){
                if ($("#gender-checkbox").css("display") == "none"){
                    $(this).css({"font-weight":"bold", "color":"black"});
                } else 
                    $(this).css({"font-weight":"normal", "color":"#4d4944"});
                    $("#gender-checkbox").slideToggle();
            })
            $("#price").click(function(){
                if ($("#price-checkbox").css("display") == "none"){
                    $(this).css({"font-weight":"bold", "color":"black"});
                } else 
                    $(this).css({"font-weight":"normal", "color":"#4d4944"});
                    $("#price-checkbox").slideToggle();
            })
        })

//test price
        $(document).ready(function(){
            $('select').on('change', function (e) {
            var optionSelected = $("option:selected", this);
            var valueSelected = this.value;
            if(valueSelected=='4'){
                    $("#divItem_8").css({"order" : "7"});
                    $("#divItem_7").css({"order" : "1"});
                    $("#divItem_6").css({"order" : "8"});
                    $("#divItem_5").css({"order" : "3"});
                    $("#divItem_4").css({"order" : "6"});
                    $("#divItem_3").css({"order" : "4"});
                    $("#divItem_2").css({"order" : "5"});
                    $("#divItem_1").css({"order" : "2"});
            }
            if(valueSelected=='1'){

                    $("#divItem_8").css({"order" : "1"});
                    $("#divItem_7").css({"order" : "5"});
                    $("#divItem_6").css({"order" : "2"});
                    $("#divItem_5").css({"order" : "7"});
                    $("#divItem_4").css({"order" : "6"});
                    $("#divItem_3").css({"order" : "8"});
                    $("#divItem_2").css({"order" : "4"});
                    $("#divItem_1").css({"order" : "3"});
            }
            if(valueSelected=='2'){
                    $("#divItem_8").css({"order" : "1"});
                    $("#divItem_7").css({"order" : "5"});
                    $("#divItem_6").css({"order" : "2"});
                    $("#divItem_5").css({"order" : "7"});
                    $("#divItem_4").css({"order" : "6"});
                    $("#divItem_3").css({"order" : "8"});
                    $("#divItem_2").css({"order" : "4"});
                    $("#divItem_1").css({"order" : "3"});
            }
            if(valueSelected=='3'){
                    $("#divItem_8").css({"order" : "2"});
                    $("#divItem_7").css({"order" : "8"});
                    $("#divItem_6").css({"order" : "1"});
                    $("#divItem_5").css({"order" : "6"});
                    $("#divItem_4").css({"order" : "3"});
                    $("#divItem_3").css({"order" : "5"});
                    $("#divItem_2").css({"order" : "4"});
                    $("#divItem_1").css({"order" : "7"});
            }
            });
        })
$('.checkout-coupon-input').focus(function(){
   $('.checkout-coupon-label').hide(1000);
}).blur(function(){
    $('.checkout-coupon-label').show(1000);
});


$('.checkout-coupon-label').click(function(){

    $(this).hide();
    $('.checkout-coupon-input').focus();

});
console.log('from products');
$('.product').mouseenter(function(){
  $(this).find('.product-action-vertical').css({opacity:1,right:'20px'});
  console.log('mouse enter');
}).mouseleave(function(){
    $(this).find('.product-action-vertical').css({opacity:0,right:'40px'});
    console.log('mouseleave');
    
});
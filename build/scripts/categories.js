console.log('categoreis page');
$('.collapse').click(function(e){
     e.preventDefault();
     console.log('e');
    $('.widget-collapsible').toggleClass('show');
});
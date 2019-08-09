var $item = $('.carousel .item'); 
var $wHeight = 969 /* $(window).height() 969*/;
$item.eq(0).addClass('active');
$item.height($wHeight); 
$item.addClass('full-screen');

$('.carousel img').each(function() {
  var $src = $(this).attr('src');
  $(this).parent().css({
    'background-image' : 'url(' + $src + ')',
  });
  $(this).remove();
});



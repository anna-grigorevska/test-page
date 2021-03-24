$(document).ready(function() {

  // mobile navigation
  $('.btn-menu').click(function(){
    $(this).toggleClass('open');
    $('.menu').toggleClass('open');
  });
  $('.burger').click(function(){
    $(this).toggleClass('open');
    $('.overlley').toggleClass('d-block');
  });

  $('#slick-carousel').slick({
    slidesToShow: 7,
    vertical: true,
    infinite: true,
    prevArrow: '<button class="btn-prev"><img src="/img/up.svg"></button>',
    nextArrow: '<button class="btn-next"><img src="/img/down.svg"></button>',
    responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 1,
	      }
	    }
    ]
  });
})
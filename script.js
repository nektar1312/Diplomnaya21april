$(function() {
    $('.sportcar__slider-face').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.sportcar__slider-nav'
      });
      $('.sportcar__slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.sportcar__slider-face',
        dots: false,
        centerMode: false,
        arrows: false,
        focusOnSelect: true
      });
  
})

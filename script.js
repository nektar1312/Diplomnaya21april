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
        focusOnSelect: true,
        centerMode: true,
        centerPadding: '40px',
        variableWidth: true,
        responsive:
          [
            {
              breakpoint:630,
              settings:{
                slidesToShow: 3,
                
                
        
                
              },
            },
          ]
      });
  
})
$(function () {
 
  $(".comment__slider-star").rateYo({
    rating: 5,
    readOnly: true,
    starWidth: "14px",
    starHeight: "14px",
    ratedFill: "#90C93A"
    
  });
});
$('.comment__slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows:false,
  dots:true,
  pauseOnDotsHover:true,
  responsive:
          [
            {
              breakpoint:1250,
              settings:{
                
              
                slidesToShow: 3,
              },
            },
            {
              breakpoint:1000,
              settings:{
                
              
                slidesToShow: 2,
              },
            },
            {
              breakpoint:650,
              settings:{
                
              
                slidesToShow: 1.5,
              },
            },
            {
              breakpoint:500,
              settings:{
                
              
                slidesToShow: 1,
              },
            },
          ]
})
$('.comment__slider-prew').on('click', function (e) {
  e.preventDefault()
  $('.comment__slider').slick('slickPrev')
})
$('.comment__slider-next').on('click', function (e) {
  e.preventDefault()
  $('.comment__slider').slick('slickNext')
});

$('.accordion__link').on('click', function (e) {
  e.preventDefault()
  $(this).toggleClass('accordion__link--active') 
  $(this).children('.accordion__text').slideToggle() 
   
})

// if ($(window).scrollTop()>0){
//   $('.burger').addClass('burger--follow')
// }else{
//   $('.burger').removeClass('burger--follow')
// }
$('.burger,.overlay').on('click', function (e) {
  e.preventDefault()
  $('.header__burger').toggleClass('header__burger--open')
  $('.overlay').toggleClass('overlay--show')
  
})
$('.burger').on('click', function (e) {
  e.preventDefault()
  $(this).toggleClass('burger--active')
  $('.scroll').toggleClass('scroll-not')
})
;
$(".header__nav-list a").on("click", function (event) {
  event.preventDefault()
  var id  = $(this).attr('href'),
    top = $(id).offset().top
  $('body,html').animate({scrollTop: top}, 1000)
});

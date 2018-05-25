$(document).ready(function(){
  $('.affiliate-marquee').marquee();
  
  $('.featured-carousel').slick({
    autoplay: true,
    infinite: true,
    slidesToShow: 4,
    arrows: false,
    responsive:
    [{
      breakpoint: 960,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      }
    }]
  });
  
  $('.featured-carousel-controls .carousel-arrow-left').click(function(e) {
    $('.featured-carousel').slick('slickPrev');
  });
  
  $('.featured-carousel-controls .carousel-arrow-right').click(function(e) {
    $('.featured-carousel').slick('slickNext');
  });
  
  $('.motion-carousel').slick({
    autoplay: true,
    infinite: true,
    slidesToShow: 2,
    arrows: false,
    responsive:
    [{
      breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
    }]
  });
  
  $('.motion-carousel-controls .carousel-arrow-left').click(function(e) {
    $('.motion-carousel').slick('slickPrev');
  });
  
  $('.motion-carousel-controls .carousel-arrow-right').click(function(e) {
    $('.motion-carousel').slick('slickNext');
  });
});
  
function myFunction() {
  var x = document.getElementById("site-navbar");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}

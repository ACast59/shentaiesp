function myFunction() {
  var x = document.getElementById("site-navbar");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}

$(document).ready(function() {
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
  
  $('.related-carousel').slick({
    autoplay: true,
    infinite: true,
    slidesToShow: 3,
    arrows: false,
    responsive:
    [{
      breakpoint: 1080,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3
      }
    },
	{
      breakpoint: 660,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 440,
      settings: {
        slidesToShow: 1,
      }
    }]
  });
  
  $('.related-carousel-controls .carousel-arrow-left').click(function(e) {
    $('.related-carousel').slick('slickPrev');
  });
  
  $('.related-carousel-controls .carousel-arrow-right').click(function(e) {
    $('.related-carousel').slick('slickNext');
  });
  
  $('.affiliate-marquee').marquee({
    duration: 5000,
    gap: 5,
    duplicated: true,
    pauseOnHover: true
  });
  
  if ($('.back-to-top').length) {
    var scrollTrigger = 350,
    backToTop = function () {
      var scrollTop = $(window).scrollTop();
      if (scrollTop > scrollTrigger) {
        $('.back-to-top').addClass('show');
      } else {
        $('.back-to-top').removeClass('show');
      }
    };
    
    backToTop();
    
    $(window).on('scroll', function () {
      backToTop();
    });
    
    $('.back-to-top').on('click', function (e) {
      e.preventDefault();
      $('html,body').animate({
        scrollTop: 0
      }, 700);
    });
  }
});

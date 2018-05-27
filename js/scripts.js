function navbarFunction() {
  var x = document.getElementById("site-navbar");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}

$(document).ready(function() {
  $.ajax({
    url: 'https://www.shentaiesp.asia/feeds/posts/default/-/Estrenos?alt=json-in-script&max-results=8',
    type: 'get',
    dataType: "jsonp",
    success: function(data) {
      var related_posturl, related_posttitle, related_postthumb, related_postthumbnail, related_html = '',
      entry = data.feed.entry;
      if (entry !== undefined) {
        related_html = "";
        for (var i = 0; i < entry.length; i++) {
          for (var j=0; j < entry[i].link.length; j++) {
            if (entry[i].link[j].rel == "alternate") {
              related_posturl = entry[i].link[j].href;
              break;
            }
          }
          related_postthumb = entry[i].media$thumbnail.url;
          related_postthumbnail = related_postthumb.replace("/s72-c", "/w350-h225-c");
          related_posttitle = entry[i].title.$t;
          related_html += '<div><a href="' + related_posturl + '" class="featured-carousel-anchor" title="' + related_posttitle + '"><img src="' + related_postthumbnail + '" alt="' + related_posttitle + '" /><div class="featured-carousel-caption">' + related_posttitle + '</div></a></div>';
        }
        related_html += '';
        $('.featured-carousel').slick('slickAdd', related_html);
      }
    }
  });
  
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

function navbarFunction() {
  var x = document.getElementById("site-navbar");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}

$(document).ready(function() {
  $(".post-content a").addClass("exo-tg");
  $.ajax({
    url: 'https://www.hmanga.asia/feeds/posts/default?alt=json-in-script&max-results=6',
    type: 'get',
    dataType: "jsonp",
    success: function(data) {
      var motion_posturl, motion_posttitle, motion_postthumb, motion_postthumbnail, motion_postedon_months, motion_postedon_iso, motion_postedon, motion_html = '',
      entry = data.feed.entry;
      if (entry !== undefined) {
        motion_html = "";
        for (var i = 0; i < entry.length; i++) {
          for (var j=0; j < entry[i].link.length; j++) {
            if (entry[i].link[j].rel == "alternate") {
              motion_posturl = entry[i].link[j].href;
              break;
            }
          }
          motion_postthumb = entry[i].media$thumbnail.url;
          motion_postthumbnail = motion_postthumb.replace("/s72-c", "/w225-h250-c");
          motion_posttitle = entry[i].title.$t;
          motion_postedon_months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
          motion_postedon_iso = new Date(entry[i].published.$t);
          motion_postedon = motion_postedon_months[motion_postedon_iso.getMonth()] + ' ' + motion_postedon_iso.getDate() + ', ' + motion_postedon_iso.getFullYear();
          
          motion_html += '<div class="uk-width-1-3"><div class="loop-post"><a href="' + motion_posturl + '" title="' + motion_posttitle + '"><div class="loop-post-thumb"><img src="' + motion_postthumbnail + '" alt="' + motion_posttitle + '" /></div><div class="loop-post-meta">' + motion_postedon + '</div><h3 class="loop-post-title">' + motion_posttitle + '</h3></a></div></div>';
        }
        motion_html += '';
        $('.motion-carousel').slick('slickAdd', motion_html);
      }
    }
  });
  
  $('.motion-carousel').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    slidesToShow: 3,
    arrows: false,
    responsive:
    [{
      breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
    },
    {
      breakpoint: 768,
        settings: {
          slidesToShow: 2
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
    duplicated: false,
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

function related_results_labels(e) {
  for (var l = 0; l < e.feed.entry.length; l++) {
    var t = e.feed.entry[l];
    relatedTitles[relatedTitlesNum] = t.title.$t;
    var r = e.feed.entry[l].media$thumbnail.url,
      a = r.replace("/s72-c/", "/w350-h225-c/");
    if (e.feed.entry[l].media$thumbnail) var r = e.feed.entry[l].media$thumbnail.url,
      a = r.replace("/s72-c/", "/w350-h225-c/");
    else if (null != e.feed.entry[l].content.$t.match(/src=(.+?[\.jpg|\.gif|\.png]")/)) var a = e.feed.entry[l].content.$t.match(/src=(.+?[\.jpg|\.gif|\.png]")/)[1];
    else var a = "http://1.bp.blogspot.com/-a-3WZRtj7pw/VoxaVk-cPMI/AAAAAAAABMo/ivQ1HVw0ZME/s250-Ic42/no-thumbnail.png";
    relatedImage[relatedTitlesNum] = a;
    for (var n = 0; n < t.link.length; n++)
      if ("alternate" == t.link[n].rel) {
        relatedUrls[relatedTitlesNum] = t.link[n].href, relatedTitlesNum++;
        break
      }
  }
}

function removeRelatedDuplicates() {
  for (var e = new Array(0), l = new Array(0), t = new Array(0), r = 0; r < relatedUrls.length; r++) contains(e, relatedUrls[r]) || (e.length += 1, e[e.length - 1] = relatedUrls[r], l.length += 1, l[l.length - 1] = relatedTitles[r], t.length += 1, t[t.length - 1] = relatedImage[r]);
  relatedTitles = l, relatedUrls = e, relatedImage = t
}

function contains(e, l) {
  for (var t = 0; t < e.length; t++)
    if (e[t] == l) return !0;
  return !1
}

function printRelatedLabels(e) {
  for (var l = 0; l < relatedUrls.length; l++) relatedUrls[l] == e && (relatedUrls.splice(l, 1), relatedTitles.splice(l, 1), relatedImage.splice(l, 1));
  var t = Math.floor((relatedTitles.length - 1) * Math.random()),
  l = 0;
  for (relatedTitles.length > 1; l < relatedTitles.length && 20 > l && l < maxposts;) l % 2 == 1 ? document.getElementById("related_items").innerHTML += "<div class='uk-width-1-3'><div class='related-post'><a href='" + relatedUrls[t] + "' class='uk-overlay uk-overlay-hover exo-tg'><img class='uk-overlay-scale' src='" + relatedImage[t] + "' alt='" + relatedTitles[t] + "'/><div class='uk-overlay-panel uk-overlay-background uk-overlay-bottom uk-ignore'>" + relatedTitles[t] + "</div></a></div></div>" : document.getElementById("related_items").innerHTML += "<div class='uk-width-1-3'><div class='related-post'><a href='" + relatedUrls[t] + "' class='uk-overlay uk-overlay-hover exo-tg'><img class='uk-overlay-scale' src='" + relatedImage[t] + "' alt='" + relatedTitles[t] + "'/><div class='uk-overlay-panel uk-overlay-background uk-overlay-bottom uk-ignore'>" + relatedTitles[t] + "</div></a></div></div>", t < relatedTitles.length - 1 ? t++ : t = 0, l++;
  relatedUrls.splice(0, relatedUrls.length), relatedTitles.splice(0, relatedTitles.length), relatedImage.splice(0, relatedImage.length)
}

var relatedTitles = new Array,
relatedImage = new Array,
relatedTitlesNum = 0,
relatedUrls = new Array;

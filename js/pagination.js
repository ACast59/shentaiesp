function pageNavi(data) {
  var url = location.href;
  var sd = url.indexOf("/search/label/") != -1;
  var a = sd ? url.substr(url.indexOf("/search/label/") + 14, url.length) : "";
  a = a.indexOf("?") != -1 ? a.substr(0, a.indexOf("?")) : a;
  var statbackend = sd ? "/search/label/" + a + "?updated-max=" : "/search?updated-max=";
  var totalItems = data.feed.entry.length;
  var totalPages = Math.ceil(totalItems / pageNaviConf.perPage);
  if (totalPages <= 1) {
    return;
  }
  var target = 1;
  var values = [""];
  if (sd) {
    values.push("/search/label/" + a + "?max-results=" + pageNaviConf.perPage);
  } else {
    values.push("/?max-results=" + pageNaviConf.perPage);
  }
  var page = 2;
  for (; page <= totalPages; page++) {
    var i = (page - 1) * pageNaviConf.perPage - 1;
    var summary = data.feed.entry[i].published.$t;
    var key = summary.substring(0, 19) + summary.substring(23, 29);
    key = encodeURIComponent(key);
    if (url.indexOf(key) != -1) {
      target = page;
    }
    values.push(statbackend + key + "&max-results=" + pageNaviConf.perPage);
  }
  pageNavi.show(values, target, totalPages);
}

pageNavi.show = function(pages, currentPage, totalPages) {
  var leftcnt = Math.floor((pageNaviConf.numPages - 1) / 2);
  var targetSrcDist = pageNaviConf.numPages - 1 - leftcnt;
  var startPage = currentPage - leftcnt;
  if (startPage <= 0) {
    startPage = 1;
  }
  endPage = currentPage + targetSrcDist;
  if (endPage - startPage < pageNaviConf.numPages) {
    endPage = startPage + pageNaviConf.numPages - 1;
  }
  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = totalPages - pageNaviConf.numPages + 1;
  }
  if (startPage <= 0) {
    startPage = 1;
  }
  var b = '<span class="pages">Pagina ' + currentPage + " de " + totalPages + "</span> ";
  if (startPage > 1) {
    b = b + ('<a href="' + pages[1] + '">' + pageNaviConf.firstText + "</a>");
  }
  if (currentPage > 1) {
    b = b + ('<a href="' + pages[currentPage - 1] + '">' + pageNaviConf.prevText + "</a>");
  }
  i = startPage;
  for (; i <= endPage; ++i) {
    if (i == currentPage) {
      b = b + ('<span class="current">' + i + "</span>");
    } else {
      b = b + ('<a href="' + pages[i] + '">' + i + "</a>");
    }
  }
  if (currentPage < totalPages) {
    b = b + ('<a href="' + pages[currentPage + 1] + '">' + pageNaviConf.nextText + "</a>");
  }
  if (endPage < totalPages) {
    b = b + ('<a href="' + pages[totalPages] + '">' + pageNaviConf.lastText + "</a>");
  }
  document.write(b);
};

(function() {
  var url = location.href;
  if (url.indexOf("?q=") != -1 || url.indexOf(".html") != -1) {
    return;
  }
  var s = url.indexOf("/search/label/") + 14;
  if (s != 13) {
    var i = url.indexOf("?");
    var a = i == -1 ? url.substring(s) : url.substring(s, i);
    document.write('<script type="text/javascript" src="/feeds/posts/summary/-/' + a + '?alt=json-in-script&callback=pageNavi&max-results=99999">\x3c/script>');
  } else {
    document.write('<script type="text/javascript" src="/feeds/posts/summary?alt=json-in-script&callback=pageNavi&max-results=99999">\x3c/script>');
  }
})();

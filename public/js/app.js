
$(document).ready(function() {

  var isMobile = function(){
    var width = document.body.scrollWidth;
    return width < 600;
  };

  $(document).foundation();

  $('#fullpage').fullpage({
    //Navigation
    menu: '.fixed-header',
    lockAnchors: false,
    anchors:['home', 'options_page'],
    recordHistory: false,
    fixedElements: '.navbar',
    paddingTop: '0px',
    paddingBottom: '0px',
  });

});

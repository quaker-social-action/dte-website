$(document).ready(function() {
  var isMobile = function(){
    var width = document.body.scrollWidth;
    return width < 600;
  };

  $(document).foundation();
  
  $('#fullpage').fullpage({
    //Navigation
    menu: '#menu',
    lockAnchors: false,
    anchors:['bespoke', 'map', 'extra-option', 'bespoke_summary', 'bespoke_footer'],
    navigation: true,
    navigationPosition: 'right',
    showActiveTooltip: true,
    recordHistory: false,
    fixedElements: '.fixed-header',

  });
});

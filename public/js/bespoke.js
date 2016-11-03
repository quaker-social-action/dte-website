$(document).ready(function() {
  $('#fullpage').fullpage({
    //Navigation
    menu: '#menu',
    lockAnchors: false,
    anchors:['bespoke', 'map', 'extra-option', 'bespoke_summery', 'bespoke_footer'],
    navigation: false,
    navigationPosition: 'right',
    navigationTooltips: ['firstSlide', 'secondSlide'],
    showActiveTooltip: false,
    slidesNavigation: true,
    slidesNavPosition: 'bottom',

  });
  var isMobile = function(){
    var width = document.body.scrollWidth;
    return width < 600;
  };
});

$(document).foundation();

var fixedHeader = document.getElementById('fixed-header');

var granimInstance = new Granim({
    element: '#landingpage-background',
    name: 'basic-gradient',
    direction: 'left-right',
    opacity: [1, 1],
    isPausedWhenNotInView: true,
    states : {
        "default-state": {
            gradients: [
                ['#BE94CB', '#674B7E'],
                ['#83a4d4', '#9B72C5'],
                ['#9D50BB', '#6E48AA']
            ]
        }
    }
});

$(document).ready(function() {
    var isMobile = function(){
      var width = document.body.scrollWidth;
      return width < 600;
    };

    $('#fullpage').fullpage({
      anchors:['landing', 'info', 'option1', 'option2', 'option3'],
      onLeave: function(index, nextIndex, direction) {

        if(index == 1 && direction =='down') {
          TweenMax.to('.fixed-header-links', 0.5, {css:{color: 'black', opacity: 0.5}});
        } else if(index === 2 && direction === 'up') {
          TweenMax.to('.fixed-header-links', 0.5, {css:{color: 'white', opacity: 1}});
        }
      },
      responsiveWidth: 700
    });
});

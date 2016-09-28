var fixedHeader = document.getElementById('fixed-header');

$(document).ready(function() {

    $('#fullpage').fullpage({

      anchors:['landing', 'info', 'option1', 'option2', 'option3'],
      onLeave: function(index, nextIndex, direction) {

        if(index == 1 && direction =='down') {
          TweenMax.to('.fixed-header-links', 0.5, {css:{color: 'black', opacity: 0.5}})
        } else if(index === 2 && direction === 'up') {
          TweenMax.to('.fixed-header-links', 0.5, {css:{color: 'white', opacity: 1}})
        }
      }
    })
});

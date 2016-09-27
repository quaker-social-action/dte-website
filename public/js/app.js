var fixedHeader = document.getElementById('fixed-header');

$(document).ready(function() {

    $('#fullpage').fullpage({

      anchors:['landing', 'info'],
      onLeave: function(index, nextIndex, direction) {

        if(index == 1 && direction =='down') {
          TweenMax.to(fixedHeader, 0.5, {backgroundColor: 'rgba(0,0,0,0.3)'})
        } else if(index === 2 && direction === 'up') {
          TweenMax.to(fixedHeader, 0.5, {backgroundColor: 'transparent'})
        }
      }
    })
});

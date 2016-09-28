//Globals

//

var costListItem = Array.from(document.getElementsByClassName('cost-list-item'));

costListItem.map((el) => {el.addEventListener('click', function(event){

  if (event.target.style.textDecoration === 'line-through') {
    event.target.style.textDecoration = 'none';
    event.target.childNodes[0].innerHTML = 'done';

  } else {
    event.target.style.textDecoration = 'line-through';
    event.target.childNodes[0].innerHTML = 'clear';
  }
})});

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

  $('#fullpage').fullpage({

    anchors:['landing', 'options', 'option1', 'option2', 'option3', 'final'],
    onLeave: function(index, nextIndex, direction) {

      if(index == 1 && direction =='down') {
        TweenMax.to('.fixed-header-links', 0.5, {css:{color: 'black', opacity: 0.5}})
      } else if(index === 2 && direction === 'up') {
        TweenMax.to('.fixed-header-links', 0.5, {css:{color: 'white', opacity: 1}})
      }
    }
  })
});

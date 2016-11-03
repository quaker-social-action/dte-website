//Globals

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

    });
});
var costListItem = [].slice.call(document.getElementsByClassName('cost-list-item'));

costListItem.map(function(el){
  el.addEventListener('click', function(event){
    if (event.target.tagName === 'I') {
      return;
    }

    if (event.target.style.textDecoration === 'line-through') {
      event.target.style.textDecoration = 'none';
      event.target.childNodes[0].innerHTML = 'done';
      updatePurple(event);
    } else {
      event.target.style.textDecoration = 'line-through';
      event.target.childNodes[0].innerHTML = 'clear';
      updatePurple(event);
    }
  });
});

function updatePurple(event) {
  var id = event.target.id;
  var number = id[4];
  var purple = '#purple' + number;
  if ($(purple).hasClass('purpleBoxClicked')) {
    $(purple).removeClass('purpleBoxClicked');
  } else {
    $(purple).addClass('purpleBoxClicked');
  }
  calculateOptionCost();
}




  // var btn = $('.route a');

//   btn.click(function(e){
//     e.preventDefault();
//     var location = $(this).attr('href');
//     loadContent(location);
//     window.location.hash = location;
//   })
//
//
//
//   function loadContent(location) {
//
//     var route = location.replace('#', '');
//
//     $('.section.options').hide();
//     switch (route) {
//       case 'direct-cremation':
//         $('.section.cremation-direct').show();
//         break;
//       case 'simple':
//         $('.section.simple').show();
//         break;
//       case 'bespoke':
//         $('.section.bespoke').show();
//         break;
//       default:
//         break;
//     }
//
//     $('.section.last-page').show();
//
//   }
//   // Hide all the option sections
//   $('.section.options').hide();
// });

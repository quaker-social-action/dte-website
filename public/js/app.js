
// TODO: this selector is ugly... but is nicer thant what we had before
// this should be changed by a class at some point
$('[id^=#purple]').click(function() {
  $(this).toggleClass('purpleBoxClicked');

  // TODO: WTF is this number?
  var number = $(this).attr('id').replace(/\D/g, '');

  updateList(number);
  calculateOptionCost();
  $('#cost').html('£' + (regionCost + optionCosts));
  $('#cost-breakdown').html('£' + (regionCost + optionCosts));
});

function updateList(number) {
  var id = 'list' + number;
  // TODO: never change the style with JS. We can just add classes!
  if (document.getElementById(id).style.textDecoration === 'line-through') {
    document.getElementById(id).style.textDecoration = 'none';
    document.getElementById(id).childNodes[0].innerHTML = 'done';
  } else {
    document.getElementById(id).style.textDecoration = 'line-through';
    document.getElementById(id).childNodes[0].innerHTML = 'clear';
  }
  //updatePurple(event);
}

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

$(document).ready(function() {
  $('#fullpage').fullpage({
    //Navigation
    menu: '#menu',
    lockAnchors: false,
    anchors:['home', 'options_page'],
    navigation: false,
    navigationPosition: 'right',
    navigationTooltips: ['firstSlide', 'secondSlide'],
    showActiveTooltip: false,
    slidesNavigation: true,
    slidesNavPosition: 'bottom',
  });
});


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

var regionCost = 4263;
var optionCosts = 0;
var cremation = true; //false if burial
var regionName = 'London';

var regionOption = {
  Wales: {
    c: 3348,
    b: 4150,
    ordersheet: 82,
    notice: 57,
    flowers: 167,
    venue: 311,
    catering: 271,
    limousine: 310
  },
  'the South East': {
    c: 3633,
    b: 4716,
    ordersheet: 74,
    notice: 58,
    flowers: 141,
    venue: 182,
    catering: 403,
    limousine: 252
  },
  'London': {
    c: 4263,
    b: 6974,
    ordersheet: 76,
    notice: 84,
    flowers: 171,
    venue: 313,
    catering: 662,
    limousine: 282
  },
  'the Midlands': {
    c: 3377,
    b: 4594,
    ordersheet: 84,
    notice: 53,
    flowers: 159,
    venue: 178,
    catering: 352,
    limousine: 220
  },
  Yorkshire: {
    c: 3526,
    b: 4594,
    ordersheet: 75,
    notice: 64,
    flowers: 135,
    venue: 147,
    catering: 345,
    limousine: 357
  },
  Scotland: {
    c: 3322,
    b: 4383,
    ordersheet: 74,
    notice: 73,
    flowers: 166,
    venue: 214,
    catering: 390,
    limousine: 197
  },
  'the South West': {
    c: 3749,
    b: 4556,
    ordersheet: 65,
    notice: 70,
    flowers: 147,
    venue: 195,
    catering: 534,
    limousine: 268
  },
  'the North': {
    c: 3362,
    b: 4305,
    ordersheet: 54,
    notice: 63,
    flowers: 139,
    venue: 126,
    catering: 304,
    limousine: 168
  },
  'Northern Ireland': {
    c: 3281,
    b: 3524,
    ordersheet: 73,
    notice: 76,
    flowers: 153,
    venue: 108,
    catering: 279,
    limousine: 218
  }
};

var clickable = [].slice.call($('.clickable').children());
clickable.map(function(region) {
  region.addEventListener('click', function(){
    handleRegionClick(region.id);
    clickable.map(function(el){
      el.style.fill = '#9C6FC7';
    });
    region.style.fill = '#FFB88B';
  });
  region.addEventListener('mouseover', function(){
    clickable.map(function(el){
      if(el.style.fill === 'purple') {
        el.style.fill = '#9C6FC7';
      }
    });
    if(region.style.fill !== '#FFB88B') {
      region.style.fill = 'purple';
    }
  });
});

function handleRegionClick(region) {
  $('#displayed-region').html(region);
  calculateRegionCost(region, cremation);
  regionName = region;
  $('#cost').html('£' + (regionCost + optionCosts));
}

function calculateRegionCost(region, cremation) {
  var cb;
  if (cremation === true) {
    cb = 'c';
  } else {
    cb = 'b';
  }
  regionCost = regionOption[region][cb];
  calculateOptionCost();
}

function calculateOptionCost(){
  optionCosts = 0;
  if ($('#purple0').hasClass('purpleBoxClicked')) {
    optionCosts += regionOption[regionName].ordersheet;
  }
  if ($('#purple1').hasClass('purpleBoxClicked')) {
    optionCosts += regionOption[regionName].notice;
  }
  if ($('#purple2').hasClass('purpleBoxClicked')) {
    optionCosts += regionOption[regionName].flowers;
  }
  if ($('#purple3').hasClass('purpleBoxClicked')) {
    optionCosts += regionOption[regionName].venue;
  }
  if ($('#purple4').hasClass('purpleBoxClicked')) {
    optionCosts += regionOption[regionName].catering;
  }
  if ($('#purple5').hasClass('purpleBoxClicked')) {
    optionCosts += regionOption[regionName].limousine;
  }
}

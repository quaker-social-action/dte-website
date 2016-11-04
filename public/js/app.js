//switch button on map page
var switchBtnRight = document.querySelector('.switch-button-case.right');
var switchBtnLeft = document.querySelector('.switch-button-case.left');
var activeSwitch = document.querySelector('.active');

function switchLeft(){
  switchBtnRight.classList.remove('active-case');
  switchBtnLeft.classList.add('active-case');
  // TODO: change this for a class
  activeSwitch.style.left = '0%';
}

function switchRight(){
  switchBtnRight.classList.add('active-case');
  switchBtnLeft.classList.remove('active-case');
  // TODO: change this for a class
  // don't change styles inline
  activeSwitch.style.left = '50%';
}

switchBtnLeft.addEventListener('click', function(){
  switchLeft();
});

switchBtnRight.addEventListener('click', function(){
  switchRight();
});

// TODO: this selector is ugly... but is nicer thant what we had before
// this should be changed by a class at some point
$('[id^=purple]').click(function() {
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

$(document).ready(function() {
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

var regionCost = 4263;
var optionCosts = 0;
var cremation = true; //false if burial
var regionName = 'London';

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

$(document).ready(function() {
  // TODO: this selector is ugly... but is nicer thant what we had before
  // this should be changed by a class at some point
  $('[id^=purple]').click(function() {
    $(this).toggleClass('purpleBoxClicked');

    // TODO: WTF is this number?
    var number = $(this).attr('id').replace(/\D/g, '');

    updateList(number);
    //calculateOptionCost();
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
    $(this).toggleClass('purpleBoxClicked');
    calculateOptionCost();
  }

  $(document).foundation();

  $('#fullpage').fullpage({
    //Navigation
    menu: '.fixed-header',
    lockAnchors: false,
    anchors:['home', 'options_page'],
    recordHistory: false,
    fixedElements: '.navbar',

  });

  $('.cost-list-item').click(function(event){
    if (event.target.tagName === 'I') {
      return;
    }

    // TODO: add classes to change the style instead of change it inline
    if (event.target.style.textDecoration === 'line-through') {
      event.target.style.textDecoration = 'none';
      event.target.childNodes[0].innerHTML = 'done';
    } else {
      event.target.style.textDecoration = 'line-through';
      event.target.childNodes[0].innerHTML = 'clear';
    }
    $(this).toggleClass('purpleBoxClicked');
    calculateOptionCost();
  });
});

// Default selected options
window.selectedOptions = {
  burial: true,
  cremation: false,
};

$(function(selectedOptions){
  //switch button on map page
  var $switchBtnRight = $('.switch-button-case.right');
  var $switchBtnLeft = $('.switch-button-case.left');
  var $activeSwitch = $('.active');

  function switchLeft(){
    console.log('left');
    $switchBtnRight.removeClass('active-case');
    $switchBtnLeft.addClass('active-case');
    // TODO: change this for a class
    $activeSwitch[0].style.left = '0%';

    // delete selectedOptions.cremation;
    window.selectedOptions.cremation = false;
    window.selectedOptions.burial = true;
  }

  function switchRight(){
    console.log('right');
    $switchBtnRight.addClass('active-case');
    $switchBtnLeft.removeClass('active-case');
    // TODO: change this for a class
    // don't change styles inline
    $activeSwitch[0].style.left = '50%';

    // delete selectedOptions.cremation;
    window.selectedOptions.burial = false;
    window.selectedOptions.cremation = true;

  }

  $switchBtnLeft.click(switchLeft);
  $switchBtnRight.click(switchRight);

  function addToSummaryList() {
    var boxClicked = $(this).attr('id');
    var list = $('#dynamic-list');
    var listItems = [];
    // TODO: Don't let add item again if it's already in the array

    switch (boxClicked) {
    case 'purple0':
      listItems.push('Order Sheets');
      break;
    case 'purple1':
      listItems.push('Funeral notice');
      break;
    case 'purple2':
      listItems.push('Flowers');
      break;
    case 'purple3':
      listItems.push('Venue hire');
      break;
    case 'purple4':
      listItems.push('Catering');
      break;
    case 'purple5':
      listItems.push('Limousine');
      break;
    default:
    }

    listItems.map(function(el) {
      list.append('<li>' + el + '</li>');
    });
  }
  
  $('.extra-option-item').click(addToSummaryList);

  $(document).foundation();

  $('#fullpage').fullpage({
    //Navigation
    menu: '.fixed-header',
    lockAnchors: false,
    anchors:['home', 'options_page'],
    recordHistory: false,
    fixedElements: '.navbar',
    paddingTop: '0',
    paddingBottom: '0',
  });
}(window.selectedOptions));

// Default selected options
window.selectedOptions = {
  burial: true,
};

$(function(selectedOptions){
  //switch button on map page
  var $switchBtnRight = $('.switch-button-case.right');
  var $switchBtnLeft = $('.switch-button-case.left');
  var $activeSwitch = $('.active');

  function switchLeft(){
    $switchBtnRight.removeClass('active-case');
    $switchBtnLeft.addClass('active-case');
    // TODO: change this for a class
    $activeSwitch[0].style.left = '0%';

    delete selectedOptions.burial;
    selectedOptions.cremation = true;
  }

  function switchRight(){
    $switchBtnRight.addClass('active-case');
    $switchBtnLeft.removeClass('active-case');
    // TODO: change this for a class
    // don't change styles inline
    $activeSwitch[0].style.left = '50%';

    delete selectedOptions.cremation;
    selectedOptions.burial = true;
  }

  $switchBtnLeft.click(switchLeft);
  $switchBtnRight.click(switchRight);

  $(document).foundation();

  $('#fullpage').fullpage({
    //Navigation
    menu: '.fixed-header',
    lockAnchors: false,
    anchors:['home', 'options_page'],
    recordHistory: false,
    fixedElements: '.navbar',
    paddingTop: '0px',
    paddingBottom: '0px',
    controlArrows: true,
  });
}(window.selectedOptions));

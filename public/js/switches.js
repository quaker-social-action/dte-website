$(function(selectedOptions){
  //switch button on map page
  var $switchBtnRight = $('.switch-button-case.right');
  var $switchBtnLeft = $('.switch-button-case.left');
  var $activeSwitch = $('.active');

  function switchLeft(){
    $switchBtnRight.removeClass('active-case');
    $switchBtnLeft.addClass('active-case');
    // TODO: change this for a class
    $activeSwitch.css('left', '0%');

    selectedOptions.set('burial', false);
    selectedOptions.set('cremation', true);
  }

  function switchRight(){
    $switchBtnLeft.removeClass('active-case');
    $switchBtnRight.addClass('active-case');
    // TODO: change this for a class
    // don't change styles inline
    $activeSwitch.css('left', '50%');

    selectedOptions.set('cremation', false);
    selectedOptions.set('burial', true);
  }

  $switchBtnLeft.click(switchLeft);
  $switchBtnRight.click(switchRight);
}(window.selectedOptions));

$(function(selectedOptions) {
  var $clickableRegion = $('.clickable').children();

  $clickableRegion.click(handleRegionClick);
  $clickableRegion.hover(handleRegionHover);

  function handleRegionClick() {
    var region = $(this).attr('id');
    $clickableRegion.removeClass('selected');
    $clickableRegion.css('fill', '#9C6FC7');
    $(this).addClass('selected');
    $(this).css('fill', '#FFB88B');

    selectedOptions.set('region', region);
  }

  function handleRegionHover() {
    var $selected = $('.selected');
    $clickableRegion.not($selected).css('fill', '#9C6FC7');
    $(this).not($selected).css('fill', 'purple');
  }

}(window.selectedOptions));

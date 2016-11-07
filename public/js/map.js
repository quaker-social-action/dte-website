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

<<<<<<< HEAD
  function calculateCost(region, options) {
    var regionPrices = regionOption[region];

    return Object.keys(options)
      .filter(function(option){
        return options[option];
      })
      .reduce(function(price, option){
        return price + regionPrices[option];
      }, 0);
  }

=======
>>>>>>> 57440e4b453907a53d015f765674ccbc11f87868
}(window.selectedOptions));

$(function(selectedOptions) {
  var regionOption = {
    Wales: {
      cremation: 3348,
      burial: 4150,
      ordersheet: 82,
      notice: 57,
      flowers: 167,
      venue: 311,
      catering: 271,
      limousine: 310
    },
    'the South East': {
      cremation: 3633,
      burial: 4716,
      ordersheet: 74,
      notice: 58,
      flowers: 141,
      venue: 182,
      catering: 403,
      limousine: 252
    },
    'London': {
      cremation: 4263,
      burial: 6974,
      ordersheet: 76,
      notice: 84,
      flowers: 171,
      venue: 313,
      catering: 662,
      limousine: 282
    },
    'the Midlands': {
      cremation: 3377,
      burial: 4594,
      ordersheet: 84,
      notice: 53,
      flowers: 159,
      venue: 178,
      catering: 352,
      limousine: 220
    },
    Yorkshire: {
      cremation: 3526,
      burial: 4594,
      ordersheet: 75,
      notice: 64,
      flowers: 135,
      venue: 147,
      catering: 345,
      limousine: 357
    },
    Scotland: {
      cremation: 3322,
      burial: 4383,
      ordersheet: 74,
      notice: 73,
      flowers: 166,
      venue: 214,
      catering: 390,
      limousine: 197
    },
    'the South West': {
      cremation: 3749,
      burial: 4556,
      ordersheet: 65,
      notice: 70,
      flowers: 147,
      venue: 195,
      catering: 534,
      limousine: 268
    },
    'the North': {
      cremation: 3362,
      burial: 4305,
      ordersheet: 54,
      notice: 63,
      flowers: 139,
      venue: 126,
      catering: 304,
      limousine: 168
    },
    'Northern Ireland': {
      cremation: 3281,
      burial: 3524,
      ordersheet: 73,
      notice: 76,
      flowers: 153,
      venue: 108,
      catering: 279,
      limousine: 218
    }
  };

  var $clickableRegion = $('.clickable').children();

  $clickableRegion.click(handleRegionClick);
  $clickableRegion.hover(handleRegionHover);

  function handleRegionClick() {
    var region = $(this).attr('id');
    $clickableRegion.removeClass('selected');
    $clickableRegion.css('fill', '#9C6FC7');
    $(this).addClass('selected');
    $(this).css('fill', '#FFB88B');

    $('#displayed-region').html(region);
    var cost = calculateCost(region, selectedOptions);
    $('#cost').html('£' + cost);
  }

  function handleRegionHover() {
    var $selected = $('.selected');
    $clickableRegion.not($selected).css('fill', '#9C6FC7');
    $(this).not($selected).css('fill', 'purple');
  }

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

}(window.selectedOptions));

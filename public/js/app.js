$(function(window, Observable){
  var regionOptions = {
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
>>>>>>> 57440e4b453907a53d015f765674ccbc11f87868


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

  // Default selected options
  var selectedOptions = new Observable({
    region: 'London',
    burial: true,
  });

  selectedOptions.onChange(calculateCost);

  function calculateCost() {
    var _this = this;
    var region = _this.region;
    var regionPrices = regionOptions[region];
    var cost = Object.keys(_this)
      .filter(function(option){
        return option !== 'region' && _this[option];
      })
      .reduce(function(price, option){
        return price + regionPrices[option];
      }, 0);

    $('#displayed-region').html(region);
    $('#cost').html('£' + cost);
  }

  window.selectedOptions = selectedOptions;

}(window, window.Observable));

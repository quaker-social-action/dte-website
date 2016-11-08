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

  function handleOptionClick(){
    $(this).find('.overlay-item').toggleClass('hidden', 400, 'easeOutSine');
    $(this).find('.price').toggleClass('hide', 400, 'easeOutSine');
    var isOn = $(this).find('.list-item-active').hasClass('hidden');
    var itemName = $(this).data('item-name');
    var itemPrice = regionOptions[selectedOptions.get('region')][itemName];
    $(this).find('.price').html('£' + itemPrice);
    selectedOptions.set(itemName, !isOn);
  }

  $('.extra-option-item').click(handleOptionClick);

  $(document).foundation();


  $('#fullpage').fullpage({
    menu: '.fixed-header',
    lockAnchors: false,
    anchors:['home', 'options_page'],
    recordHistory: false,
    fixedElements: '.navbar',
    paddingTop: '0',
    paddingBottom: '0',
    responsiveWidth: '1050',
    animateAnchor: false,
  });

  // Default selected options
  var selectedOptions = new Observable({
    region: 'London',
    burial: true,
    cremation: false,
    ordersheet: false,
    notice: false,
    flowers: false,
    venue: false,
    catering: false,
    limousine: false
  });

  selectedOptions.onChange(calculateCost);
  selectedOptions.onChange(addToSummaryList);

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
    $('.cost-breakdown').html('£' + cost);
  }

  function addToSummaryList() {

    var list = $('#dynamic-list');
    var listItems = [];
    // TODO: Map keys to string name to avoid this horriffic if statement
    for(var key in this){
      if(this[key] === true && key === 'ordersheet'){
        listItems.push('Order Sheets');
      }
      if(this[key] === true && key === 'notice') {
        listItems.push('Funeral notice');
      }
      if(this[key] === true && key === 'flowers') {
        listItems.push('Flowers');
      }
      if(this[key] === true && key === 'venue') {
        listItems.push('Venue Hire');
      }
      if(this[key] === true && key === 'catering') {
        listItems.push('Catering');
      }
      if(this[key] === true && key === 'limousine') {
        listItems.push('Limousine');
      }
    }
    list.html('');
    listItems.map(function(el) {
      list.append('<li>' + el + '</li>');
    });
  }

  selectedOptions.set('init');

  window.selectedOptions = selectedOptions;
}(window, window.Observable));

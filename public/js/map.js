$(function() {
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

});

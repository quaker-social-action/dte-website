var regionCost = 4263;
var optionCosts = 0;
var cremation = true; //false if burial
var regionName = 'wales';

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
}

const clickable = Array.from($('.clickable').children())
clickable.map((region) => {
    region.addEventListener('click', () => {
        handleRegionClick(region.id)
        clickable.map((el) => {
            el.style.fill = '#9C6FC7';
        })
        region.style.fill = '#FFB88B'
    })
    region.addEventListener('mouseover', () => {
        clickable.map((el) => {
            if(el.style.fill === 'purple') {
                el.style.fill = '#9C6FC7'
            }
        })
        if(region.style.fill !== '#FFB88B') {
            region.style.fill = 'purple'
        }
    })
})

function handleRegionClick(region) {
  console.log(region)
    $('#displayed-region').html(region)
    calculateRegionCost(region, cremation)
    regionName = region
    $('#cost').html('£' + (regionCost + optionCosts))
}



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
    if ($(`#purple0`).hasClass('purpleBoxClicked')) {
        optionCosts += regionOption[regionName].ordersheet
    }
    if ($(`#purple1`).hasClass('purpleBoxClicked')) {
        optionCosts += regionOption[regionName].notice
    }
    if ($(`#purple2`).hasClass('purpleBoxClicked')) {
        optionCosts += regionOption[regionName].flowers
    }
    if ($(`#purple3`).hasClass('purpleBoxClicked')) {
        optionCosts += regionOption[regionName].venue
    }
    if ($(`#purple4`).hasClass('purpleBoxClicked')) {
        optionCosts += regionOption[regionName].catering
    }
    if ($(`#purple5`).hasClass('purpleBoxClicked')) {
        optionCosts += regionOption[regionName].limousine
    }
}

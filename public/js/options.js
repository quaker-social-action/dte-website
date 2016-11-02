
$('#purple0').click(function() {
  $(this).toggleClass('purpleBoxClicked');

  updateList(0);
  calculateOptionCost();
  $('#cost').html('£' + (regionCost + optionCosts));
  $('#cost-breakdown').html('£' + (regionCost + optionCosts));
});

$('#purple1').click(function () {
  $(this).toggleClass('purpleBoxClicked');

  updateList(1);
  calculateOptionCost();
  $('#cost').html('£' + (regionCost + optionCosts));
  $('#cost-breakdown').html('£' + (regionCost + optionCosts));
});

$('purple2').click(function () {
  $(this).toggleClass('purpleBoxClicked');

  updateList(2);
  calculateOptionCost();
  $('#cost').html('£' + (regionCost + optionCosts));
  $('#cost-breakdown').html('£' + (regionCost + optionCosts));
});

$('#purple3').click(function () {
  $(this).toggleClass('purpleBoxClicked');

  updateList(3);
  calculateOptionCost();
  $('#cost').html('£' + (regionCost + optionCosts));
  $('#cost-breakdown').html('£' + (regionCost + optionCosts));
});

$('#purple4').click(function () {
  $(this).toggleClass('purpleBoxClicked');

  updateList(4);
  calculateOptionCost();
  $('#cost').html('£' + (regionCost + optionCosts));
  $('#cost-breakdown').html('£' + (regionCost + optionCosts));
});

$('#purple5').click(function () {
  $(this).toggleClass('purpleBoxClicked');

  updateList(5);
  calculateOptionCost();
  $('#cost').html('£' + (regionCost + optionCosts));
  $('#cost-breakdown').html('£' + (regionCost + optionCosts));
});

function updateList(number) {
  var id = 'list' + number;
  if (document.getElementById(id).style.textDecoration === 'line-through') {
    document.getElementById(id).style.textDecoration = 'none';
    document.getElementById(id).childNodes[0].innerHTML = 'done';
  } else {
    document.getElementById(id).style.textDecoration = 'line-through';
    document.getElementById(id).childNodes[0].innerHTML = 'clear';
  }
  updatePurple(event);
}

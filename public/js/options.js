
document.getElementById(`purple0`).addEventListener('click', function () {
    if ($(`#purple0`).hasClass('purpleBoxClicked')) {
        $(`#purple0`).removeClass('purpleBoxClicked');
    } else {
        $(`#purple0`).addClass('purpleBoxClicked');
    }
    updateList(0)
    calculateOptionCost();
})

document.getElementById(`purple1`).addEventListener('click', function () {
    if ($(`#purple1`).hasClass('purpleBoxClicked')) {
        $(`#purple1`).removeClass('purpleBoxClicked');
    } else {
        $(`#purple1`).addClass('purpleBoxClicked');
    }
    updateList(1)
    calculateOptionCost();
})

document.getElementById(`purple2`).addEventListener('click', function () {
    if ($(`#purple2`).hasClass('purpleBoxClicked')) {
        $(`#purple2`).removeClass('purpleBoxClicked');
    } else {
        $(`#purple2`).addClass('purpleBoxClicked');
    }
    updateList(2)
    calculateOptionCost();
})

document.getElementById(`purple3`).addEventListener('click', function () {
    if ($(`#purple3`).hasClass('purpleBoxClicked')) {
        $(`#purple3`).removeClass('purpleBoxClicked');
    } else {
        $(`#purple3`).addClass('purpleBoxClicked');
    }
    updateList(3)
    calculateOptionCost();
})
document.getElementById(`purple4`).addEventListener('click', function () {
    if ($(`#purple4`).hasClass('purpleBoxClicked')) {
        $(`#purple4`).removeClass('purpleBoxClicked');
    } else {
        $(`#purple4`).addClass('purpleBoxClicked');
    }
    updateList(4)
    calculateOptionCost();
})
document.getElementById(`purple5`).addEventListener('click', function () {
    if ($(`#purple5`).hasClass('purpleBoxClicked')) {
        $(`#purple5`).removeClass('purpleBoxClicked');
    } else {
        $(`#purple5`).addClass('purpleBoxClicked');
    }
    updateList(5)
    calculateOptionCost();
})

function updateList(number) {
    var id = 'list' + number
    if (document.getElementById(id).style.textDecoration === 'line-through') {
        document.getElementById(id).style.textDecoration = 'none';
        document.getElementById(id).childNodes[0].innerHTML = 'done';
        updatePurple(event);
    } else {
        document.getElementById(id).style.textDecoration = 'line-through';
        document.getElementById(id).childNodes[0].innerHTML = 'clear';
        updatePurple(event);
    }
}

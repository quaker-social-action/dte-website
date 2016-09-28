const clickable = Array.from($('.clickable').children())
clickable.map((region) => {
  region.addEventListener('click', () => {
    handleRegionClick(region.id)
      clickable.map((el) => {
        el.style.fill = '#008000';
      })
    region.style.fill = 'blue'
  })
  region.addEventListener('mouseover', () => {
    clickable.map((el) => {
      if(el.style.fill === 'yellow') {
        el.style.fill = '#008000'
      }
    })
    if(region.style.fill !== 'blue') {
      region.style.fill = 'yellow'
    }
  })
})
function handleRegionClick(region) {
  $('#displayed-region').html(region)
}


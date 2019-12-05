// import * as d3 from 'd3'

// const margin = { top: 100, right: 100, bottom: 100, left: 100 }
// const width = 960 - margin.left - margin.right
// const height = 500 - margin.top - margin.bottom

// const svg = d3
//   .select('#chart-04')
//   .append('svg')
//   .attr('width', width + margin.left + margin.right)
//   .attr('height', height + margin.top + margin.bottom)
//   .append('g')
//   .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
//   .style('align', 'center')
;(function() {
  'use strict'

  // define variables
  const items = document.querySelectorAll('.timeline li')

  // check if an element is in viewport
  // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect()
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    )
  }

  function callbackFunc() {
    for (let i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add('in-view')
      }
    }
  }

  // listen for events
  window.addEventListener('load', callbackFunc)
  window.addEventListener('resize', callbackFunc)
  window.addEventListener('scroll', callbackFunc)
})()

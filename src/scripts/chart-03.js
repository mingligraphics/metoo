import * as d3 from 'd3'

const margin = { top: 20, left: 20, right: 20, bottom: 20 }

const height = 600 - margin.top - margin.bottom
const width = 500 - margin.left - margin.right

const svg = d3
  .select('#chart-03') 
  .append('svg')
  .attr('width', width + margin.left + margin.right)
  .attr('height', height + margin.top + margin.bottom)
  .append('g')
  .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')

  // this is the parameter part useful for exploration
// you can play with these numbers
const numCol = 10
const numRow = 16
const pad = 4

// here some pre-backed calculations useful for the next part
const tot = numCol*numRow
const _w = width/numCol
const _h = height/numRow

// this portion creates the columns
const cols = svg.selectAll('g')
.data(d3.range(numCol))
.enter()
.append('g')
.attr('transform', function(d, i){
  return 'translate(' + i*_w + ','+(pad/2)*-1+')'
})

// and here the rows, for each column
var all = cols.selectAll('g')
.data(d3.range(numRow))
.enter()
.append('g')
.attr('transform', function(d, i){
  return 'translate('+(pad/2)*-1+',' + i*_h + ')'
})

// then, for each cell we appends a rect
all.append('circle')
.attr('class', 'dot')
  .attr('cx', _w/2)
  .attr('cy', _w/4)
  .attr('r', 10)

  function render() {
    // Grabbing the div that our svg is inside of
    // and asking it wide it is
    // "hey <svg> that is really a <g>, go through
    // your parents until you find a div"
    const svgContainer = svg.node().closest('div')
    const svgWidth = svgContainer.offsetWidth
    console.log(svgWidth)

    // .node() means "no really give me the HTML element,
    //    not the weird d3 representation"
    // .parentNode means "give me the svg that's outside
    //    of the g," which we can actually change
    //    the size of with .attr
    // .closest('svg') means "go through your parents until
    //   you find an svg, in case we have a g in a g in a g"
    const actualSvg = d3.select(svg.node().closest('svg'))
    actualSvg.attr('width', svgWidth)

    // Remember how we do
    //    var width = 700 - margin.left - margin.right?
    // this is the same thing, since svgWidth is the FULL
    // SIZE of the svg, not the drawing area (the g)
    const newWidth = svgWidth - margin.left - margin.right
    
    const new_w = newWidth/numCol
    console.log('This is', new_w)
    // Update our axes
    // First, update the scale
    // Then, update the axis

    svg.selectAll('g')
    .attr('transform', function(d, i){
      return 'translate(' + i*new_w + ','+(pad/2)*-1+')'
    })

    svg
      .selectAll('.dot')
      .attr('cx', new_w/4)
      .attr('cy', new_w/4)

    console.log('resized to 500')
  }

  // When the window resizes, run the function
  // that redraws everything
  window.addEventListener('resize', render)

  // And now that the page has loaded, let's just try
  // to do it once before the page has resized
  render()
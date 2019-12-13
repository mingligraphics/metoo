import * as d3 from 'd3'

const margin = {
  top: 10,
  right: 100,
  bottom: 100,
  left: 100
}

const width = 500 - margin.left - margin.right
const height = 600 - margin.top - margin.bottom

const svg = d3
  .select('#chart-03')
  .append('svg')
  .attr('width', width + margin.left + margin.right)
  .attr('height', height + margin.top + margin.bottom)
  .append('g')
  .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
  .style('align', 'center')

const data = [
  { col: 0, row: 0 },
  { col: 0, row: 1 },
  { col: 0, row: 2 },
  { col: 0, row: 3 },
  { col: 0, row: 4 },
  { col: 0, row: 5 },
  { col: 0, row: 6 },
  { col: 0, row: 7 },
  { col: 0, row: 8 },
  { col: 0, row: 9 },
  { col: 0, row: 10 },
  { col: 0, row: 11 },
  { col: 0, row: 12 },
  { col: 0, row: 13 },
  { col: 0, row: 14 },
  { col: 1, row: 0 },
  { col: 1, row: 1 },
  { col: 1, row: 2 },
  { col: 1, row: 3 },
  { col: 1, row: 4 },
  { col: 1, row: 5 },
  { col: 1, row: 6 },
  { col: 1, row: 7 },
  { col: 1, row: 8 },
  { col: 1, row: 9 },
  { col: 1, row: 10 },
  { col: 1, row: 11 },
  { col: 1, row: 12 },
  { col: 1, row: 13 },
  { col: 1, row: 14 },
  { col: 2, row: 0 },
  { col: 2, row: 1 },
  { col: 2, row: 2 },
  { col: 2, row: 3 },
  { col: 2, row: 4 },
  { col: 2, row: 5 },
  { col: 2, row: 6 },
  { col: 2, row: 7 },
  { col: 2, row: 8 },
  { col: 2, row: 9 },
  { col: 2, row: 10 },
  { col: 2, row: 11 },
  { col: 2, row: 12 },
  { col: 2, row: 13 },
  { col: 2, row: 14 },
  { col: 3, row: 0 },
  { col: 3, row: 1 },
  { col: 3, row: 2 },
  { col: 3, row: 3 },
  { col: 3, row: 4 },
  { col: 3, row: 5 },
  { col: 3, row: 6 },
  { col: 3, row: 7 },
  { col: 3, row: 8 },
  { col: 3, row: 9 },
  { col: 3, row: 10 },
  { col: 3, row: 11 },
  { col: 3, row: 12 },
  { col: 3, row: 13 },
  { col: 3, row: 14 },
  { col: 4, row: 0 },
  { col: 4, row: 1 },
  { col: 4, row: 2 },
  { col: 4, row: 3 },
  { col: 4, row: 4 },
  { col: 4, row: 5 },
  { col: 4, row: 6 },
  { col: 4, row: 7 },
  { col: 4, row: 8 },
  { col: 4, row: 9 },
  { col: 4, row: 10 },
  { col: 4, row: 11 },
  { col: 4, row: 12 },
  { col: 4, row: 13 },
  { col: 4, row: 14 },
  { col: 5, row: 0 },
  { col: 5, row: 1 },
  { col: 5, row: 2 },
  { col: 5, row: 3 },
  { col: 5, row: 4 },
  { col: 5, row: 5 },
  { col: 5, row: 6 },
  { col: 5, row: 7 },
  { col: 5, row: 8 },
  { col: 5, row: 9 },
  { col: 5, row: 10 },
  { col: 5, row: 11 },
  { col: 5, row: 12 },
  { col: 5, row: 13 },
  { col: 5, row: 14 },
  { col: 6, row: 0 },
  { col: 6, row: 1 },
  { col: 6, row: 2 },
  { col: 6, row: 3 },
  { col: 6, row: 4 },
  { col: 6, row: 5 },
  { col: 6, row: 6 },
  { col: 6, row: 7 },
  { col: 6, row: 8 },
  { col: 6, row: 9 },
  { col: 6, row: 10 },
  { col: 6, row: 11 },
  { col: 6, row: 12 },
  { col: 6, row: 13 },
  { col: 6, row: 14 },
  { col: 7, row: 0 },
  { col: 7, row: 1 },
  { col: 7, row: 2 },
  { col: 7, row: 3 },
  { col: 7, row: 4 },
  { col: 7, row: 5 },
  { col: 7, row: 6 },
  { col: 7, row: 7 },
  { col: 7, row: 8 },
  { col: 7, row: 9 },
  { col: 7, row: 10 },
  { col: 7, row: 11 },
  { col: 7, row: 12 },
  { col: 7, row: 13 },
  { col: 7, row: 14 },
  { col: 8, row: 0 },
  { col: 8, row: 1 },
  { col: 8, row: 2 },
  { col: 8, row: 3 },
  { col: 8, row: 4 },
  { col: 8, row: 5 },
  { col: 8, row: 6 },
  { col: 8, row: 7 },
  { col: 8, row: 8 },
  { col: 8, row: 9 },
  { col: 8, row: 10 },
  { col: 8, row: 11 },
  { col: 8, row: 12 },
  { col: 8, row: 13 },
  { col: 8, row: 14 },
  { col: 9, row: 0 },
  { col: 9, row: 1 },
  { col: 9, row: 2 },
  { col: 9, row: 3 },
  { col: 9, row: 4 },
  { col: 9, row: 5 },
  { col: 9, row: 6 },
  { col: 9, row: 7 },
  { col: 9, row: 8 },
  { col: 9, row: 9 },
  { col: 9, row: 10 },
  { col: 9, row: 11 },
  { col: 9, row: 12 },
  { col: 9, row: 13 }
]

const xScale = d3
  .scaleLinear()
  .domain([0, 9])
  .range([0, width])

const yScale = d3
  .scaleLinear()
  .domain([0, 14])
  .range([0, height])
// this is the parameter part useful for exploration
// you can play with these numbers

console.log(data)

d3.select('#victim01').on('stepin', function() {
  console.log('several')
  svg.select("rect[id='0']").attr('fill', 'red')
})

d3.select('#victim02').on('stepin', function() {
  svg.select("rect[id='13']").attr('fill', 'orange')
})

d3.select('#victim03').on('stepin', function() {
  svg.select("rect[id='26']").attr('fill', 'yellow')
})

d3.select('#victim04').on('stepin', function() {
  svg.select("rect[id='97']").attr('fill', 'green')
})

d3.select('#victim05').on('stepin', function() {
  svg.select("rect[id='136']").attr('fill', 'blue')
})

svg
  .selectAll('rect')
  .data(data)
  .enter()
  .append('rect')
  .attr('width', 20)
  .attr('height', 20)
  .attr('x', d => xScale(d.col))
  .attr('y', d => yScale(d.row))
  .attr('fill', 'lightgrey')
  .attr('id', function(d) {
    return d.col + d.row * 10
  })
// .style('background-image', 'url("../images/women.png“)')

// const groups = all._groups
// const group = groups.keys
// console.log(groups)

// const col = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// const row = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

// all
//   .append('rect')
//   .attr('x', _w / 2)
//   .attr('y', _w / 4)
//   .attr('width', 20)
//   .attr('height', 20)
//   .attr('fill', 'grey')
//

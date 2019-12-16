import * as d3 from 'd3'

const margin = {
  top: 20,
  right: 100,
  bottom: 100,
  left: 100
}

const width = 600 - margin.left - margin.right
const height = 700 - margin.top - margin.bottom

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
  { col: 0, row: 15 },
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
  { col: 1, row: 15 },
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
  { col: 9, row: 13 },
  { col: 9, row: 14 }

]

// console.log(len(data))

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
  svg.append('text').text('Beijing').attr('font-size', '15px').attr('x', 0).attr('y',-10).attr('fill', '#ebcbae').attr('font-weight','700')
  console.log('several')
  svg.selectAll("rect[id='0'], rect[id='1'], rect[id='2'], rect[id='3'], rect[id='4'], rect[id='5'], rect[id='6'], rect[id='7'], rect[id='8'], rect[id='9'], rect[id='10'], rect[id='11'], rect[id='12'], rect[id='13'], rect[id='14'], rect[id='15'], rect[id='16'], rect[id='17'], rect[id='18'], rect[id='19'], rect[id='20'], rect[id='21'], rect[id='22'], rect[id='23'], rect[id='24'], rect[id='25'], rect[id='26'], rect[id='27'], rect[id='28'], rect[id='29'], rect[id='30'], rect[id='31'], rect[id='32'], rect[id='33'], rect[id='34'], rect[id='35'], rect[id='36'], rect[id='37'], rect[id='38'], rect[id='39'], rect[id='40'], rect[id='41'], rect[id='42'], rect[id='43'], rect[id='44'], rect[id='45'], rect[id='46'], rect[id='47'], rect[id='48'], rect[id='49'], rect[id='50'], rect[id='51'], rect[id='52'], rect[id='53'], rect[id='54'], rect[id='55'], rect[id='56'], rect[id='57'], rect[id='58'], rect[id='59'], rect[id='60'], rect[id='61'], rect[id='62'], rect[id='63'], rect[id='64'], rect[id='65'], rect[id='66'], rect[id='67']").attr('fill', '#ff9a3c').attr('opacity', '0.9')
  svg.select("rect[id='0']").attr('fill', '#ff9a3c').attr('opacity', '0.9')
})

d3.select('#victim02').on('stepin', function() {
  svg.append('text').text('Guangzhou').attr('font-size', '15px').attr('x', 347).attr('y',243).attr('fill', '#ebcbae').attr('font-weight','700')
  svg.selectAll("rect[id='68'], rect[id='69'], rect[id='70'], rect[id='71'], rect[id='72'], rect[id='73'], rect[id='74'], rect[id='75'], rect[id='76'], rect[id='77'], rect[id='78'], rect[id='79'], rect[id='80'], rect[id='81'], rect[id='82'], rect[id='83'], rect[id='84'], rect[id='85'], rect[id='86'], rect[id='87'], rect[id='88'], rect[id='89'], rect[id='90'], rect[id='91']").attr('fill', '#fe9929').attr('fill', '#ff9a3c').attr('opacity', '0.7')
  svg.select("rect[id='72']").attr('fill', '#ff9a3c').attr('opacity', '0.7')
})

d3.select('#victim03').on('stepin', function() {
  svg.append('text').text('Shanghai').attr('font-size', '15px').attr('x', 87).attr('y',367).attr('fill', '#ebcbae').attr('font-weight','700')
  svg.selectAll("rect[id='92'], rect[id='93'], rect[id='94'], rect[id='95'], rect[id='96'], rect[id='97'], rect[id='98'], rect[id='99'], rect[id='100'], rect[id='101'], rect[id='102'], rect[id='103'], rect[id='104'], rect[id='105'], rect[id='106'], rect[id='107'], rect[id='108'], rect[id='109']").attr('fill', '#fe9929').attr('fill', '#ff9a3c').attr('opacity', '0.5')
  svg.select("rect[id='105']").attr('fill', '#ff9a3c').attr('opacity', '0.5')
})

d3.select('#victim04').on('stepin', function() {
  svg.append('text').text('Provincial Capitals').attr('font-size', '15px').attr('x', 0).attr('y',450).attr('fill', '#ebcbae').attr('font-weight','700')
  svg.selectAll("rect[id='110'], rect[id='111'], rect[id='112'], rect[id='113'], rect[id='114'], rect[id='115'], rect[id='116'], rect[id='117'], rect[id='118'],rect[id='119'], rect[id='120'], rect[id='121'], rect[id='122'], rect[id='123'], rect[id='124'], rect[id='125'], rect[id='126'], rect[id='127'], rect[id='128'], rect[id='129'], rect[id='130'], rect[id='131'], rect[id='132']").attr('fill', '#fbe1b6').attr('opacity', '0.7')
  svg.select("rect[id='120']").attr('fill', '#fbe1b6').attr('opacity', '0.7')

})

d3.select('#victim05').on('stepin', function() {
  svg.append('text').text('Non-Provincial Big Cities').attr('font-size', '15px').attr('x', 133).attr('y',533).attr('fill', '#ebcbae').attr('font-weight','700')
  svg.selectAll("rect[id='133'], rect[id='134'], rect[id='135'], rect[id='136'], rect[id='137'], rect[id='138'], rect[id='139'], rect[id='140'], rect[id='141'], rect[id='142'], rect[id='143'], rect[id='144'], rect[id='145'], rect[id='146'], rect[id='147'], rect[id='148']").attr('fill', '#fee391')
  svg.select("rect[id='145']").attr('fill', '#fee391')

})

d3.select('#victim06').on('stepin', function() {
  svg.append('text').text('Others').attr('font-size', '15px').attr('x', 374).attr('y',573).attr('fill', '#ebcbae').attr('font-weight','700')
  svg.selectAll("rect[id='149'], rect[id='150'], rect[id='151']").attr('fill', '#fff7bc')
  svg.select("rect[id='150']").attr('fill', '#fff7bc')
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
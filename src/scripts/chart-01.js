import * as d3 from 'd3'

const preptrator = d3.select('.preptrator')

d3.csv(require('../data/CaseNumber.csv'))
  .then(ready)
  .catch(err => console.log('Failed on', err))

function ready(datapoints) {
  const nest = d3
    .nest()
    .key(d => d.month)
    .entries(datapoints)

  const group = preptrator
    .selectAll('.group')
    .data(nest)
    .enter()
    .append('div')
    .attr('class', 'group')
    .attr('id', function(d) {
      const result = 'group' + d.key
      return result
    })

  // in each group add the appropriate number of blocks
  // group.append('text').text(d => d.key)

  const block = group
    .selectAll('.block')
    .data(d => d.values)
    .enter()
    .append('svg')
    .attr('class', 'block')
    .style('background-color', 'none')
    .attr('id', function(d) {
      const result = 'block' + d.preptrator
      return result
    })

  block
    .append('circle')
    .attr('cx', 31)
    .attr('cy', 31)
    .attr('r', 30)
    .attr('stroke', 'steelblue')
    .attr('stroke-width', 1.5)
    .attr('fill', 'grey')

  d3.select('#block0')
    .append('image')
    .attr('x', 2.8)
    .attr('y', 2.8)
    .attr('width', 56)
    .attr('height', 56)
    .attr('xlink:href', require('../images/P-images/0.png'))
    .attr('class', 'image')
    .style("filter", "url(#desaturate)")
    .on("mouseover",function(d){
      console.log('My mouse went over the datapoint', d)
      d3.select(this).style("filter", null);     
    })
    .on("mouseout",function(d){     
      d3.select(this).style("filter", "url(#desaturate)");
    })

  d3.select('#block1')
    .append('image')
    .attr('x', 2.8)
    .attr('y', 2.8)
    .attr('width', 56)
    .attr('height', 56)
    .attr('xlink:href', require('../images/P-images/1.png'))
    .attr('class', 'image')
    .style("filter", "url(#desaturate)")
    .on("mouseover",function(d){
      console.log('My mouse went over the datapoint', d)
      d3.select(this).style("filter", null);     
    })
    .on("mouseout",function(d){     
      d3.select(this).style("filter", "url(#desaturate)");
    })

  d3.select('#block2')
    .append('image')
    .attr('x', 2.8)
    .attr('y', 2.8)
    .attr('width', 56)
    .attr('height', 56)
    .attr('xlink:href', require('../images/P-images/2.png'))
    .attr('class', 'image')
    .style("filter", "url(#desaturate)")
    .on("mouseover",function(d){
      console.log('My mouse went over the datapoint', d)
      d3.select(this).style("filter", null);     
    })
    .on("mouseout",function(d){     
      d3.select(this).style("filter", "url(#desaturate)");
    })

  d3.select('#block3')
    .append('image')
    .attr('x', 2.8)
    .attr('y', 2.8)
    .attr('width', 56)
    .attr('height', 56)
    .attr('xlink:href', require('../images/P-images/3.png'))
    .attr('class', 'image')
    .style("filter", "url(#desaturate)")
    .on("mouseover",function(d){
      console.log('My mouse went over the datapoint', d)
      d3.select(this).style("filter", null);     
    })
    .on("mouseout",function(d){     
      d3.select(this).style("filter", "url(#desaturate)");
    })

  d3.select('#block4')
    .append('image')
    .attr('x', 2.8)
    .attr('y', 2.8)
    .attr('width', 56)
    .attr('height', 56)
    .attr('xlink:href', require('../images/P-images/4.png'))
    .attr('class', 'image')
    .style("filter", "url(#desaturate)")
    .on("mouseover",function(d){
      console.log('My mouse went over the datapoint', d)
      d3.select(this).style("filter", null);     
    })
    .on("mouseout",function(d){     
      d3.select(this).style("filter", "url(#desaturate)");
    })

  d3.select('#block5')
    .append('image')
    .attr('x', 3)
    .attr('y', 3)
    .attr('width', 56)
    .attr('height', 56)
    .attr('xlink:href', require('../images/P-images/5.png'))
    .attr('class', 'image')
    .style("filter", "url(#desaturate)")
    .on("mouseover",function(d){
      console.log('My mouse went over the datapoint', d)
      d3.select(this).style("filter", null);     
    })
    .on("mouseout",function(d){     
      d3.select(this).style("filter", "url(#desaturate)");
    })

  d3.select('#block6')
    .append('image')
    .attr('x', 2.8)
    .attr('y', 2.8)
    .attr('width', 56)
    .attr('height', 56)
    .attr('xlink:href', require('../images/P-images/6.png'))
    .attr('class', 'image')
    .style("filter", "url(#desaturate)")
    .on("mouseover",function(d){
      console.log('My mouse went over the datapoint', d)
      d3.select(this).style("filter", null);     
    })
    .on("mouseout",function(d){     
      d3.select(this).style("filter", "url(#desaturate)");
    })

  d3.select('#block7')
    .append('image')
    .attr('x', 2.8)
    .attr('y', 2.8)
    .attr('width', 56)
    .attr('height', 56)
    .attr('xlink:href', require('../images/P-images/7.png'))
    .attr('class', 'image')
    .style("filter", "url(#desaturate)")
    .on("mouseover",function(d){
      console.log('My mouse went over the datapoint', d)
      d3.select(this).style("filter", null);     
    })
    .on("mouseout",function(d){     
      d3.select(this).style("filter", "url(#desaturate)");
    })

  d3.select('#block8')
    .append('image')
    .attr('x', 2.8)
    .attr('y', 2.8)
    .attr('width', 56)
    .attr('height', 56)
    .attr('xlink:href', require('../images/P-images/8.png'))
    .attr('class', 'image')
    .style("filter", "url(#desaturate)")
    .on("mouseover",function(d){
      console.log('My mouse went over the datapoint', d)
      d3.select(this).style("filter", null);     
    })
    .on("mouseout",function(d){     
      d3.select(this).style("filter", "url(#desaturate)");
    })

  d3.select('#block9')
    .append('image')
    .attr('x', 2.8)
    .attr('y', 2.8)
    .attr('width', 56)
    .attr('height', 56)
    .attr('xlink:href', require('../images/P-images/9.png'))
    .attr('class', 'image')
    .style("filter", "url(#desaturate)")
    .on("mouseover",function(d){
      console.log('My mouse went over the datapoint', d)
      d3.select(this).style("filter", null);     
    })
    .on("mouseout",function(d){     
      d3.select(this).style("filter", "url(#desaturate)");
    })

  d3.select('#block10')
    .append('image')
    .attr('x', 2.8)
    .attr('y', 2.8)
    .attr('width', 56)
    .attr('height', 56)
    .attr('xlink:href', require('../images/P-images/10.png'))
    .attr('class', 'image')
    .style("filter", "url(#desaturate)")
    .on("mouseover",function(d){
      console.log('My mouse went over the datapoint', d)
      d3.select(this).style("filter", null);     
    })
    .on("mouseout",function(d){     
      d3.select(this).style("filter", "url(#desaturate)");
    })

  d3.select('#block11')
    .append('image')
    .attr('x', 2.8)
    .attr('y', 2.8)
    .attr('width', 56)
    .attr('height', 56)
    .attr('xlink:href', require('../images/P-images/11.png'))
    .attr('class', 'image')
    .style("filter", "url(#desaturate)")
    .on("mouseover",function(d){
      console.log('My mouse went over the datapoint', d)
      d3.select(this).style("filter", null);     
    })
    .on("mouseout",function(d){     
      d3.select(this).style("filter", "url(#desaturate)");
    })

  d3.select('#block12')
    .append('image')
    .attr('x', 2.8)
    .attr('y', 2.8)
    .attr('width', 56)
    .attr('height', 56)
    .attr('xlink:href', require('../images/P-images/12.png'))
    .attr('class', 'image')
    .style("filter", "url(#desaturate)")
    .on("mouseover",function(d){
      console.log('My mouse went over the datapoint', d)
      d3.select(this).style("filter", null);     
    })
    .on("mouseout",function(d){     
      d3.select(this).style("filter", "url(#desaturate)");
    })

  d3.select('#block13')
    .append('image')
    .attr('x', 2.8)
    .attr('y', 2.8)
    .attr('width', 56)
    .attr('height', 56)
    .attr('xlink:href', require('../images/P-images/13.png'))
    .attr('class', 'image')
    .style("filter", "url(#desaturate)")
    .on("mouseover",function(d){
      console.log('My mouse went over the datapoint', d)
      d3.select(this).style("filter", null);     
    })
    .on("mouseout",function(d){     
      d3.select(this).style("filter", "url(#desaturate)");
    })

  d3.select('#block14')
    .append('image')
    .attr('x', 2.8)
    .attr('y', 2.8)
    .attr('width', 56)
    .attr('height', 56)
    .attr('xlink:href', require('../images/P-images/14.png'))
    .attr('class', 'image')
    .style("filter", "url(#desaturate)")
    .on("mouseover",function(d){
      console.log('My mouse went over the datapoint', d)
      d3.select(this).style("filter", null);     
    })
    .on("mouseout",function(d){     
      d3.select(this).style("filter", "url(#desaturate)");
    })

  d3.select('#block15')
    .append('image')
    .attr('x', 2.8)
    .attr('y', 2.8)
    .attr('width', 56)
    .attr('height', 56)
    .attr('xlink:href', require('../images/P-images/15.png'))
    .attr('class', 'image')
    .style("filter", "url(#desaturate)")
    .on("mouseover",function(d){
      console.log('My mouse went over the datapoint', d)
      d3.select(this).style("filter", null);     
    })
    .on("mouseout",function(d){     
      d3.select(this).style("filter", "url(#desaturate)");
    })

  d3.select('#block16')
    .append('image')
    .attr('x', 2.8)
    .attr('y', 2.8)
    .attr('width', 56)
    .attr('height', 56)
    .attr('xlink:href', require('../images/P-images/16.png'))
    .attr('class', 'image')
    .style("filter", "url(#desaturate)")
    .on("mouseover",function(d){
      console.log('My mouse went over the datapoint', d)
      d3.select(this).style("filter", null);     
    })
    .on("mouseout",function(d){     
      d3.select(this).style("filter", "url(#desaturate)");
    })

  d3.select('#block17')
    .append('image')
    .attr('x', 2.8)
    .attr('y', 2.8)
    .attr('width', 56)
    .attr('height', 56)
    .attr('xlink:href', require('../images/P-images/17.png'))
    .attr('class', 'image')
    .style("filter", "url(#desaturate)")
    .on("mouseover",function(d){
      console.log('My mouse went over the datapoint', d)
      d3.select(this).style("filter", null);     
    })
    .on("mouseout",function(d){     
      d3.select(this).style("filter", "url(#desaturate)");
    })

  d3.select('#block18')
    .append('image')
    .attr('x', 2.8)
    .attr('y', 2.8)
    .attr('width', 56)
    .attr('height', 56)
    .attr('xlink:href', require('../images/P-images/18.png'))
    .attr('class', 'image')
    .style("filter", "url(#desaturate)")
    .on("mouseover",function(d){
      console.log('My mouse went over the datapoint', d)
      d3.select(this).style("filter", null);     
    })
    .on("mouseout",function(d){     
      d3.select(this).style("filter", "url(#desaturate)");
    })

  d3.select('#block19')
    .append('image')
    .attr('x', 2.8)
    .attr('y', 2.8)
    .attr('width', 56)
    .attr('height', 56)
    .attr('xlink:href', require('../images/P-images/19.png'))
    .attr('class', 'image')
    .style("filter", "url(#desaturate)")
    .on("mouseover",function(d){
      console.log('My mouse went over the datapoint', d)
      d3.select(this).style("filter", null);     
    })
    .on("mouseout",function(d){     
      d3.select(this).style("filter", "url(#desaturate)");
    })

  d3.select('#block20')
    .append('image')
    .attr('x', 2.8)
    .attr('y', 2.8)
    .attr('width', 56)
    .attr('height', 56)
    .attr('xlink:href', require('../images/P-images/20.png'))
    .attr('class', 'image')
    .style("filter", "url(#desaturate)")
    .on("mouseover",function(d){
      console.log('My mouse went over the datapoint', d)
      d3.select(this).style("filter", null);     
    })
    .on("mouseout",function(d){     
      d3.select(this).style("filter", "url(#desaturate)");
    })

  d3.select('#block21')
    .append('image')
    .attr('x', 2.8)
    .attr('y', 2.8)
    .attr('width', 56)
    .attr('height', 56)
    .attr('xlink:href', require('../images/P-images/21.png'))
    .attr('class', 'image')
    .style("filter", "url(#desaturate)")
    .on("mouseover",function(d){
      console.log('My mouse went over the datapoint', d)
      d3.select(this).style("filter", null);     
    })
    .on("mouseout",function(d){     
      d3.select(this).style("filter", "url(#desaturate)");
    })

  d3.select('#block22')
    .append('image')
    .attr('x', 2.8)
    .attr('y', 2.8)
    .attr('width', 56)
    .attr('height', 56)
    .attr('xlink:href', require('../images/P-images/22.png'))
    .attr('class', 'image')
    .style("filter", "url(#desaturate)")
    .on("mouseover",function(d){
      console.log('My mouse went over the datapoint', d)
      d3.select(this).style("filter", null);     
    })
    .on("mouseout",function(d){     
      d3.select(this).style("filter", "url(#desaturate)");
    })

  d3.select('#block23')
    .append('image')
    .attr('x', 2.8)
    .attr('y', 2.8)
    .attr('width', 56)
    .attr('height', 56)
    .attr('xlink:href', require('../images/P-images/23.png'))
    .attr('class', 'image')
    .style("filter", "url(#desaturate)")
    .on("mouseover",function(d){
      console.log('My mouse went over the datapoint', d)
      d3.select(this).style("filter", null);     
    })
    .on("mouseout",function(d){     
      d3.select(this).style("filter", "url(#desaturate)");
    })

  d3.select('#block24')
    .append('image')
    .attr('x', 2.8)
    .attr('y', 2.8)
    .attr('width', 56)
    .attr('height', 56)
    .attr('xlink:href', require('../images/P-images/24.png'))
    .attr('class', 'image')
    .style("filter", "url(#desaturate)")
    .on("mouseover",function(d){
      console.log('My mouse went over the datapoint', d)
      d3.select(this).style("filter", null);     
    })
    .on("mouseout",function(d){     
      d3.select(this).style("filter", "url(#desaturate)");
    })

  d3.select('#block25')
    .append('image')
    .attr('x', 2.8)
    .attr('y', 2.8)
    .attr('width', 56)
    .attr('height', 56)
    .attr('xlink:href', require('../images/P-images/25.png'))
    .attr('class', 'image')
    .style("filter", "url(#desaturate)")
    .on("mouseover",function(d){
      console.log('My mouse went over the datapoint', d)
      d3.select(this).style("filter", null);     
    })
    .on("mouseout",function(d){     
      d3.select(this).style("filter", "url(#desaturate)");
    })

  d3.select('#block26')
    .append('image')
    .attr('x', 2.8)
    .attr('y', 2.8)
    .attr('width', 56)
    .attr('height', 56)
    .attr('xlink:href', require('../images/P-images/26.png'))
    .attr('class', 'image')
    .style("filter", "url(#desaturate)")
    .on("mouseover",function(d){
      console.log('My mouse went over the datapoint', d)
      d3.select(this).style("filter", null);     
    })
    .on("mouseout",function(d){     
      d3.select(this).style("filter", "url(#desaturate)");
    })

  d3.select('#block27')
    .append('image')
    .attr('x', 2.8)
    .attr('y', 2.8)
    .attr('width', 56)
    .attr('height', 56)
    .attr('xlink:href', require('../images/P-images/27.png'))
    .attr('class', 'image')
    .style("filter", "url(#desaturate)")
    .on("mouseover",function(d){
      console.log('My mouse went over the datapoint', d)
      d3.select(this).style("filter", null);     
    })
    .on("mouseout",function(d){     
      d3.select(this).style("filter", "url(#desaturate)");
    })

  d3.select('#block28')
    .append('image')
    .attr('x', 2.8)
    .attr('y', 2.8)
    .attr('width', 56)
    .attr('height', 56)
    .attr('xlink:href', require('../images/P-images/28.png'))
    .attr('class', 'image')
    .style("filter", "url(#desaturate)")
    .on("mouseover",function(d){
      console.log('My mouse went over the datapoint', d)
      d3.select(this).style("filter", null);     
    })
    .on("mouseout",function(d){     
      d3.select(this).style("filter", "url(#desaturate)");
    })

  d3.select('#block29')
    .append('image')
    .attr('x', 2.8)
    .attr('y', 2.8)
    .attr('width', 56)
    .attr('height', 56)
    .attr('xlink:href', require('../images/P-images/29.png'))
    .attr('class', 'image')
    .style("filter", "url(#desaturate)")
    .on("mouseover",function(d){
      console.log('My mouse went over the datapoint', d)
      d3.select(this).style("filter", null);     
    })
    .on("mouseout",function(d){     
      d3.select(this).style("filter", "url(#desaturate)");
    })

  d3.select('#block30')
    .append('image')
    .attr('x', 2.8)
    .attr('y', 2.8)
    .attr('width', 56)
    .attr('height', 56)
    .attr('xlink:href', require('../images/P-images/30.png'))
    .attr('class', 'image')
    .style("filter", "url(#desaturate)")
    .on("mouseover",function(d){
      console.log('My mouse went over the datapoint', d)
      d3.select(this).style("filter", null) 
    })
    .on("mouseout",function(d){     
      d3.select(this).style("filter", "url(#desaturate)")
    })

  d3.select('#block31')
    .append('image')
    .attr('x', 2.8)
    .attr('y', 2.8)
    .attr('width', 56)
    .attr('height', 56)
    .attr('xlink:href', require('../images/P-images/31.png'))
    .attr('class', 'image')
    .style("filter", "url(#desaturate)")
    .on("mouseover",function(d){
      console.log('My mouse went over the datapoint', d)
      d3.select(this).style("filter", null);     
    })
    .on("mouseout",function(d){     
      d3.select(this).style("filter", "url(#desaturate)");
    })

  d3.select('#block32')
    .append('image')
    .attr('x', 2.8)
    .attr('y', 2.8)
    .attr('width', 56)
    .attr('height', 56)
    .attr('xlink:href', require('../images/P-images/32.png'))
    .attr('class', 'image')
    .style("filter", "url(#desaturate)")
    .on("mouseover",function(d){
      console.log('My mouse went over the datapoint', d)
      d3.select(this).style("filter", null);     
    })
    .on("mouseout",function(d){     
      d3.select(this).style("filter", "url(#desaturate)");
    })

  d3.select('#block33')
    .append('image')
    .attr('x', 2.8)
    .attr('y', 2.8)
    .attr('width', 56)
    .attr('height', 56)
    .attr('xlink:href', require('../images/P-images/33.png'))
    .attr('class', 'image')
    .style("filter", "url(#desaturate)")
    .on("mouseover",function(d){
      console.log('My mouse went over the datapoint', d)
      d3.select(this).style("filter", null);     
    })
    .on("mouseout",function(d){     
      d3.select(this).style("filter", "url(#desaturate)");
    })

  d3.select('#block34')
    .append('image')
    .attr('x', 2.8)
    .attr('y', 2.8)
    .attr('width', 56)
    .attr('height', 56)
    .attr('xlink:href', require('../images/P-images/34.png'))
    .attr('class', 'image')
    .style("filter", "url(#desaturate)")
    .on("mouseover",function(d){
      console.log('My mouse went over the datapoint', d)
      d3.select(this).style("filter", null);     
    })
    .on("mouseout",function(d){     
      d3.select(this).style("filter", "url(#desaturate)");
    })

  d3.select('#block35')
    .append('image')
    .attr('x', 2.8)
    .attr('y', 2.8)
    .attr('width', 56)
    .attr('height', 56)
    .attr('xlink:href', require('../images/P-images/35.png'))
    .attr('class', 'image')
    .style("filter", "url(#desaturate)")
    .on("mouseover",function(d){
      console.log('My mouse went over the datapoint', d)
      d3.select(this).style("filter", null);     
    })
    .on("mouseout",function(d){     
      d3.select(this).style("filter", "url(#desaturate)");
    })

  d3.select('#block36')
    .append('image')
    .attr('x', 2.8)
    .attr('y', 2.8)
    .attr('width', 56)
    .attr('height', 56)
    .attr('xlink:href', require('../images/P-images/36.png'))
    .attr('class', 'image')
    .style("filter", "url(#desaturate)")
    .on("mouseover",function(d){
      console.log('My mouse went over the datapoint', d)
      d3.select(this).style("filter", null);     
    })
    .on("mouseout",function(d){     
      d3.select(this).style("filter", "url(#desaturate)");
    })

  d3.select('#block37')
    .append('image')
    .attr('x', 2.8)
    .attr('y', 2.8)
    .attr('width', 56)
    .attr('height', 56)
    .attr('xlink:href', require('../images/P-images/37.png'))
    .attr('class', 'image')
    .style("filter", "url(#desaturate)")
    .on("mouseover",function(d){
      console.log('My mouse went over the datapoint', d)
      d3.select(this).style("filter", null);     
    })
    .on("mouseout",function(d){     
      d3.select(this).style("filter", "url(#desaturate)");
    })

  d3.select('#block38')
    .append('image')
    .attr('x', 2.8)
    .attr('y', 2.8)
    .attr('width', 56)
    .attr('height', 56)
    .attr('xlink:href', require('../images/P-images/38.png'))
    .attr('class', 'image')
    .style("filter", "url(#desaturate)")
    .on("mouseover",function(d){
      console.log('My mouse went over the datapoint', d)
      d3.select(this).style("filter", null);     
    })
    .on("mouseout",function(d){     
      d3.select(this).style("filter", "url(#desaturate)");
    })

  d3.select('#block39')
    .append('image')
    .attr('x', 2.8)
    .attr('y', 2.8)
    .attr('width', 56)
    .attr('height', 56)
    .attr('xlink:href', require('../images/P-images/39.png'))
    .attr('class', 'image')
    .style("filter", "url(#desaturate)")
    .on("mouseover",function(d){
      console.log('My mouse went over the datapoint', d)
      d3.select(this).style("filter", null);     
    })
    .on("mouseout",function(d){     
      d3.select(this).style("filter", "url(#desaturate)");
    })

  d3.select('#block40')
    .append('image')
    .attr('x', 2.8)
    .attr('y', 2.8)
    .attr('width', 56)
    .attr('height', 56)
    .attr('xlink:href', require('../images/P-images/40.png'))
    .attr('class', 'image')
    .style("filter", "url(#desaturate)")
    .on("mouseover",function(d){
      console.log('My mouse went over the datapoint', d)
      d3.select(this).style("filter", null);     
    })
    .on("mouseout",function(d){     
      d3.select(this).style("filter", "url(#desaturate)");
    })

  d3.select('#block41')
    .append('image')
    .attr('x', 2.8)
    .attr('y', 2.8)
    .attr('width', 56)
    .attr('height', 56)
    .attr('xlink:href', require('../images/P-images/41.png'))
    .attr('class', 'image')
    .style("filter", "url(#desaturate)")
    .on("mouseover",function(d){
      console.log('My mouse went over the datapoint', d)
      d3.select(this).style("filter", null);     
    })
    .on("mouseout",function(d){     
      d3.select(this).style("filter", "url(#desaturate)");
    })

  d3.select('#block42')
    .append('image')
    .attr('x', 2.8)
    .attr('y', 2.8)
    .attr('width', 56)
    .attr('height', 56)
    .attr('xlink:href', require('../images/P-images/42.png'))
    .attr('class', 'image')
    .style("filter", "url(#desaturate)")
    .on("mouseover",function(d){
      console.log('My mouse went over the datapoint', d)
      d3.select(this).style("filter", null);     
    })
    .on("mouseout",function(d){     
      d3.select(this).style("filter", "url(#desaturate)");
    })

  d3.select('#block43')
    .append('image')
    .attr('x', 2.8)
    .attr('y', 2.8)
    .attr('width', 56)
    .attr('height', 56)
    .attr('xlink:href', require('../images/P-images/43.png'))
    .attr('class', 'image')
    .style("filter", "url(#desaturate)")
    .on("mouseover",function(d){
      console.log('My mouse went over the datapoint', d)
      d3.select(this).style("filter", null);     
    })
    .on("mouseout",function(d){     
      d3.select(this).style("filter", "url(#desaturate)");
    })

  d3.select('#block44')
    .append('image')
    .attr('x', 2.8)
    .attr('y', 2.8)
    .attr('width', 56)
    .attr('height', 56)
    .attr('xlink:href', require('../images/P-images/44.png'))
    .attr('class', 'image')
    .style("filter", "url(#desaturate)")
    .on("mouseover",function(d){
      console.log('My mouse went over the datapoint', d)
      d3.select(this).style("filter", null);     
    })
    .on("mouseout",function(d){     
      d3.select(this).style("filter", "url(#desaturate)");
    })

  d3.select('#block45')
    .append('image')
    .attr('x', 2.8)
    .attr('y', 2.8)
    .attr('width', 56)
    .attr('height', 56)
    .attr('xlink:href', require('../images/P-images/45.png'))
    .attr('class', 'image')
    .style("filter", "url(#desaturate)")
    .on("mouseover",function(d){
      console.log('My mouse went over the datapoint', d)
      d3.select(this).style("filter", null);     
    })
    .on("mouseout",function(d){     
      d3.select(this).style("filter", "url(#desaturate)");
    })

  d3.select('#block46')
    .append('image')
    .attr('x', 2.8)
    .attr('y', 2.8)
    .attr('width', 56)
    .attr('height', 56)
    .attr('xlink:href', require('../images/P-images/46.png'))
    .attr('class', 'image')
    .style("filter", "url(#desaturate)")
    .on("mouseover",function(d){
      console.log('My mouse went over the datapoint', d)
      d3.select(this).style("filter", null);     
    })
    .on("mouseout",function(d){     
      d3.select(this).style("filter", "url(#desaturate)");
    })

  d3.select('#block47')
    .append('image')
    .attr('x', 2.8)
    .attr('y', 2.8)
    .attr('width', 56)
    .attr('height', 56)
    .attr('xlink:href', require('../images/P-images/47.png'))
    .attr('class', 'image')
    .style("filter", "url(#desaturate)")
    .on("mouseover",function(d){
      console.log('My mouse went over the datapoint', d)
      d3.select(this).style("filter", null);     
    })
    .on("mouseout",function(d){     
      d3.select(this).style("filter", "url(#desaturate)");
    })

  d3.select('#block48')
    .append('image')
    .attr('x', 2.8)
    .attr('y', 2.8)
    .attr('width', 56)
    .attr('height', 56)
    .attr('xlink:href', require('../images/P-images/48.png'))
    .attr('class', 'image')
    .style("filter", "url(#desaturate)")
    .on("mouseover",function(d){
      console.log('My mouse went over the datapoint', d)
      d3.select(this).style("filter", null);     
    })
    .on("mouseout",function(d){     
      d3.select(this).style("filter", "url(#desaturate)");
    })

  d3.select('#block49')
    .append('image')
    .attr('x', 2.8)
    .attr('y', 2.8)
    .attr('width', 56)
    .attr('height', 56)
    .attr('xlink:href', require('../images/P-images/49.png'))
    .attr('class', 'image')
    .style("filter", "url(#desaturate)")
    .on("mouseover",function(d){
      console.log('My mouse went over the datapoint', d)
      d3.select(this).style("filter", null);     
    })
    .on("mouseout",function(d){     
      d3.select(this).style("filter", "url(#desaturate)");
    })

  d3.select('#block50')
    .append('image')
    .attr('x', 2.8)
    .attr('y', 2.8)
    .attr('width', 56)
    .attr('height', 56)
    .attr('xlink:href', require('../images/P-images/50.png'))
    .attr('class', 'image')
    .style("filter", "url(#desaturate)")
    .on("mouseover",function(d){
      console.log('My mouse went over the datapoint', d)
      d3.select(this).style("filter", null);     
    })
    .on("mouseout",function(d){     
      d3.select(this).style("filter", "url(#desaturate)");
    })

  d3.select('#block51')
    .append('image')
    .attr('x', 2.8)
    .attr('y', 2.8)
    .attr('width', 56)
    .attr('height', 56)
    .attr('xlink:href', require('../images/P-images/51.png'))
    .attr('class', 'image')
    .style("filter", "url(#desaturate)")
    .on("mouseover",function(d){
      console.log('My mouse went over the datapoint', d)
      d3.select(this).style("filter", null);     
    })
    .on("mouseout",function(d){     
      d3.select(this).style("filter", "url(#desaturate)");
    })

  d3.select('#block52')
    .append('image')
    .attr('x', 3)
    .attr('y', 3)
    .attr('width', 56)
    .attr('height', 56)
    .attr('xlink:href', require('../images/P-images/52.png'))
    .attr('class', 'image')
    .style("filter", "url(#desaturate)")
    .on("mouseover",function(d){
      console.log('My mouse went over the datapoint', d)
      d3.select(this).style("filter", null);     
    })
    .on("mouseout",function(d){     
      d3.select(this).style("filter", "url(#desaturate)");
    })

  d3.select('#block53')
    .append('image')
    .attr('x', 2.8)
    .attr('y', 2.8)
    .attr('width', 56)
    .attr('height', 56)
    .attr('xlink:href', require('../images/P-images/53.png'))
    .attr('class', 'image')
    .style("filter", "url(#desaturate)")
    .on("mouseover",function(d){
      console.log('My mouse went over the datapoint', d)
      d3.select(this).style("filter", null);     
    })
    .on("mouseout",function(d){     
      d3.select(this).style("filter", "url(#desaturate)");
    })



   block.append('filter')
  .attr('id','desaturate')
  .append('feColorMatrix')
  .attr('type','matrix')
  .attr('values',"0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0");


}

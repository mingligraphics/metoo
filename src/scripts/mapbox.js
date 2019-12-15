import * as d3 from 'd3'

let _map = null
const _centerLat = 39.19008
const _centerLng = 113.79758
const _dataFile = require('/data/victims.geojson')
const _accessToken =
  'pk.eyJ1IjoieGlhb2xlaWFvIiwiYSI6ImNqdzc4YTltNzJic3c0OHFxeWhlZDVodGkifQ.fq-KOXgjoJwsGRBsfqmy6w'
const _mapStyle = 'mapbox://styles/mapbox/light-v10'



mapboxgl.accessToken = _accessToken
_map = new mapboxgl.Map({
  container: 'map',
  style: _mapStyle,
  center: [_centerLng, _centerLat],
  zoom: 3.38
})

function init() {
  _map.addSource('markers-source', {
    type: 'geojson',
    data: _dataFile
  })

  _map.addLayer({
    id: 'markers',
    type: 'circle',
    source: 'markers-source',
    paint: {
      'circle-color': 'orange',
      'circle-radius': 5,
      'circle-stroke-width': 0
    }
  })

  let popup = null

  _map.on('mouseenter', 'markers', function(e) {
    const features = _map.queryRenderedFeatures(e.point, {
      layers: ['markers']
    })
    if (!features.length) {
      return
    }
    const feature = features[0]
    popup = new mapboxgl.Popup()
      .setLngLat(_map.unproject(e.point))
      .setHTML(`
        <h3 style="text-align: center">${feature.properties.place}</h3>
        <p style="text-align: center">Number of Pollution Days</p>
        <p style="text-align: center">PM2.5 > 100μg/m3</p>
        </div>
        <div style="display: flex; flex-direction: row; align-items: flex-end; justify-content: space-between;">
          <div style="background: orange; height: ${feature.properties.y15}px; flex-basis: 20%; text-align: center;">${feature.properties.y15}</div>
          <div style="background: orange; height: ${feature.properties.y16}px; flex-basis: 20%; text-align: center;">${feature.properties.y16}</div>
          <div style="background: orange; height: ${feature.properties.y17}px; flex-basis: 20%; text-align: center;">${feature.properties.y17}</div>
          <div style="background: orange; height: ${feature.properties.y18}px; flex-basis: 20%; text-align: center;">${feature.properties.y18}</div>
        </div>
        <div style="display: flex; flex-direction: row; justify-content: space-between;">
          <div style="flex-basis: 20%; text-align: center;">2015</div>
          <div style="flex-basis: 20%; text-align: center;">2016</div>
          <div style="flex-basis: 20%; text-align: center;">2017</div>
          <div style="flex-basis: 20%; text-align: center;">2018</div>
        </div>`)
      .addTo(_map)
  })

  _map.on('mouseleave', 'markers', function() {
    _map.getCanvas().style.cursor = ''
    popup.remove()
  })
}

_map.once('style.load', function(e) {
  init()
  _map.addControl(new mapboxgl.NavigationControl())
})

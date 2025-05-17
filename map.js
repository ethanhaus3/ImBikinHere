import * as d3 from 'https://cdn.jsdelivr.net/npm/d3@7.9.0/+esm';

// Import Mapbox as an ESM module
import mapboxgl from 'https://cdn.jsdelivr.net/npm/mapbox-gl@2.15.0/+esm';

// Check that Mapbox GL JS is loaded
console.log('Mapbox GL JS Loaded:', mapboxgl);

// Set your Mapbox access token here
mapboxgl.accessToken = 'pk.eyJ1IjoiZXRoYW5oYXVzMyIsImEiOiJjbWFyZzlwemYwOXp5MnFwemVtNGI1NDkwIn0.xdibf95dSSZMtX6bgC_DRg';

// Initialize the map
const map = new mapboxgl.Map({
  container: 'map', // ID of the div where the map will render
  style: 'mapbox://styles/mapbox/streets-v12', // Map style
  center: [-71.09415, 42.36027], // [longitude, latitude]
  zoom: 12, // Initial zoom level
  minZoom: 5, // Minimum allowed zoom
  maxZoom: 18, // Maximum allowed zoom
});

map.on('load', async () => {
    const lineStyle = {
        'line-color': 'red',
        'line-width': 1.5,
        'line-opacity': 0.5,
      };

    map.addSource('boston_route', {
        type: 'geojson',
        data: 'https://bostonopendata-boston.opendata.arcgis.com/datasets/boston::existing-bike-network-2022.geojson',
    });
    
    map.addLayer({
        id: 'bike-lanes',
        type: 'line',
        source: 'boston_route',
        paint: lineStyle,
      });

    map.addSource('cambridge_route', {
        type: 'geojson',
        data: 'https://raw.githubusercontent.com/cambridgegis/cambridgegis_data/main/Recreation/Bike_Facilities/RECREATION_BikeFacilities.geojson',
    });
    
    map.addLayer({
        id: 'more-lanes',
        type: 'line',
        source: 'cambridge_route',
        paint: lineStyle,
      });
  });


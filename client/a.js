const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
// console.log(mapboxgl);
console.log('Supported: ' + mapboxgl.supported());
console.log('Well Supported: ' + mapboxgl.supported({
      failIfMajorPerformanceCaveat: true
    }));
console.log('Version: ' + mapboxgl.version);

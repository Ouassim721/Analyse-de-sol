// Create a custom icon for markers
const customIcon = L.divIcon({
    className: 'custom-marker-icon',
    html: '<div class="marker-inner"></div>',
    iconSize: [30, 30],
    iconAnchor: [15, 30],
    popupAnchor: [0, -30]
});

// Initialize the map
var map = L.map('map').setView([32.3004, -9.2294], 13); // Coordinates for Safi and zoom level

// Add tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Function to create markers from data
function addMarkers(data) {
    data.forEach(function(checkpoint) {
        L.marker([checkpoint.lat, checkpoint.lng], { icon: customIcon })
            .addTo(map)
            .bindPopup(checkpoint.info);
    });
}

// Define checkpoints
var checkpoints = [
        {
            lat: 32.664108,
            lng: -9.006899,
            info: `
                pH : 6.8 <br>
                (MO%) : 4.6 <br>
                (P<sub>2</sub>O<sub>5</sub>) : 41.1 <br>
                (K<sub>2</sub>O) : 276.3
            `
        },
        {
            lat: 32.664623,
            lng: -9.036011,
            info: `
                pH : 6.7 <br>
                (MO%) : 4.3 <br>
                (P<sub>2</sub>O<sub>5</sub>) : 34.7 <br>
                (K<sub>2</sub>O) : 280.6
            `
        },
        {
            lat: 32.664839,
            lng: -9.068059,
            info: `
                pH : 7.5 <br>
                (MO%) : 1.6 <br>
                (P<sub>2</sub>O<sub>5</sub>) : 25.2 <br>
                (K<sub>2</sub>O) : 346.9
            `
        },
        {
            lat: 32.663747,
            lng: -9.092700,
            info: `
                pH : 8.9 <br>
                (MO%) : 3.6 <br>
                (P<sub>2</sub>O<sub>5</sub>) : 50.9 <br>
                (K<sub>2</sub>O) : 343.4
            `
        },
        {
            lat: 32.640814,
            lng: -9.114624,
            info: `
                pH : 7.7 <br>
                (MO%) : 4.9 <br>
                (P<sub>2</sub>O<sub>5</sub>) : 16.2 <br>
                (K<sub>2</sub>O) : 316.4
            `
        },
        {
            lat: 32.605119,
            lng: -9.070100,
            info: `
                pH : 6.3 <br>
                (MO%) : 4.2 <br>
                (P<sub>2</sub>O<sub>5</sub>) : 28.4 <br>
                (K<sub>2</sub>O) : 246.2
            `
        },
        {
            lat: 32.560375,
            lng: -9.035415,
            info: `
                pH : 6.2 <br>
                (MO%) : 1.9 <br>
                (P<sub>2</sub>O<sub>5</sub>) : 34.9 <br>
                (K<sub>2</sub>O) : 237.7
            `
        },
        {
            lat: 32.560375,
            lng: -9.035415,
            info: `
                pH : 7.5 <br>
                (MO%) : 3.6 <br>
                (P<sub>2</sub>O<sub>5</sub>) : 30.1 <br>
                (K<sub>2</sub>O) : 323.5
            `
        },
        {
            lat: 32.513061,
            lng: -8.964457,
            info: `
                pH : 6.8 <br>
                (MO%) : 1.7 <br>
                (P<sub>2</sub>O<sub>5</sub>) : 22.1 <br>
                (K<sub>2</sub>O) : 336.6
            `
        },
        {
            lat: 32.459672,
            lng: -8.885814,
            info: `
                pH : 8.7 <br>
                (MO%) : 3.9 <br>
                (P<sub>2</sub>O<sub>5</sub>) : 46.2 <br>
                (K<sub>2</sub>O) : 319.9
            `
        },
        {
            lat: 32.420656,
            lng: -8.813444,
            info: `
                pH : 7.8 <br>
                (MO%) : 4.2 <br>
                (P<sub>2</sub>O<sub>5</sub>) : 36.8 <br>
                (K<sub>2</sub>O) : 333.5
            `
        },
        {
            lat: 32.401696,
            lng: -8.746130,
            info: `
                pH : 7.1 <br>
                (MO%) : 4.1 <br>
                (P<sub>2</sub>O<sub>5</sub>) : 19.0 <br>
                (K<sub>2</sub>O) : 291.6
            `
        },
        {
            lat: 32.358516,
            lng: -8.686569,
            info: `
                pH : 7.0 <br>
                (MO%) : 2.3 <br>
                (P<sub>2</sub>O<sub>5</sub>) : 56.9 <br>
                (K<sub>2</sub>O) : 215.2
            `
        },
        {
            lat: 32.325510,
            lng: -8.628757,
            info: `
                pH : 6.8 <br>
                (MO%) : 3.7 <br>
                (P<sub>2</sub>O<sub>5</sub>) : 31.9 <br>
                (K<sub>2</sub>O) : 336.0
            `
        },
        {
            lat: 32.476331,
            lng: -8.746213,
            info: `
                pH : 8.2 <br>
                (MO%) : 1.8 <br>
                (P<sub>2</sub>O<sub>5</sub>) : 26.1 <br>
                (K<sub>2</sub>O) : 284.2
            `
        },
        {
            lat: 32.446014,
            lng: -8.694312,
            info: `
                pH : 6.4 <br>
                (MO%) : 4.6 <br>
                (P<sub>2</sub>O<sub>5</sub>) : 52.6 <br>
                (K<sub>2</sub>O) : 274.2
            `
        },
        {
            lat: 32.412752,
            lng: -8.645407,
            info: `
                pH : 6.9 <br>
                (MO%) : 3.1 <br>
                (P<sub>2</sub>O<sub>5</sub>) : 20.6 <br>
                (K<sub>2</sub>O) : 194.5
            `
        },
        {
            lat: 32.495717,
            lng: -8.669867,
            info: `
                pH : 6.8 <br>
                (MO%) : 4.7 <br>
                (P<sub>2</sub>O<sub>5</sub>) : 17.7 <br>
                (K<sub>2</sub>O) : 280.1
            `
        },
        {
            lat: 32.561435,
            lng: -9.187555,
            info: `
                pH : 8.5 <br>
                (MO%) : 1.1 <br>
                (P<sub>2</sub>O<sub>5</sub>) : 37.6 <br>
                (K<sub>2</sub>O) : 216.0
            `
        },
        {
            lat: 32.562771,
            lng: -9.195556,
            info: `
                pH : 7.4 <br>
                (MO%) : 3.9 <br>
                (P<sub>2</sub>O<sub>5</sub>) : 15.0 <br>
                (K<sub>2</sub>O) : 324.9
            `
        },
        {
            lat: 32.543909,
            lng: -9.151411,
            info: `
                pH : 7.6 <br>
                (MO%) : 2.7 <br>
                (P<sub>2</sub>O<sub>5</sub>) : 41.5 <br>
                (K<sub>2</sub>O) : 227.5
            `
        },
        {
            lat: 32.525330,
            lng: -9.132522,
            info: `
                pH : 7.9 <br>
                (MO%) : 2.9 <br>
                (P<sub>2</sub>O<sub>5</sub>) : 37.3 <br>
                (K<sub>2</sub>O) : 233.5
            `
        },
        {
            lat: 32.503560,
            lng: -9.084668,
            info: `
                pH : 7.6 <br>
                (MO%) : 1.0 <br>
                (P<sub>2</sub>O<sub>5</sub>) : 32.7 <br>
                (K<sub>2</sub>O) : 342.8
            `
        },
        {
            lat: 32.443003,
            lng: -9.014146,
            info: `
                pH : 7.5 <br>
                (MO%) : 3.0 <br>
                (P<sub>2</sub>O<sub>5</sub>) : 18.5 <br>
                (K<sub>2</sub>O) : 225.6
            `
        },
        {
            lat: 32.397292,
            lng: -8.953699,
            info: `
                pH : 7.4 <br>
                (MO%) : 2.0 <br>
                (P<sub>2</sub>O<sub>5</sub>) : 27.6 <br>
                (K<sub>2</sub>O) : 320.3
            `
        },
        {
            lat: 32.362196,
            lng: -8.898289,
            info: `
                pH : 7.9 <br>
                (MO%) : 1.4 <br>
                (P<sub>2</sub>O<sub>5</sub>) : 47.8 <br>
                (K<sub>2</sub>O) : 251.3
            `
        },
        {
            lat: 32.332407,
            lng: -8.849176,
            info: `
                pH : 6.8 <br>
                (MO%) : 2.0 <br>
                (P<sub>2</sub>O<sub>5</sub>) : 57.5 <br>
                (K<sub>2</sub>O) : 318.4
            `
        },
        {
            lat: 32.301544,
            lng: -8.773617,
            info: `
                pH : 7.6 <br>
                (MO%) : 1.7 <br>
                (P<sub>2</sub>O<sub>5</sub>) : 49.2 <br>
                (K<sub>2</sub>O) : 287.5
            `
        },
        {
            lat: 32.272800,
            lng: -8.710652,
            info: `
                pH : 7.3 <br>
                (MO%) : 3.7 <br>
                (P<sub>2</sub>O<sub>5</sub>) : 50.8 <br>
                (K<sub>2</sub>O) : 182.0
            `
        },
        {
            lat: 32.210214,
            lng: -8.837672,
            info: `
                pH : 8.5 <br>
                (MO%) : 4.2 <br>
                (P<sub>2</sub>O<sub>5</sub>) : 19.9 <br>
                (K<sub>2</sub>O) : 249.8
            `
        },
        {
            lat: 32.251187,
            lng: -8.904650,
            info: `
                pH : 7.8 <br>
                (MO%) : 4.5 <br>
                (P<sub>2</sub>O<sub>5</sub>) : 34.5 <br>
                (K<sub>2</sub>O) : 272.3
            `
        },
        {
            lat: 32.283350,
            lng: -8.987457,
            info: `
                pH : 8.6 <br>
                (MO%) : 3.2 <br>
                (P<sub>2</sub>O<sub>5</sub>) : 59.7 <br>
                (K<sub>2</sub>O) : 208.2
            `
        },
        {
            lat: 32.298542,
            lng: -9.026394,
            info: `
                pH : 6.2 <br>
                (MO%) : 3.5 <br>
                (P<sub>2</sub>O<sub>5</sub>) : 18.6 <br>
                (K<sub>2</sub>O) : 282.1
            `
        },
        {
            lat: 32.317528,
            lng: -9.059341,
            info: `
                pH : 7.7 <br>
                (MO%) : 3.6 <br>
                (P<sub>2</sub>O<sub>5</sub>) : 21.3 <br>
                (K<sub>2</sub>O) : 199.3
            `
        },
        {
            lat: 32.345367,
            lng: -9.110259,
            info: `
                pH : 7.9 <br>
                (MO%) : 3.4 <br>
                (P<sub>2</sub>O<sub>5</sub>) : 57.3 <br>
                (K<sub>2</sub>O) : 182.9
            `
        },
        {
            lat: 32.363078,
            lng: -9.158181,
            info: `
                pH : 6.9 <br>
                (MO%) : 3.1 <br>
                (P<sub>2</sub>O<sub>5</sub>) : 20.4 <br>
                (K<sub>2</sub>O) : 280.8
            `
        },
        {
            lat: 32.384882,
            lng: -9.223322,
            info: `
                pH : 8.7 <br>
                (MO%) : 1.3 <br>
                (P<sub>2</sub>O<sub>5</sub>) : 59.1 <br>
                (K<sub>2</sub>O) : 290.6
            `
        },
        {
            lat: 32.279350,
            lng: -9.186599,
            info: `
                pH : 8.9 <br>
                (MO%) : 4.2 <br>
                (P<sub>2</sub>O<sub>5</sub>) : 24.2 <br>
                (K<sub>2</sub>O) : 191.0
            `
        },
        {
            lat: 32.266100,
            lng: -9.134280,
            info: `
                pH : 7.6 <br>
                (MO%) : 3.7 <br>
                (P<sub>2</sub>O<sub>5</sub>) : 20.1 <br>
                (K<sub>2</sub>O) : 341.9
            `
        },
        {
            lat: 32.248679,
            lng: -9.066989,
            info: `
                pH : 8.1 <br>
                (MO%) : 3.0 <br>
                (P<sub>2</sub>O<sub>5</sub>) : 35.4 <br>
                (K<sub>2</sub>O) : 338.6
            `
        },
        {
            lat: 32.238226,
            lng: -9.012057,
            info: `
                pH : 7.4 <br>
                (MO%) : 3.6 <br>
                (P<sub>2</sub>O<sub>5</sub>) : 36.1 <br>
                (K<sub>2</sub>O) : 264.1
            `
        },
        {
            lat: 32.217315,
            lng: -8.966739,
            info: `
                pH : 7.3 <br>
                (MO%) : 1.4 <br>
                (P<sub>2</sub>O<sub>5</sub>) : 31.7 <br>
                (K<sub>2</sub>O) : 320.4
            `
        },
        {
            lat: 32.181291,
            lng: -8.931033,
            info: `
                pH : 7.2 <br>
                (MO%) : 2.6 <br>
                (P<sub>2</sub>O<sub>5</sub>) : 31.2 <br>
                (K<sub>2</sub>O) : 221.6
            `
        },
        {
            lat: 32.143744,
            lng: -8.862231,
            info: `
                pH : 8.6 <br>
                (MO%) : 2.7 <br>
                (P<sub>2</sub>O<sub>5</sub>) : 31.5 <br>
                (K<sub>2</sub>O) : 200.7
            `
        },
        {
            lat: 32.120874,
            lng: -8.886932,
            info: `
                pH : 6.5 <br>
                (MO%) : 1.8 <br>
                (P<sub>2</sub>O<sub>5</sub>) : 30.3 <br>
                (K<sub>2</sub>O) : 190.5
            `
        },
        {
            lat: 32.123641,
            lng: -8.926127,
            info: `
                pH : 7.6 <br>
                (MO%) : 1.6 <br>
                (P<sub>2</sub>O<sub>5</sub>) : 17.6 <br>
                (K<sub>2</sub>O) : 309.1
            `
        },
        {
            lat: 32.130556,
            lng: -8.983286,
            info: `
                pH : 8.8 <br>
                (MO%) : 2.3 <br>
                (P<sub>2</sub>O<sub>5</sub>) : 49.0 <br>
                (K<sub>2</sub>O) : 307.5
            `
        },
        {
            lat: 32.138853,
            lng: -9.030647,
            info: `
                pH : 7.1 <br>
                (MO%) : 4.5 <br>
                (P<sub>2</sub>O<sub>5</sub>) : 55.3 <br>
                (K<sub>2</sub>O) : 306.7
            `
        },
        {
            lat: 31.928878,
            lng: -9.085986,
            info: `
                pH : 7.0 <br>
                (MO%) : 4.4 <br>
                (P<sub>2</sub>O<sub>5</sub>) : 20.9 <br>
                (K<sub>2</sub>O) : 188.5
            `
        },
        {
            lat: 31.941240,
            lng: -9.143278,
            info: `
                pH : 6.9 <br>
                (MO%) : 1.8 <br>
                (P<sub>2</sub>O<sub>5</sub>) : 41.4 <br>
                (K<sub>2</sub>O) : 243.4
            `
        },
        {
            lat: 31.947832,
            lng: -9.190860,
            info: `
                pH : 7.0 <br>
                (MO%) : 1.7 <br>
                (P<sub>2</sub>O<sub>5</sub>) : 26.0 <br>
                (K<sub>2</sub>O) : 288.8
            `
        },
        {
            lat: 31.944536,
            lng: -9.236500,
            info: `
                pH : 8.3 <br>
                (MO%) : 1.6 <br>
                (P<sub>2</sub>O<sub>5</sub>) : 44.1 <br>
                (K<sub>2</sub>O) : 221.3
            `
        },
        {
            lat: 31.950304,
            lng: -9.292822,
            info: `
                pH : 8.3 <br>
                (MO%) : 2.1 <br>
                (P<sub>2</sub>O<sub>5</sub>) : 18.9 <br>
                (K<sub>2</sub>O) : 211.1
            `
        },
        {
            lat: 31.952776,
            lng: -9.348173,
            info: `
                pH : 8.5 <br>
                (MO%) : 2.5 <br>
                (P<sub>2</sub>O<sub>5</sub>) : 30.2 <br>
                (K<sub>2</sub>O) : 182.8
            `
        },
        {
            lat: 31.960191,
            lng: -9.403523,
            info: `
                pH : 8.1 <br>
                (MO%) : 1.9 <br>
                (P<sub>2</sub>O<sub>5</sub>) : 43.9 <br>
                (K<sub>2</sub>O) : 342.3
            `
        },
        {
            lat: 31.932999,
            lng: -9.421002,
            info: `
                pH : 7.2 <br>
                (MO%) : 1.1 <br>
                (P<sub>2</sub>O<sub>5</sub>) : 53.2 <br>
                (K<sub>2</sub>O) : 281.2
            `
        },
        {
            lat: 31.917340,
            lng: -9.373420,
            info: `
                pH : 7.5 <br>
                (MO%) : 3.2 <br>
                (P<sub>2</sub>O<sub>5</sub>) : 34.9 <br>
                (K<sub>2</sub>O) : 217.9
            `
        },
        {
            lat: 31.900853,
            lng: -9.351086,
            info: `
                pH : 6.3 <br>
                (MO%) : 3.2 <br>
                (P<sub>2</sub>O<sub>5</sub>) : 46.9 <br>
                (K<sub>2</sub>O) : 337.0
            `
        },
        {
            lat: 31.914043,
            lng: -9.279227,
            info: `
                pH : 6.7 <br>
                (MO%) : 4.6 <br>
                (P<sub>2</sub>O<sub>5</sub>) : 46.8 <br>
                (K<sub>2</sub>O) : 335.0
            `
        },
        {
            lat: 31.943712,
            lng: -9.205426,
            info: `
                pH : 8.5 <br>
                (MO%) : 4.0 <br>
                (P<sub>2</sub>O<sub>5</sub>) : 31.0 <br>
                (K<sub>2</sub>O) : 296.9
            `
        },
        {
            lat: 31.940416,
            lng: -9.171439,
            info: `
                pH : 7.9 <br>
                (MO%) : 2.1 <br>
                (P<sub>2</sub>O<sub>5</sub>) : 57.1 <br>
                (K<sub>2</sub>O) : 297.8
            `
        },
        {
            lat: 31.920637,
            lng: -9.143278,
            info: `
                pH : 6.8 <br>
                (MO%) : 1.7 <br>
                (P<sub>2</sub>O<sub>5</sub>) : 55.5 <br>
                (K<sub>2</sub>O) : 257.2
            `
        },
        {
            lat: 31.907448,
            lng: -9.112204,
            info: `
                pH : 8.5 <br>
                (MO%) : 4.3 <br>
                (P<sub>2</sub>O<sub>5</sub>) : 31.9 <br>
                (K<sub>2</sub>O) : 192.6
            `
        },
        {
            lat: 31.912394,
            lng: -9.063651,
            info: `
                pH : 7.4 <br>
                (MO%) : 1.9 <br>
                (P<sub>2</sub>O<sub>5</sub>) : 35.4 <br>
                (K<sub>2</sub>O) : 304.4
            `
        },
        {
            lat: 31.893921,
            lng: -8.946374,
            info: `
                pH : 6.8 <br>
                (MO%) : 1.0 <br>
                (P<sub>2</sub>O<sub>5</sub>) : 28.9 <br>
                (K<sub>2</sub>O) : 308.4
            `
        },
        {
            lat: 31.888674,
            lng: -9.008859,
            info: `
                pH : 8.9 <br>
                (MO%) : 3.2 <br>
                (P<sub>2</sub>O<sub>5</sub>) : 45.0 <br>
                (K<sub>2</sub>O) : 221.5
            `
        },
        {
            lat: 31.865315,
            lng: -9.008938,
            info: `
                pH : 6.4 <br>
                (MO%) : 4.4 <br>
                (P<sub>2</sub>O<sub>5</sub>) : 36.6 <br>
                (K<sub>2</sub>O) : 348.0
            `
        },
        {
            lat: 31.862766,
            lng: -8.980252,
            info: `
                pH : 8.5 <br>
                (MO%) : 4.4 <br>
                (P<sub>2</sub>O<sub>5</sub>) : 50.9 <br>
                (K<sub>2</sub>O) : 194.0
            `
        },
        {
            lat: 31.863332,
            lng: -8.951234,
            info: `
                pH : 6.9 <br>
                (MO%) : 3.7 <br>
                (P<sub>2</sub>O<sub>5</sub>) : 26.4 <br>
                (K<sub>2</sub>O) : 180.8
            `
        },
        {
            lat: 31.839816,
            lng: -8.960239,
            info: `
                pH : 8.2 <br>
                (MO%) : 2.6 <br>
                (P<sub>2</sub>O<sub>5</sub>) : 21.5 <br>
                (K<sub>2</sub>O) : 301.4
            `
        },
        {
            lat: 31.840383,
            lng: -8.993261,
            info: `
                pH : 8.7 <br>
                (MO%) : 3.8 <br>
                (P<sub>2</sub>O<sub>5</sub>) : 44.1 <br>
                (K<sub>2</sub>O) : 310.6
            `
        },
        {
            lat: 31.840100,
            lng: -9.014608,
            info: `
                pH : 7.3 <br>
                (MO%) : 3.5 <br>
                (P<sub>2</sub>O<sub>5</sub>) : 50.7 <br>
                (K<sub>2</sub>O) : 348.2
            `
        },
        {
            lat: 31.826214,
            lng: -9.024948,
            info: `
                pH : 6.9 <br>
                (MO%) : 3.8 <br>
                (P<sub>2</sub>O<sub>5</sub>) : 42.3 <br>
                (K<sub>2</sub>O) : 329.5
            `
        },
        {
            lat: 31.819412,
            lng: -9.000599,
            info: `
                pH : 6.4 <br>
                (MO%) : 1.5 <br>
                (P<sub>2</sub>O<sub>5</sub>) : 32.7 <br>
                (K<sub>2</sub>O) : 346.6
            `
        },
        {
            lat: 31.805240,
            lng: -8.979585,
            info: `
                pH : 7.2 <br>
                (MO%) : 2.5 <br>
                (P<sub>2</sub>O<sub>5</sub>) : 21.1 <br>
                (K<sub>2</sub>O) : 252.7
            `
        },
        {
            lat: 31.789365,
            lng: -8.999598,
            info: `
                pH : 8.1 <br>
                (MO%) : 1.4 <br>
                (P<sub>2</sub>O<sub>5</sub>) : 17.6 <br>
                (K<sub>2</sub>O) : 253.1
            `
        },
        {
            lat: 32.217315,
            lng: -8.966739,
            info: `
                pH : 7.3 <br>
                (MO%) : 1.4 <br>
                (P<sub>2</sub>O<sub>5</sub>) : 31.7 <br>
                (K<sub>2</sub>O) : 320.4
            `
        },
        {
            lat: 32.181291,
            lng: -8.931033,
            info: `
                pH : 7.2 <br>
                (MO%) : 2.6 <br>
                (P<sub>2</sub>O<sub>5</sub>) : 31.2 <br>
                (K<sub>2</sub>O) : 221.6
            `
        },
        {
            lat: 32.143744,
            lng: -8.862231,
            info: `
                pH : 8.6 <br>
                (MO%) : 2.7 <br>
                (P<sub>2</sub>O<sub>5</sub>) : 31.5 <br>
                (K<sub>2</sub>O) : 200.7
            `
        },
        {
            lat: 32.120874,
            lng: -8.886932,
            info: `
                pH : 6.5 <br>
                (MO%) : 1.8 <br>
                (P<sub>2</sub>O<sub>5</sub>) : 30.3 <br>
                (K<sub>2</sub>O) : 190.5
            `
        },
        {
            lat: 32.123641,
            lng: -8.926127,
            info: `
                pH : 7.6 <br>
                (MO%) : 1.6 <br>
                (P<sub>2</sub>O<sub>5</sub>) : 17.6 <br>
                (K<sub>2</sub>O) : 309.1
            `
        },
        {
            lat: 32.130556,
            lng: -8.983286,
            info: `
                pH : 8.8 <br>
                (MO%) : 2.3 <br>
                (P<sub>2</sub>O<sub>5</sub>) : 49.0 <br>
                (K<sub>2</sub>O) : 307.5
            `
        },
        {
            lat: 32.138853,
            lng: -9.030647,
            info: `
                pH : 7.1 <br>
                (MO%) : 4.5 <br>
                (P<sub>2</sub>O<sub>5</sub>) : 55.3 <br>
                (K<sub>2</sub>O) : 306.7
            `
        },
        {
            lat: 32.119851,
            lng: -9.113073,
            info: `
                pH : 6.0 <br>
                (MO%) : 3.3 <br>
                (P<sub>2</sub>O<sub>5</sub>) : 60.5 <br>
                (K<sub>2</sub>O) : 332.8
            `
        },
        {
            lat: 32.126421,
            lng: -9.143694,
            info: `
                pH : 8.5 <br>
                (MO%) : 3.7 <br>
                (P<sub>2</sub>O<sub>5</sub>) : 26.7 <br>
                (K<sub>2</sub>O) : 203.9
            `
        },
        {
            lat: 32.135756,
            lng: -9.193504,
            info: `
                pH : 8.0 <br>
                (MO%) : 2.4 <br>
                (P<sub>2</sub>O<sub>5</sub>) : 38.1 <br>
                (K<sub>2</sub>O) : 316.3
            `
        },
        {
            lat: 32.140942,
            lng: -9.220859,
            info: `
                pH : 8.3 <br>
                (MO%) : 1.3 <br>
                (P<sub>2</sub>O<sub>5</sub>) : 33.3 <br>
                (K<sub>2</sub>O) : 221.3
            `
        },
        {
            lat: 32.145090,
            lng: -9.255971,
            info: `
                pH : 6.8 <br>
                (MO%) : 4.3 <br>
                (P<sub>2</sub>O<sub>5</sub>) : 33.0 <br>
                (K<sub>2</sub>O) : 328.3
            `
        },
        {
            lat: 32.124346,
            lng: -9.285238,
            info: `
                pH : 6.0 <br>
                (MO%) : 3.1 <br>
                (P<sub>2</sub>O<sub>5</sub>) : 22.1 <br>
                (K<sub>2</sub>O) : 340.7
            `
        },
        {
            lat: 32.100831,
            lng: -9.239510,
            info: `
                pH : 8.0 <br>
                (MO%) : 2.3 <br>
                (P<sub>2</sub>O<sub>5</sub>) : 15.7 <br>
                (K<sub>2</sub>O) : 309.3
            `
        },
        {
            lat: 32.089763,
            lng: -9.177451,
            info: `
                pH : 8.7 <br>
                (MO%) : 3.8 <br>
                (P<sub>2</sub>O<sub>5</sub>) : 34.9 <br>
                (K<sub>2</sub>O) : 325.6
            `
        },
        {
            lat: 32.069006,
            lng: -9.102327,
            info: `
                pH : 6.2 <br>
                (MO%) : 3.5 <br>
                (P<sub>2</sub>O<sub>5</sub>) : 28.5 <br>
                (K<sub>2</sub>O) : 261.2
            `
        },
        {
            lat: 32.053782,
            lng: -9.063132,
            info: `
                pH : 6.6 <br>
                (MO%) : 4.3 <br>
                (P<sub>2</sub>O<sub>5</sub>) : 55.7 <br>
                (K<sub>2</sub>O) : 269.7
            `
        },
        {
            lat: 32.037170,
            lng: -9.017405,
            info: `
                pH : 8.3 <br>
                (MO%) : 1.3 <br>
                (P<sub>2</sub>O<sub>5</sub>) : 57.8 <br>
                (K<sub>2</sub>O) : 256.4
            `
        },
        {
            lat: 32.026094,
            lng: -8.960245,
            info: `
                pH : 7.9 <br>
                (MO%) : 4.0 <br>
                (P<sub>2</sub>O<sub>5</sub>) : 52.0 <br>
                (K<sub>2</sub>O) : 336.1
            `
        },
        {
            lat: 32.009478,
            lng: -8.893287,
            info: `
                pH : 8.4 <br>
                (MO%) : 2.5 <br>
                (P<sub>2</sub>O<sub>5</sub>) : 40.9 <br>
                (K<sub>2</sub>O) : 234.4
            `
        },
        {
            lat: 31.973465,
            lng: -8.891654,
            info: `
                pH : 8.5 <br>
                (MO%) : 2.8 <br>
                (P<sub>2</sub>O<sub>5</sub>) : 59.7 <br>
                (K<sub>2</sub>O) : 222.7
            `
        },
        {
            lat: 31.976236,
            lng: -8.935748,
            info: `
                pH : 8.7 <br>
                (MO%) : 2.2 <br>
                (P<sub>2</sub>O<sub>5</sub>) : 49.8 <br>
                (K<sub>2</sub>O) : 350.5
            `
        },
        {
            lat: 31.980392,
            lng: -8.989642,
            info: `
                pH : 7.0 <br>
                (MO%) : 4.1 <br>
                (P<sub>2</sub>O<sub>5</sub>) : 34.3 <br>
                (K<sub>2</sub>O) : 201.1
            `
        },
        {
            lat: 31.990088,
            lng: -9.054967,
            info: `
                pH : 7.7 <br>
                (MO%) : 4.2 <br>
                (P<sub>2</sub>O<sub>5</sub>) : 20.2 <br>
                (K<sub>2</sub>O) : 258.5
            `
        },
        {
            lat: 31.998399,
            lng: -9.103960,
            info: `
                pH : 6.3 <br>
                (MO%) : 4.6 <br>
                (P<sub>2</sub>O<sub>5</sub>) : 30.4 <br>
                (K<sub>2</sub>O) : 248.9
            `
        },
        {
            lat: 32.009478,
            lng: -9.154587,
            info: `
                pH : 6.0 <br>
                (MO%) : 4.6 <br>
                (P<sub>2</sub>O<sub>5</sub>) : 37.2 <br>
                (K<sub>2</sub>O) : 216.1
            `
        },
        {
            lat: 32.006708,
            lng: -9.193782,
            info: `
                pH : 6.5 <br>
                (MO%) : 4.3 <br>
                (P<sub>2</sub>O<sub>5</sub>) : 47.6 <br>
                (K<sub>2</sub>O) : 325.7
            `
        },
        {
            lat: 32.006708,
            lng: -9.239510,
            info: `
                pH : 7.2 <br>
                (MO%) : 4.5 <br>
                (P<sub>2</sub>O<sub>5</sub>) : 33.7 <br>
                (K<sub>2</sub>O) : 181.5
            `
        },
        {
            lat: 32.009478,
            lng: -9.290137,
            info: `
                pH : 7.9 <br>
                (MO%) : 2.7 <br>
                (P<sub>2</sub>O<sub>5</sub>) : 19.4 <br>
                (K<sub>2</sub>O) : 302.5
            `
        }
    ];
    
    // Add more checkpoints as needed

// Add markers and popups
checkpoints.forEach(function(checkpoint) {
    L.marker([checkpoint.lat, checkpoint.lng])
        .addTo(map)
        .bindPopup(checkpoint.info)
        .openPopup();
});

// Add console.log to check to see if our code is working.
console.log("working");

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	accessToken: API_KEY
});

// We create the second tile layer that will be the background of our map.
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	accessToken: API_KEY
});

// We create the dark view tile layer that will be an option for our map.
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// MAYBE ADD BOUNDARY? 
// Create the map object with a center and zoom level.
let map = L.map("mapid", {
  center: [40.85209301,
    -73.86282755],
  zoom: 3,
  layers: [streets]
});

// Create a base layer that holds all three maps.
let baseMaps = {
  "Streets": streets,
  "Satellite": satelliteStreets,
  "Dark": dark
};

// FINAL PROJECT: UPDATE NAMING CONVENTION TO: CURRENT COVID CASES, PROJECTED COVID CASES, AND % TOURIST ARRIVAL
let projectedCovidCases = new L.LayerGroup();
let currentCovidCases = new L.LayerGroup();
let vaccinated = new L.LayerGroup();

// // FINAL PROJECT: UPDATE NAMING CONVENTION TO: CURRENT COVID CASES, PROJECTED COVID CASES, AND % TOURIST ARRIVAL
let overlays = {
  "Top 10 Safest Cities": projectedCovidCases,
  "Current Covid Cases": currentCovidCases,
  "Total Vaccinated": vaccinated,
};

// Then we add a control to the map that will allow the user to change which layers are visible.
L.control.layers(baseMaps, overlays).addTo(map);

// Get data from top_10s
let top10 = top_10;

// Projected Covid Cases
top10.forEach(function(top_10) {
L.marker(top_10.coordinates, {
  radius: top_10.predicted_values,
  color: "#DDCAE2",
  opacity: 1,
  fillOpacity: 0.5,
  stroke: true,
  weight: 0.5
  })
  .bindPopup("<h2>" + top_10.province_state + ", " + top_10.country_region + "</h2> <hr> <h3>Projected Covid Cases: " + top_10.predicted_values + "</h3>")

.addTo(projectedCovidCases);
projectedCovidCases.addTo(map);})

// Get data from cities.js
let cityData = cities;

// Circle Marker for cityData
cityData.forEach(function(cities) {
  // console.log(cities)
L.circleMarker(cities.coordinates, {
    radius: cities.confirmed_cases/10000000,
    color: "#B50027",
    opacity: 1,
    fillOpacity: 0.5,
    stroke: true,
    weight: 0.5
  })
  .bindPopup("<h2>" + cities.province_state + ", " + cities.country_region + "</h2> <hr> <h3>Confirmed Cases: " + cities.confirmed_cases.toLocaleString() + "</h3>")
  .addTo(currentCovidCases);
  currentCovidCases.addTo(map);

L.circleMarker(cities.coordinates, {
  radius: cities.people_fully_vaccinated/10000000,
  color: "#388D5D",
  opacity: 1,
  fillOpacity: 0.5,
  stroke: true,
  weight: 0.5
  })
  .bindPopup("<h2>" + cities.province_state + ", " + cities.country_region + "</h2><hr><h3>Total Vaccinated: " + cities.people_fully_vaccinated.toLocaleString() + "</h3>")
.addTo(vaccinated);
vaccinated.addTo(map);
});
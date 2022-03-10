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
let currentCovidCases = new L.LayerGroup();
let projectedCovidCases = new L.LayerGroup();
let vaccinated = new L.LayerGroup();

// // FINAL PROJECT: UPDATE NAMING CONVENTION TO: CURRENT COVID CASES, PROJECTED COVID CASES, AND % TOURIST ARRIVAL
let overlays = {
  "Current Covid Cases": currentCovidCases,
  "Projected Covid Cases": projectedCovidCases,
  "Total Vaccinated": vaccinated,
};

// Then we add a control to the map that will allow the user to change which layers are visible.
L.control.layers(baseMaps, overlays).addTo(map);

// Get data from cities.js
let cityData = cities;

// Circle Marker for cityData
cityData.forEach(function(cities) {
  console.log(cities)
L.circleMarker(cities.coordinates, {
    radius: cities.confirmed_cases/10000000,
    color: "#B50027",
    opacity: 1,
    fillOpacity: 0.5,
    stroke: true,
    weight: 0.5
  })
  .bindPopup("<h2>" + cities.provine_state + ", " + cities.country_region + "</h2> <hr> <h3>Confirmed Cases: " + cities.confirmed_cases.toLocaleString() + "</h3>")
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
  .bindPopup("<h2>" + cities.provine_state + ", " + cities.country_region + "</h2><hr><h3>Total Vaccinated: " + cities.people_fully_vaccinated.toLocaleString() + "</h3>")
.addTo(vaccinated);
vaccinated.addTo(map);
});

// Catch Error
try {
  nonExistentFunction();
} catch (error) {
  console.error(error);}

// Projected Covid Cases
// L.circleMarker(cities.Coordinates, {
//   radius: cities.projected_covid_cases/1000000,
//   color: "#DDCAE2",
//   opacity: 1,
//   fillOpacity: 0.5,
//   stroke: true,
//   weight: 0.5
//   })
//   .bindPopup("<h2>" + cities.Provine_State + ", " + cities.Country_Region + "</h2> <hr> <h3>"Projected Covid Cases " + cities.projected_covid_cases.toLocaleString() + "</h3>")

// // }).addTo(allEarthquakes);
// .addTo(projectedCovidCases);
// // FINAL PROJECT: ADD TO CONFIRMED COVID CASES MAP
// // Then we add the earthquake layer to our map.
// projectedCovidCases.addTo(map);
// });


// Here we create a legend control object.
// let legend = L.control({
//   position: "bottomright"
// });

// legend.onAdd = function() {
//   let div = L.DomUtil.create('div', 'info legend');

//     labels = ['<strong>Layers</strong>'],
//     categories = ['Confirmed Covid Cases','Total Vaccinated','Projected Covid Cases'];
    
//     const colors = ["#FF0000","#008000"];

//     for (var i = 0; i < categories.length; i++) {
//       console.log(colors[i]);
//       div.innerHTML += 
//         '<i class="circle" style="background:' + colors[i] + '"></i> ' +
//             categories[i] + categories[i + 1] ? "&dash;" + categories[i + 1] + "<br>" : '+';
//         }
//         return div;
//     };
//     legend.addTo(map);
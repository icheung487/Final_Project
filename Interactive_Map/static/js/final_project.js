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

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
	center: [40.7, -94.5],
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
// 1. Add a 3rd layer group for the major earthquake data.
let allEarthquakes = new L.LayerGroup();
let tectonicPlates = new L.LayerGroup();
let majorEarthquakes = new L.LayerGroup();
// let currentCovidCases = new.L.LayerGroup();
// let projectedCovidCases = new.L.LayerGroup();
// let touristArrival = new.L.LayerGroup();


// // FINAL PROJECT: UPDATE NAMING CONVENTION TO: CURRENT COVID CASES, PROJECTED COVID CASES, AND % TOURIST ARRIVAL
// 2. Add a reference to the major earthquake group to the overlays object.
let overlays = {
  "Earthquakes": allEarthquakes,
  "Tectonic Plates": tectonicPlates,
  "Major Earthquakes": majorEarthquakes
  // "Current Covid Cases": currentCovidCases,
  // "Projected Covid Cases": projectedCovidCases,
  // "% Tourist Arrival": touristArrival
};

// Then we add a control to the map that will allow the user to change which
// layers are visible.
L.control.layers(baseMaps, overlays).addTo(map);

// FINAL PROJECT: UPDATE LINK TO DATABASE JSON FILE (CONVERT DF TO JSON)
// Retrieve the earthquake GeoJSON data.
d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson").then(function(data) {
// d3.json("INSERT LINK TO AWS DATABASE JSON URL")

// FINAL PROJECT: UPDATE THE DATA TO ADD "CONFIRMED CASES"
// This function returns the style data for each of the earthquakes we plot on the map. We pass the magnitude of the earthquake into two separate functions
// to calculate the color and radius.
  function styleInfo(feature) {
    return {
      opacity: 1,
      fillOpacity: 1,
      fillColor: getColor(feature.properties.mag),
      // fillColor: getColor(DATA OF CONFIRMED CASES),
      color: "#000000",
      radius: getRadius(feature.properties.mag),
      // radius: getRadius(DATA OF CONFIRMED CASES),
      stroke: true,
      weight: 0.5
    };
  }

  // FINAL PROJECT: UPDATE THE DATA TO ADD "CONFIRMED CASES" AND UPDATE MARKER TO REFLECT CASES
  // This function determines the color of the marker based on the magnitude of the earthquake.
  function getColor(magnitude) {
  // function getColor(DATA OF CONFIRMED CASES) {
    if (magnitude > 5) {
    // if (DATA OF CONFIRMED CASES > IE 5000) {
      return "#ea2c2c";
    }
    if (magnitude > 4) {
    // if (DATA OF CONFIRMED CASES > IE 4000) {
      return "#ea822c";
    }
    if (magnitude > 3) {
    // if (DATA OF CONFIRMED CASES > IE 3000) {
      return "#ee9c00";
    }
    if (magnitude > 2) {
    // if (DATA OF CONFIRMED CASES > IE 2000) {
      return "#eecc00";
    }
    if (magnitude > 1) {
    // if (DATA OF CONFIRMED CASES > IE 1000) {
      return "#d4ee00";
    }
    return "#98ee00";
  }

  // FINAL PROJECT: UPDATE RADIUS TO REFLECT COVID CASES
  // This function determines the radius of the earthquake marker based on its magnitude.
  // Earthquakes with a magnitude of 0 were being plotted with the wrong radius.
  function getRadius(magnitude) {
  // function getRadius(DATA OF CONFIRMED CASES) {
    if (magnitude === 0) {
    // if (DATA OF CONFIRMED CASES === IE 0) {
      return 1;
    }
    return magnitude * 4;
    // return DATA OF CONFIRMED CASES * IE 4;
  }

  // FINAL PROJECT: UPDATE CIRCLEMARKER TO DISPLAY LOCATION AND DATA OF CONFIRMED CASES
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJson(data, {
    	
      // FINAL PROJECT: UPDATE DATA TO ADD LOCATION
      // We turn each feature into a circleMarker on the map.
    	pointToLayer: function(feature, latlng) {
      // pointToLayer: function(feature, DATA OF LOCATION) {
      		console.log(data);
      		return L.circleMarker(latlng);
          // return L.circleMarker(DATA OF LOCATION);
        },
      // We set the style for each circleMarker using our styleInfo function.
    style: styleInfo,
     
    // FINAL PROJECT: UPDATE CIRCLE MARKER TO DISPLAY LOCATION AND DATA OF CONFIRMED CASES
    // We create a popup for each circleMarker to display the magnitude and location of the earthquake
    //  after the marker has been created and styled.
     onEachFeature: function(feature, layer) {
      layer.bindPopup("Magnitude: " + feature.properties.mag + "<br>Location: " + feature.properties.place);
      // layer.bindPopup("Location: " + DATA OF LOCATION + "<br>Covid Cases: " + DATA OF CONFIRMED CASES);
    }
  }).addTo(allEarthquakes);
  // }).addTo(confirmedCovidCases);

  // FINAL PROJECT: ADD TO CONFIRMED COVID CASES MAP
  // Then we add the earthquake layer to our map.
  allEarthquakes.addTo(map);
  // confirmedCovidCases.addTo(map);


// FINAL PROJECT: UPDATE TO REFLECT PROJECTED COVID CASES
// 3. Retrieve the major earthquake GeoJSON data >4.5 mag for the week.
d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson").then(function(data) {
// d3.json("INSERT AWS LINK TO PROJECTED COVID CASES").then(function(data) {

// FINAL PROJECT: UPDATE THE DATA TO ADD "PROJECTED CASES"
// 4. Use the same style as the earthquake data.
function styleInfo(feature) {
  return {
    opacity: 1,
    fillOpacity: 1,
    fillColor: getColor(feature.properties.mag),
    // fillColor: getColor(DATA OF PROJECTED CASES),
    color: "#000000",
    radius: getRadius(feature.properties.mag),
    // // radius: getRadius(DATA OF PROJECTED CASES),
    stroke: true,
    weight: 0.5
  };
}

// FINAL PROJECT: UPDATE THE DATA TO ADD "PROJECTED CASES" AND UPDATE MARKER TO REFLECT CASES
// 5. Change the color function to use three colors for the major earthquakes based on the magnitude of the earthquake.
function getColor(magnitude) {
// // function getColor(DATA OF PROJECTED CASES) {
  if (magnitude > 5) {
  // // if (DATA OF PROJECTED CASES > IE 5000) {
    return "#ea2c2c";
  }
  // if (magnitude > 4) {
  //   return "#ea822c";
  // }
  if (magnitude > 3) {
  // // if (DATA OF PROJECTED CASES > IE 3000) {
    return "#ee9c00";
  }
  // if (magnitude > 2) {
  //   return "#eecc00";
  // }
  // if (magnitude > 1) {
  //   return "#d4ee00";
  // }
  return "#98ee00";
}

// FINAL PROJECT: UPDATE RADIUS TO REFLECT PROJECTED CASES
// 6. Use the function that determines the radius of the earthquake marker based on its magnitude.
function getRadius(magnitude) {
// // function getRadius(DATA OF PROJECTED CASES) {
  if (magnitude === 0) {
  // // if (DATA OF PROJECTED CASES === IE 0) {
    return 1;
  }
  return magnitude * 4;
  // return DATA OF PROJECTED CASES * IE 4;
}

// FINAL PROJECT: UPDATE CIRCLEMARKER TO DISPLAY LOCATION AND DATA OF PROJECTED CASES
// 7. Creating a GeoJSON layer with the retrieved data that adds a circle to the map 
// sets the style of the circle, and displays the magnitude and location of the earthquake
//  after the marker has been created and styled.
L.geoJson(data, {
  // FINAL PROJECT: UPDATE DATA TO ADD LOCATION
  // We turn each feature into a circleMarker on the map.
  pointToLayer: function(feature, latlng) {
  // pointToLayer: function(feature, DATA OF LOCATION) {
      console.log(data);
      return L.circleMarker(latlng);
      // return L.circleMarker(DATA OF LOCATION);
    },

// FINAL PROJECT: UPDATE CIRCLE MARKER TO DISPLAY LOCATION AND DATA OF PROJECTED CASES
    // We set the style for each circleMarker using our styleInfo function.
style: styleInfo,
 
// We create a popup for each circleMarker to display the magnitude and location of the earthquake
 //  after the marker has been created and styled.
 onEachFeature: function(feature, layer) {
  layer.bindPopup("Magnitude: " + feature.properties.mag + "<br>Location: " + feature.properties.place);
  // layer.bindPopup("Location: " + DATA OF LOCATION + "<br>Projected Covid Cases: " + DATA OF PROJECTED CASES);
}
}).addTo(majorEarthquakes);
// }).addTo(projectedCovidCases);

// FINAL PROJECT: ADD TO PROJECTED COVID CASES MAP
// 8. Add the major earthquakes layer to the map.
majorEarthquakes.addTo(map);
// projectedCovidCases.addTo(map);
// 9. Close the braces and parentheses for the major earthquake data.
});


// FINAL PROJECT: ADD LAYER FOR % TOURIST ARRIVAL

// FINAL PROJECT: UPDATE LINK TO DATABASE JSON FILE (CONVERT DF TO JSON)
// Retrieve the earthquake GeoJSON data.
d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson").then(function(data) {
// d3.json("INSERT LINK TO AWS TRAVEL DATABASE JSON URL")

// FINAL PROJECT: UPDATE THE DATA TO ADD "% TOURIST ARRIVAL"
// This function returns the style data for each of the earthquakes we plot on the map. We pass the magnitude of the earthquake into two separate functions
// to calculate the color and radius.
  function styleInfo(feature) {
    return {
      opacity: 1,
      fillOpacity: 1,
      fillColor: getColor(feature.properties.mag),
      // fillColor: getColor(DATA OF TOURIST ARRIVAL),
      color: "#000000",
      radius: getRadius(feature.properties.mag),
      // radius: getRadius(DATA OF TOURIST ARRIVAL),
      stroke: true,
      weight: 0.5
    };
  }

  // FINAL PROJECT: UPDATE THE DATA TO ADD "TOURIST ARRIVAL" AND UPDATE MARKER TO REFLECT TOURIST ARRIVAL
  // This function determines the color of the marker based on the magnitude of the earthquake.
  function getColor(magnitude) {
  // function getColor(DATA OF TOURIST ARRIVAL) {
    if (magnitude > 5) {
    // if (DATA OF CONFIRMED CASES > IE 5000) {
      return "#ea2c2c";
    }
    if (magnitude > 4) {
    // if (DATA OF CONFIRMED CASES > IE 4000) {
      return "#ea822c";
    }
    if (magnitude > 3) {
    // if (DATA OF CONFIRMED CASES > IE 3000) {
      return "#ee9c00";
    }
    if (magnitude > 2) {
    // if (DATA OF CONFIRMED CASES > IE 2000) {
      return "#eecc00";
    }
    if (magnitude > 1) {
    // if (DATA OF CONFIRMED CASES > IE 1000) {
      return "#d4ee00";
    }
    return "#98ee00";
  }

  // FINAL PROJECT: UPDATE RADIUS TO REFLECT TOURIST ARRIVAL
  // This function determines the radius of the earthquake marker based on its magnitude.
  // Earthquakes with a magnitude of 0 were being plotted with the wrong radius.
  function getRadius(magnitude) {
  // function getRadius(DATA OF TOURIST ARRIVAL) {
    if (magnitude === 0) {
    // if (DATA OF TOURIST ARRIVAL === IE 0) {
      return 1;
    }
    return magnitude * 4;
    // return DATA OF TOURIST ARRIVAL * IE 4;
  }

  // FINAL PROJECT: UPDATE CIRCLEMARKER TO DISPLAY LOCATION AND DATA OF TOURIST ARRIVAL
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJson(data, {
    	
      // FINAL PROJECT: UPDATE DATA TO ADD LOCATION
      // We turn each feature into a circleMarker on the map.
    	pointToLayer: function(feature, latlng) {
      // pointToLayer: function(feature, DATA OF LOCATION) {
      		console.log(data);
      		return L.circleMarker(latlng);
          // return L.circleMarker(DATA OF LOCATION);
        },
      // We set the style for each circleMarker using our styleInfo function.
    style: styleInfo,
     
    // FINAL PROJECT: UPDATE CIRCLE MARKER TO DISPLAY LOCATION AND DATA OF TOURIST ARRIVAL
    // We create a popup for each circleMarker to display the magnitude and location of the earthquake
    //  after the marker has been created and styled.
     onEachFeature: function(feature, layer) {
      layer.bindPopup("Magnitude: " + feature.properties.mag + "<br>Location: " + feature.properties.place);
      // layer.bindPopup("Location: " + DATA OF LOCATION + "<br>% Tourist Arrival: " + DATA OF TOURIST ARRIVAL);
    }
  }).addTo(allEarthquakes);
  // }).addTo(touristArrival);

  // FINAL PROJECT: ADD TO CONFIRMED COVID CASES MAP
  // Then we add the earthquake layer to our map.
  allEarthquakes.addTo(map);
  // touristArrival.addTo(map);


// FINAL PROJECT: UPDATE LEGEND
// Here we create a legend control object.
let legend = L.control({
  position: "bottomright"

});

// FINAL PROJECT: UPDATE LEGEND TO REFLECT COVID CASES
// Then add all the details for the legend
legend.onAdd = function() {
  let div = L.DomUtil.create("div", "info legend");

  const magnitudes = [0, 1, 2, 3, 4, 5];
  // const CASES = [0, 1, 2, 3, 4, 5];
  const colors = [
    "#98ee00",
    "#d4ee00",
    "#eecc00",
    "#ee9c00",
    "#ea822c",
    "#ea2c2c"
  ];

// FINAL PROJECT: UPDATE TO REFLECT COVID CASES
// Looping through our intervals to generate a label with a colored square for each interval.
  for (var i = 0; i < magnitudes.length; i++) {
  // for (var i = 0; i < CASES.length; i++) {
    console.log(colors[i]);
    div.innerHTML +=
      "<i style='background: " + colors[i] + "'></i> " +
      magnitudes[i] + (magnitudes[i + 1] ? "&ndash;" + magnitudes[i + 1] + "<br>" : "+");
      // CASES[i] + (CASES[i + 1] ? "&ndash;" + CASES[i + 1] + "<br>" : "+");
    }
    return div;
  };

  // Finally, we our legend to the map.
  legend.addTo(map);
});})

// DISREGARD CODE BELOW - DO NOT NEED FOR FINAL PROJECT
  //   // 3. Use d3.json to make a call to get our Tectonic Plate geoJSON data.
//   d3.json("https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_boundaries.json")
//   .then(function(data) {
//     console.log(data);
//     L.geoJSON(data, {
//       style: {color:"#006400", weight: 2},
//     }).addTo(tectonicPlates)
//   });

//   tectonicPlates.addTo(map);
// });

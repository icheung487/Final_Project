

var dataArr = Plotly.d3.json("../static/data/tree_month_history.json", function(err, data){
    function unpack(data, key) {
        return data.map(function(item) { return item[key]; });
    }
   
    var state_province = unpack(data, 'province_state')
    var cases = unpack(data, 'confirmed_cases')
    var vaccinated = unpack(data, 'people_fully_vaccinated')
    var  MonthHistory = unpack(data, 'month')
    
    // Vaccination Plot
    var trace = {
        x: state_province,
        y: vaccinated,
        type: "bar"
        };
    // Create the data array for the plot
    var VaccinBarr = [trace];
    // Define the plot layout
    var layout = {
        title: "Vaacination",
        xaxis: { title: "State Province" },
        yaxis: { title: "People fully vaccinated" }
        };
    //console.log(VaccinBarr)
     Plotly.react('plot0', VaccinBarr, layout);


    //Cases plot    
    var trace1 = {
        x: state_province,
        y: cases,
        type: "bar"
        };
    // Create the data array for the plot
    var CasesBarr = [trace1];
      
    // Define the plot layout
    var layout1 = {
        title: "Cases",
        xaxis: { title: "Sate Province" },
        yaxis: { title: "Cases" }
      };
    Plotly.react('plot1', CasesBarr, layout1);
    
    // // line chart 
    // var trace2 = {
    //     x: state_province,
    //     y: cases,
    //     mode: 'lines',
    //     connectgaps: true
    //   };
      
    //   var CasesDate = [trace2];
      
    //   var layout2 = {
    //     title: 'Cases history for the past 3 Months',
    //     showlegend: false
    //   };
      
    //    Plotly.react('plot2', CasesDate, layout2);  
 
    var values = state_province;
 
    var select = d3.select("#selDataset");

            list = values.filter(function (x, i, a) { 
                return a.indexOf(x) === i; 
            });

            for (val of list)
            {
                select.append("option").text(val).property("value",val);
            }
 
});

function optionChanged(place){
    Plotly.d3.json("static/data/tree_month_history.json", function(err, data){
        function unpack(data, key) {
            return data.map(function(item) { return item[key]; });
        }
        // filter based on place 
        const result = top_10.filter(({province_state}) => province_state === place);
        var xcity= result[0]["province_state"];
        var cityCases = result[0]['cases_per_day'];
        var cityVaccinated = result[0]['people_fully_vaccinated'];
        console.log(result);
        console.log(cityCases);
        console.log(cityVaccinated);
        // plot based on place 
        var filtredCity = [
            {
              x: xcity ,
              y: [cityCases,cityVaccinated] ,
              type: 'bar'
            }
          ];

        Plotly.newPlot('plot2', filtredCity);
    

    });

    //console.log(place);
};

function openTab(pageName, elmnt, color) {
    // Hide all elements with class="tabcontent" by default */
      var i, tabcontent, tablinks;
      tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
        }
  
      // Remove the background color of all tablinks/buttons
      tablinks = document.getElementsByClassName("tablink");
      for (i = 0; i < tablinks.length; i++) {
          tablinks[i].style.backgroundColor = "";
        }
  
      // Show the specific tab content
       document.getElementById(pageName).style.display = "block";
      // Add the specific color to the button used to open the tab content
       elmnt.style.backgroundColor = color;
      
    }  

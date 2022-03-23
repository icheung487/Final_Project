/* Charts */
/* global d3, crossfilter, Linechart , barChart */

var barChartCases = barChart()
  .width(600)
  .x(function (d) { return d.key;})
  .y(function (d) { return d.value;});

var barChartVaccin = barChart()
  .x(function (d) { return d.key;})
  .y(function (d) { return d.value;});


var lineChartGate = lineChart()
  .width(600)
  .x(function (d) { return d.key;})
  .y(function (d) { return d.value;});

d3.json("top_10.js",
  function (d) {
    // This function is applied to each row of the dataset
    d.Timestamp = dateFmt(d.Timestamp);
    return d;
  },
  function (err, data) {
    if (err) throw err;

    var csData = crossfilter(data);

    // We create dimensions for each attribute we want to filter by
    csData.lastupdate = csData.dimension(function (d) { return d.Timestamp; });
    csData.dimCasesByPlaces = csData.dimension(function (d) { return d["cases-places"]; });
    csData.dimVaccinationByPlaces = csData.dimension(function (d) { return d["vaccin-places"]; });

    // We bin each dimension
    csData.lastupdate = csData.dimTime.group(d3.timeHour);
    csData.CasesByPlaces = csData.dimCasesByPlaces.group();
    csData.VaccinationByPlaces = csData.dimVaccinationByPlaces.group();


    chartTimeline.onBrushed(function (selected) {
      csData.dimTime.filter(selected);
      update();
    });

    barChartCases.onMouseOver(function (d) {
      csData.dimCarType.filter(d.key);
      update();
    }).onMouseOut(function () {
      // Clear the filter
      csData.dimCasesByPlaces.filterAll();
      update();
    });

    barChartVaccin.onMouseOver(function (d) {
      csData.dimGateName.filter(d.key);
      update();
    }).onMouseOut(function () {
      // Clear the filter
      csData.dimVaccinationByPlaces.filterAll();
      update();
    });

    function update() {
      d3.select("#timeline")
        .datum(csData.timesByHour.all())
        .call(chartTimeline);

      d3.select("#CasesByPlaces")
        .datum(csData.CasesByPlaces.all())
        .call(barChartCases);

      d3.select("#CasesByPlaces")
        .datum(csData.dimVaccinationByPlaces.all())
        .call(barChartVaccin)
        .select(".x.axis") //Adjusting the tick labels after drawn
        .selectAll(".tick text")
        .attr("transform", "translate(-8,-1) rotate(-45)");

    }

    update();


  }
);

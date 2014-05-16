'use strict';

window.ChartFactory = function(chartType) {
//    var chartType = options.chartType,
//        chart = null,
//        data = options.chartData;

    ///////////////////////////////////////////////////////////////
//    var series = [],
//        categories = [],
//        chartData = [];  // the model needed by d3
//

//    var config = {
//        selector: "#d3Chart",
//        height: 600,//options.height,
//        width: 600,//options.width,
//        data: options.chartData
//    };

    switch (chartType) {
        case "StackedBarChart":
            $("#d3Charts").append($compile("<barchart data='data' columnNames='columnNames'></barchart>")($scope));
            console.log();
            break;

        case "LineChart":

            break;

        case "PieChart":

            break;

        default:
            console.error("Chart type '" + chartType + "' is not supported.");
    }
    //return chart;
};
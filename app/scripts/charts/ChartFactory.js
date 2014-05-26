'use strict';

window.ChartFactory = function(chartType) {

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
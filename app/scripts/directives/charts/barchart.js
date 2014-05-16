'use strict';

openData.directive("barchart", function(ChartData) {
    return {
        restrict: "E",

        templateUrl: "templates/directives/charts/chart.html",
        scope: {
            data: "=data",
            currentConfig: "=config",
            columnNames: "=columnnames"
        },

        link: function(scope) {
            var firstLoad = true;
            var firstInit = true;
            var chart = null;
            var config = {};
            var options = {};
            var viewId;
            var getRandomId = function(){
                return Math.floor((Math.random() * 100) + 1);
            }

            scope.generateChart = function(){
                loadData();
            }

            scope.title = scope.currentConfig.title;
            scope.chartReady = true;

            scope.selector = 'barchartid' + getRandomId();

            var loadData = function(){

                config = {
                    selector: scope.selector,
                    yTitle: options.yAx + (options.filter.key?(" by " + options.filter.key):"")
                };


                ChartData.getBarChartData(scope.data, options, function(data){
                    console.log(options);

                    if(firstLoad){
                        firstLoad = false;
                        chart =  new BarChart(config);
                        chart.draw(data);
                    }

                    else {
                        chart.draw(data);
                    }
                });
            }

            scope.$watch('data', function() {
                if(firstInit){
                    console.log(scope.currentConfig);
                    viewId = scope.currentConfig.viewID;

                    var xAxis = scope.currentConfig.xAx.name;
                    var yAxis = scope.currentConfig.yAx.name;

                    options = {
                        xAx: xAxis,
                        yAx: yAxis,

                        filter: {
                            key: "",
                            start: "",
                            end:""
                        }
                    };
                    firstInit = false;
                }
                loadData();
            }, true);

            scope.delete = function(){
                $("#" + viewId).empty()
            }
            //loadData();
        }
    }
});
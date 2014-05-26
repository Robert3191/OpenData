'use strict';

openData.directive("linechart", function(ChartData) {
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

            var setXAxisMaxLength = function(data){
                console.log(scope.columnNames);
                var max = 0;
                var string_length = 0;

                for(var index = 0; index < data.length; index ++){
                    string_length = data[index][0].toString().length;
                    if(string_length > max); max = string_length
                }

                console.log(max);
                console.log(config);

                if(max <= 4) config["xAxisMaxLength"] = 35;
                if(max > 4 && max <= 10) config["xAxisMaxLength"] = 70;
                if(max > 10 && max <= 20) config["xAxisMaxLength"] = 150;
                if(max > 20) config["xAxisMaxLength"] = 200;
            }


            scope.generateChart = function(){
                loadData();
            }

            scope.title = scope.currentConfig.title;
            scope.chartReady = true;

            scope.selector = 'linechartid' + getRandomId();

            var loadData = function(){

                config = {
                    selector: scope.selector,
                    yTitle: options.yAx + (options.filter.key?(" by " + options.filter.key):"")
                };


                ChartData.getBarChartData(scope.data, options, function(data){
                    console.log(options);

                    if(firstLoad){
                        firstLoad = false;
                        setXAxisMaxLength(data);
                        chart =  new Line(config);
                        chart.draw(data);
                    }

                    else {
                        chart.draw(data);
                    }
                });
            }

            scope.$watch('data', function() {
                if(firstInit){
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
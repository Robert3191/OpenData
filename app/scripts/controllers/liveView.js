
openData.controller("LiveViewCtrl", function($scope, $rootScope, $routeParams, $compile, $timeout, OpenDataSocketFactory, CHART_TYPES) {
    var _timeout;

    $scope.chartTypes     = CHART_TYPES.chartTypes;
    $scope.selectedChart  =  $scope.chartTypes[0];
    $scope.areDataLoaded  = false;
    $scope.columnNames    = [];
    $scope.currentConfig  = Util.getConfig();
    $scope.defConf        = Util.getConfig()[0];
    $scope.selectedConfig = null;

    console.log(Util.getConfig()[0]);
    var firstLoad = true;
    var chart_ID;
    var apiURL    = $routeParams.data;

    var getRandomId = function(){
        return Math.floor((Math.random() * 100) + 1);
    }

    $scope.$on('$destroy',function(){
        $timeout.cancel(_timeout);
    });

    $scope.addChart = function(chartType, selC){
        chart_ID = "cw" + getRandomId();
        $scope.selectedConfig = selC;
        $scope.selectedConfig["viewID"] = chart_ID;

        switch(chartType){
            case "bar":

                $("#d3Charts").append($compile("<barchart id='"+ chart_ID +"' data='data' config='selectedConfig' columnNames='columnNames'></barchart>")($scope));
                console.log(chartType);
                break;
            case "StackedBarChart":
                $("#d3Charts").append($compile("<barchart id='"+ chart_ID +"' data='data' columnNames='selectedConfig'></barchart>")($scope));
                console.log(chartType);
                break;

            case "line":
                $("#d3Charts").append($compile("<linechart id='"+ chart_ID +"' data='data' config='selectedConfig' columnNames='columnNames'></barchart>")($scope));
                console.log(chartType);
                break;

            case "pie":
                $("#d3Charts").append($compile("<piechart id='"+ chart_ID +"' data='data' config='selectedConfig' columnNames='columnNames'></barchart>")($scope));
                console.log(chartType);
                break;

            default:
                console.log(chartType);
                console.error("Chart type '" + chartType + "' is not supported.");
        }
    }

    OpenDataSocketFactory.emit('getData', apiURL.toLowerCase());
    OpenDataSocketFactory.on('dataReceived', function(data){
        $scope.title = data.title;
        $scope.columnNames = Util.parseData(data)[0];
        $scope.data = Util.parseData(data)[1];
        $scope.timeout = data.timeout;
        $scope.areDataLoaded = true;

        if(firstLoad){
            firstLoad = false;
            $("#datasheetLoad").append($compile("<div datasheet data='data' title='Population' columns='columnNames'></div>")($scope));
        }
    });
});
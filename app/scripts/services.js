'use strict';

var openDataRes = angular.module('openDataResources', ['ngResource']);

openDataRes.factory('OpenDataFactory', function($resource){
    return $resource('rest/:url');

});

openDataRes.factory('OpenDataSocketFactory', function($rootScope){
    var socket = io.connect("http://localhost");
    return {
        on: function (eventName, callback) {
            socket.on(eventName, function () {
                var args = arguments;
                $rootScope.$apply(function () {
                    callback.apply(socket, args);
                });
            });
        },
        emit: function (eventName, data, callback) {
            socket.emit(eventName, data, function () {
                var args = arguments;
                $rootScope.$apply(function () {
                    if (callback) {
                        callback.apply(socket, args);
                    }
                });
            })
        }

    };

});

openDataRes.factory("ApiListFactory", function($http, $location){
    var apiList = null;
    return {
        getApiList: function(success, forcedGet){
            if(apiList && !forcedGet) success(apiList);
            else{
                $http.get('rest/opendata')
                    .success(function(data) {
                        apiList = data;
                        success(data);
                    })
                    .error("Error");
            }
        },
        getDataFromApi: function(id, success){
            if(!apiList) $location.path("/");

            for(var index = 0; index < apiList.length; index ++){
                if(apiList[index].id == id) {
                    success(apiList[index]);
                }
            }
        }

    }
});

openDataRes.factory("ChartData", function(){
    var dataMatrix =[];
    var options2 = {
        xAx: "year",
        yAx: "people",
        filter: {
            key: "sex",
            value: "0"
        }
    };
    var foundFlag;
    return{
        getBarChartData: function(data, options, success){
            dataMatrix =[];
            for(var index = 0; index < data.length; index ++){
                foundFlag = false;
                for(var index2 = 0; index2 < dataMatrix.length; index2 ++){
                    if(dataMatrix[index2][0] == data[index][options.xAx]){
                        foundFlag = true;
                        dataMatrix[index2][1] = dataMatrix[index2][1] + data[index][options.yAx];
                    }
                }

                if(!foundFlag){
                    var buff = [];
                        buff[0] =   data[index][options.xAx];
                        buff[1] =   data[index][options.yAx];

                    dataMatrix.push(buff);
                }
            }
            success(dataMatrix);
        },

        getPieChartData: function(data, options, success){
            dataMatrix =[];
            for(var index = 0; index < data.length; index ++){
                foundFlag = false;
                for(var index2 = 0; index2 < dataMatrix.length; index2 ++){
                    if(dataMatrix[index2][0] == data[index][options.xAx]){
                        foundFlag = true;
                        dataMatrix[index2][1] = dataMatrix[index2][1] + data[index][options.yAx];
                    }
                }

                if(!foundFlag){
                    var buff = [];
                    buff[0] =   data[index][options.xAx];
                    buff[1] =   data[index][options.yAx];

                    dataMatrix.push(buff);
                }
            }
            console.log(dataMatrix);
            success(dataMatrix);
        }
    }
});
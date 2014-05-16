'use strict';

openData.directive("sidebar", function() {
    return {
        restrict: "A",
        templateUrl: "templates/directives/sidebar.html",
        controller: function($scope, $rootScope, $location, ApiListFactory) {
            ApiListFactory.getApiList(function(data){
                $rootScope.apiList = data;


            },false);

            $scope.setApi = function(data){

                $rootScope.currentConfig = data.config;

            }
        }
    }
})
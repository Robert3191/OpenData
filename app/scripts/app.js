'use strict';

var openData = angular.module('openData', ["openDataResources"]);

openData.config(function($routeProvider) {
    $routeProvider
        .when('/:api', {
            templateUrl: 'templates/home.html',
            controller: 'HomeCtrl'
        })

        .when('/LiveView/:data', {
            templateUrl: 'templates/liveView.html',
            controller: 'LiveViewCtrl'
        })
        .otherwise({ redirectTo: '/'});

    // for IE
    window.console = window.console || {};
    window.console.log = window.console.log || function() {};
});

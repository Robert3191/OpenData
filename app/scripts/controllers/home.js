
openData.controller("HomeCtrl", function($scope, $routeParams, ApiListFactory) {

    $scope.isApiSelected = function(){
      return $routeParams.api.length>0;
    }

    if($routeParams.api.length>0){
        var id = +$routeParams.api;

        ApiListFactory.getDataFromApi(id, function(data){
            $scope.selectedApi = data;
        });
    }
})
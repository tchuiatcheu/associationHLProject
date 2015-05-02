

angular.module('associationHLProject').controller('EditIncomeController', function($scope, $routeParams, $location, IncomeResource ) {
    var self = this;
    $scope.disabled = false;
    $scope.$location = $location;
    
    $scope.get = function() {
        var successCallback = function(data){
            self.original = data;
            $scope.income = new IncomeResource(self.original);
        };
        var errorCallback = function() {
            $location.path("/Incomes");
        };
        IncomeResource.get({IncomeId:$routeParams.IncomeId}, successCallback, errorCallback);
    };

    $scope.isClean = function() {
        return angular.equals(self.original, $scope.income);
    };

    $scope.save = function() {
        var successCallback = function(){
            $scope.get();
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError=true;
        };
        $scope.income.$update(successCallback, errorCallback);
    };

    $scope.cancel = function() {
        $location.path("/Incomes");
    };

    $scope.remove = function() {
        var successCallback = function() {
            $location.path("/Incomes");
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError=true;
        }; 
        $scope.income.$remove(successCallback, errorCallback);
    };
    
    
    $scope.get();
});
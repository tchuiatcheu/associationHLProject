
angular.module('associationHLProject').controller('NewIncomeController', function ($scope, $location, locationParser, IncomeResource ) {
    $scope.disabled = false;
    $scope.$location = $location;
    $scope.income = $scope.income || {};
    

    $scope.save = function() {
        var successCallback = function(data,responseHeaders){
            var id = locationParser(responseHeaders);
            $location.path('/Incomes/edit/' + id);
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError = true;
        };
        IncomeResource.save($scope.income, successCallback, errorCallback);
    };
    
    $scope.cancel = function() {
        $location.path("/Incomes");
    };
});
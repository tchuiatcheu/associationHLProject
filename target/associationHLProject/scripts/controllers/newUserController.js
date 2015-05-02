
angular.module('associationHLProject').controller('NewUserController', function ($scope, $location, locationParser, UserResource , UserResource) {
    $scope.disabled = false;
    $scope.$location = $location;
    $scope.user = $scope.user || {};
    
    $scope.userList = UserResource.queryAll(function(items){
        $scope.userSelectionList = $.map(items, function(item) {
            return ( {
                value : item.id,
                text : item.id
            });
        });
    });
    $scope.$watch("userSelection", function(selection) {
        if ( typeof selection != 'undefined') {
            $scope.user.user = {};
            $scope.user.user.id = selection.value;
        }
    });
    
    $scope.statusList = [
        "true",
        "false"
    ];


    $scope.save = function() {
        var successCallback = function(data,responseHeaders){
            var id = locationParser(responseHeaders);
            $location.path('/Users/edit/' + id);
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError = true;
        };
        UserResource.save($scope.user, successCallback, errorCallback);
    };
    
    $scope.cancel = function() {
        $location.path("/Users");
    };
});
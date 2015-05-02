

angular.module('associationHLProject').controller('EditUserController', function($scope, $routeParams, $location, UserResource , UserResource) {
    var self = this;
    $scope.disabled = false;
    $scope.$location = $location;
    
    $scope.get = function() {
        var successCallback = function(data){
            self.original = data;
            $scope.user = new UserResource(self.original);
            UserResource.queryAll(function(items) {
                $scope.userSelectionList = $.map(items, function(item) {
                    var wrappedObject = {
                        id : item.id
                    };
                    var labelObject = {
                        value : item.id,
                        text : item.id
                    };
                    if($scope.user.user && item.id == $scope.user.user.id) {
                        $scope.userSelection = labelObject;
                        $scope.user.user = wrappedObject;
                        self.original.user = $scope.user.user;
                    }
                    return labelObject;
                });
            });
        };
        var errorCallback = function() {
            $location.path("/Users");
        };
        UserResource.get({UserId:$routeParams.UserId}, successCallback, errorCallback);
    };

    $scope.isClean = function() {
        return angular.equals(self.original, $scope.user);
    };

    $scope.save = function() {
        var successCallback = function(){
            $scope.get();
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError=true;
        };
        $scope.user.$update(successCallback, errorCallback);
    };

    $scope.cancel = function() {
        $location.path("/Users");
    };

    $scope.remove = function() {
        var successCallback = function() {
            $location.path("/Users");
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError=true;
        }; 
        $scope.user.$remove(successCallback, errorCallback);
    };
    
    $scope.$watch("userSelection", function(selection) {
        if (typeof selection != 'undefined') {
            $scope.user.user = {};
            $scope.user.user.id = selection.value;
        }
    });
    $scope.statusList = [
        "true",
        "false"
    ];
    
    $scope.get();
});
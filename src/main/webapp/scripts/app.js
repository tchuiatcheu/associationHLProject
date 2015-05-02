'use strict';

angular.module('associationHLProject',['ngRoute','ngResource'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/',{templateUrl:'views/landing.html',controller:'LandingPageController'})
      .when('/Incomes',{templateUrl:'views/Income/search.html',controller:'SearchIncomeController'})
      .when('/Incomes/new',{templateUrl:'views/Income/detail.html',controller:'NewIncomeController'})
      .when('/Incomes/edit/:IncomeId',{templateUrl:'views/Income/detail.html',controller:'EditIncomeController'})
      .when('/Members',{templateUrl:'views/Member/search.html',controller:'SearchMemberController'})
      .when('/Members/new',{templateUrl:'views/Member/detail.html',controller:'NewMemberController'})
      .when('/Members/edit/:MemberId',{templateUrl:'views/Member/detail.html',controller:'EditMemberController'})
      .when('/Users',{templateUrl:'views/User/search.html',controller:'SearchUserController'})
      .when('/Users/new',{templateUrl:'views/User/detail.html',controller:'NewUserController'})
      .when('/Users/edit/:UserId',{templateUrl:'views/User/detail.html',controller:'EditUserController'})
      .otherwise({
        redirectTo: '/'
      });
  }])
  .controller('LandingPageController', function LandingPageController() {
  })
  .controller('NavController', function NavController($scope, $location) {
    $scope.matchesRoute = function(route) {
        var path = $location.path();
        return (path === ("/" + route) || path.indexOf("/" + route + "/") == 0);
    };
  });

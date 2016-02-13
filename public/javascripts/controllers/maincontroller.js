var app = angular.module('coffeeMate');

app.controller('mainController', ['$scope', function ($scope) {
    $scope.message = 'welcome to the coffeeMate';
}]);
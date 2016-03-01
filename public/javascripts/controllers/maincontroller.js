var app = angular.module('coffeeMate');

app.controller('mainController', ['$scope', function ($scope) {
    $scope.message = 'Welcome to the coffeeMate';
}
]);
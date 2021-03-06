var app = angular.module('coffeeMate');

app.controller('coffeeController', ['$scope', '$location', '$http', function ($scope, $location, $http) {
    $scope.message = 'Enter your Coffee details below...';

    $scope.formData = {};

    $scope.amount = 100;
    $scope.options = [{name: "PayPal", id: 0}, {name: "Direct", id: 1}];
    $scope.formData.paymentOptions = $scope.options[0];

    $scope.formData.paymenttype = 'PayPal';
    $scope.formData.name = '';
    $scope.formData.shop = '';
    $scope.formData.amount = 1.99;
    $scope.formData.upvotes = 0;

    $scope.addCoffee = function () {
        $scope.formData.paymenttype = $scope.formData.paymentOptions.name;
        $http.post('/coffees', $scope.formData)
            .success(function (data) {
                $scope.coffees = data;
                $location.path('/viewcoffees');
                console.log(data);
            })
            .error(function (data) {
                console.log('Error: ' + data);
            });
    };



}

]);

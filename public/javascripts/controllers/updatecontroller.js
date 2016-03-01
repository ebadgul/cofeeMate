var app = angular.module('coffeeMate');

app.controller('updateController', ['$scope', '$location', '$http', function ($scope, $location, $http) {
    $scope.message = 'Update Exiting Coffee...';

    $scope.formData = {};

    $scope.amount = 100;
    $scope.options = [{name: "PayPal", id: 0}, {name: "Direct", id: 1}];
    $scope.formData.paymentOptions = $scope.options[0];

    $scope.formData.paymenttype = 'PayPal';
    $scope.formData.name = '';
    $scope.formData.shop = '';
    $scope.formData.amount = 1.99;
    $scope.formData.upvotes = 0;

    $scope.update = function (id) {
        $http.get('/coffees/'+id)
            .success(function (data) {

                console.log(data);
            })
            .error(function (data) {
                console.log('Error: ' + data);
            });
    };

}

]);

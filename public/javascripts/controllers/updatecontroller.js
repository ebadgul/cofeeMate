var app = angular.module('coffeeMate');

app.controller('updateController', ['$scope', '$location', '$http', '$route', function ($scope, $location, $http, $route) {
    $scope.message = 'Update Exiting Coffee...';


    findOne($route.current.params["coffeeId"]);
    function findOne(id) {
        $http.get('/coffees/' + id).success(function (data) {
            $scope.coffee = data[0];
            console.log(data);
        }).error(function (data) {
            console.log('Errorrr: ' + data);
        });

    };


/*    $scope.updateCoffee = {};

    $scope.updateCoffee = function () {

        $scope.updateCoffee.name = $scope.coffee.name;
        $scope.updateCoffee.shop = $scope.coffee.shop;
        $scope.updateCoffee.amount = $scope.coffee.amount;


        console.log("nameee"+$scope.updateCoffee.name);
        //$scope.formData.paymenttype = $scope.formData.paymentOptions.name;
        $http.put('/coffees/'+$scope.coffee._id, $scope.updateCoffee)
            .success(function (data) {
                $scope.coffee = data;
                $location.path('/viewcoffees');
                console.log(data);
            })
            .error(function (data) {
                console.log('Error: ' + data);
            });
    };*/

    $scope.updateCoffee = function () {
        console.log("updateClickd");
        console.log("coffeenname : " + $scope.coffee.name);
        console.log("coffeenname : " + $scope.coffee.shop);

        //$scope.coffee = {};

        $scope.coffee[0].name = $scope.coffee.name;
        $scope.coffee[0].shop = $scope.coffee.shop;
        $scope.coffee[0].amount = $scope.coffee.amount;

        $http.put('/coffees/' + $scope.coffee._id, $scope.coffee)
            .success(function (data) {
                $location.path('/viewcoffees');
                console.log(data);
            })
            .error(function (data) {
                console.log('Error: ' + data);
            });
    };

}

]);

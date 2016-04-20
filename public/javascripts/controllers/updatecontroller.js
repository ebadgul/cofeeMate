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

    var id = ($route.current.params["coffeeId"]);
    console.log("iddd "+id);

    //$scope.coffee = {};

    $scope.updateCoffee = function (id) {
        console.log("updateClickd");
        console.log("coffeenname : " + $scope.coffee.name);
        console.log("coffeenname : " + $scope.coffee.shop);


        console.log($scope.coffee);

        $http.put('/coffees/'+$scope.coffee._id, $scope.coffee)
            .success(function (data) {
                $location.path('/viewcoffees');
                console.log("idee"+$route.current.params["coffeeId"]);
                //console.log(data[0]);
            })
            .error(function (data) {
                console.log('Error: ' + data);
            });
    };

}

]);

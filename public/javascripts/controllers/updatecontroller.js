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

    //var id = ($route.current.params["coffeeId"]);
    //console.log("iddd "+id);

    //$scope.coffee = {};

    $scope.updateCoffee = function () {
        console.log("updateClickd");
        console.log("coffeenname : " + $scope.coffee.name);
        console.log("coffeenname : " + $scope.coffee.shop);1
        console.log($scope.coffee);

        $http.put('/coffees/'+$scope.coffee._id, $scope.coffee)
            .success(function (data) {
                $location.path('/viewcoffees');

                console.log("idee"+$scope.coffee._id);
                console.log("scpp"+$scope.coffee);
            })
            .error(function (data) {
                console.log('Error: ' + data);
            });
    };

    /*

    // Coffee shop rating retrieval
    $scope.getRating = function(rating) {
        if (!$scope.hover) {
            if (!$scope.res.overall_rating || rating > $scope.res.overall_rating)
                return 'fa fa-star fa-star-off';
            else if ($scope.res.overall_rating || rating <= $scope.res.overall_rating)
                return 'fa fa-star fa-star-on'
        }
        else {
            if ($scope.hover < rating)
                return 'fa fa-star fa-star-off';
            else
                return 'fa fa-star fa-star-on'
        }
    };


   // Mouse over rating star (single shop)
    $scope.starHoverIn = function(no) {
        $scope.hover = no;
    };

    // Mouse leaving rating star (single shop)
    $scope.starHoverOut = function() {
        $scope.hover = null;
    };*/


    $scope.incrementUpvotes = function (id) {
        $http.put('/coffees/' + id + '/votes')
            .success(function (data) {
                console.log("upv"+data);
                console.log(data);
                findOne(id);
            }).error(function (data) {
            console.log('Error: ' + data);
        });
    }



}

]);

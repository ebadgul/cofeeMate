var app = angular.module('coffeeMate');


app.controller('viewCoffeesController', ['$scope','$http', function($scope, $http) {
    // create a message to display in our view
    $scope.message = 'This viewing all coffe page';

    findAll();
    function findAll(){
        $http.get('/coffees').success(function(data){
            $scope.coffees = data;
            console.log(data);
            }).error(function(data){
            console.log('Errorrr: '+data);
        });

    };
}
]);

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

    $scope.incrementUpvotes = function(id){
        $http.put('/coffees/'+id+ '/votes')
            .success(function(data){
                console.log(data);
                findAll();
            }).error(function(data){
            console.log('Error: '+data);
        });
    }


    $scope.delete = function(id){
        if(confirm("Are you sure you want to delete?")){
            console.log('deleted coffee id: '+id);
            $http.delete('/coffees/'+id)
                .success(function(data){
                    $scope.coffees = data;
                    console.log(data);
                    findAll();
                }).error(function(data){
                console.log('Error: '+data);
            });
        }
    };
}
]);

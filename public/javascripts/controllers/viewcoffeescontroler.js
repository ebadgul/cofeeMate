var app = angular.module('coffeeMate');


app.controller('viewCoffeesController', ['$scope', function($scope) {
    // create a message to display in our view
    $scope.message = 'This viewing all coffe page';
}
]);

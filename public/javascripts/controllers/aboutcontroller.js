var app = angular.module('coffeeMate');

app.controller('aboutController', ['$scope', function ($scope) {
    // create a message to display in our view
    $scope.message = 'wow this is the about page and does not have anything related to this site';
}
]);
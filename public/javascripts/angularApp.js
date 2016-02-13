var app = angular.module('CoffeeMate', ['ngRoute']);
app.config(function ($routeProvider) {
    $routeProvider

    //route for home page
        .when('/', {
            templateUrl: 'pages/home.ejs',
            controller: 'mainController'
        });
})
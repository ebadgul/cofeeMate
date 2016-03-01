var app = angular.module('coffeeMate', ['ngRoute']);
app.config(function ($routeProvider) {
    $routeProvider

        //route for home page
        .when('/', {
              templateUrl: 'pages/home.ejs',
              controller: 'mainController'
            })
        //route for add coffee page
        .when('/addcoffee', {
            templateUrl: 'pages/addcoffee.ejs',
            controller: 'coffeeController'
        })
        //route for view coffees
         .when('/viewcoffees', {
             templateUrl: 'pages/viewcoffees.ejs',
             controller: 'viewCoffeesController'
            })
        // contact us page
        .when('/contact',{
            templateUrl: 'pages/contact.ejs',
            controller: 'contactController'
        })
        // edit/update page
        .when('/update',{
            templateUrl: 'pages/update.ejs',
            controller: 'updateController'
        })
        // route for the about page
        .when('/about', {
            templateUrl: 'pages/about.ejs',
            controller: 'aboutController'
        });
});
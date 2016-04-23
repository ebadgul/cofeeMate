var app = angular.module('coffeeMate');

app.controller('mainController', ['$scope', '$location', '$http', '$route', function ($scope, $location, $http, $route) {
    $scope.message = 'Welcome to the coffeeMate';





    //$scope.formData = {};


/*
     $scope.onSignIn = function(googleUser) {
        // Useful data for your client-side scripts:
        var profile = googleUser.getBasicProfile();
        console.log("ID: " + profile.getId()); // Don't send this directly to your server!
        console.log('Full Name: ' + profile.getName());
        console.log('Given Name: ' + profile.getGivenName());
        console.log('Family Name: ' + profile.getFamilyName());
        console.log("Image URL: " + profile.getImageUrl());
        console.log("Email: " + profile.getEmail());


         //$http.post('users', {gp_login: 1, login})

        // The ID token you need to pass to your backend:
        var id_token = googleUser.getAuthResponse().id_token;
        console.log("ID Token: " + id_token);
    };*/


    //$scope.onSignIn = function(googleUser){
    //    var profile = googleUser.getBasicProfile();
    //
    //    console.log("userNameeee"+$scope.profile.getName());
    //
    //}





}
]);
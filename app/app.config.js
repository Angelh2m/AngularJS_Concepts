'use strict';

angular.module('try')
    .config(function( $locationProvider, $routeProvider ){
        // $locationProvider.html5Mode({enabled:true}); 
        $locationProvider.hashPrefix('!');

        $routeProvider
            .when('/', {
                template: '<here-name></here-name>'
            })

            .when('/forms', {
                template: '<form-validation></form-validation>'
            })

            .when('/blog/:id', {
                template: '<blog-detail><blog-detail>'
            })

            .when('/blog/:id/:abc', {
                template: '<here-name></here-name>'
            })
            .otherwise({
                template: "NOT FOUND"
            })
});
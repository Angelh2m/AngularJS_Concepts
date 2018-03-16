'use strict';

angular.module('try')
    .config(function( $locationProvider, $routeProvider ){
        // $locationProvider.html5Mode({enabled:true}); 
        $locationProvider.hashPrefix('!');

        $routeProvider
            .when('/', {
                template: '<here-name></here-name>'
            })

            .when('/test/:id', {
                template: '<test-component></test-component>'
            })

            .when('/blog/:id', {
                template: '<h1>HERE!</h1>'
            })
            .otherwise({
                template: "NOT FOUND"
            })
});
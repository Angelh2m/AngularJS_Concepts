'use strict';

angular.module('try')
    .config(function( $locationProvider, $routeProvider ){
        // $locationProvider.html5Mode({enabled:true}); 
        $locationProvider.hashPrefix('!');

        $routeProvider
            .when('/', {
                controller: 'blogList',
                templateURL: './blog-list/blog-list.template.html'
            })
            .when('/blog/1', {
                template: '<h1>HERE!</h1>'
            })
            .when('/blog/2', {
                controller: 'blogList',
                templateURL: './blog-list/blog-list.template.html'
            })

            .otherwise({
                template: "NOT FOUND"
            })
});
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
            
            .when('/directives', {
                template: '<directive-comp></directive-comp>'
            })

            .when('/contact', {
                templateUrl: 'app/contact-form/contact-form.template.html',
                controller: 'contactForm2',
            })

            .when('/regex', {
                templateUrl: 'app/regex/regex.html',
                controller: 'regex',
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
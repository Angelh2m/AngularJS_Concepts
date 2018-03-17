'use strict';
(function(angular) {

var app = angular.module('contactForm', ['postcall']);

// [+]  ng-controller="contactForm2"
app.controller('contactForm2', ['$scope', '$location', 'Postcall', '$http',
    function($scope, $location, Postcall, $http) {
            
            // $scope.greeting = 'Hello'
            // [+] Post the data          
            $scope.sendMessage = function(){

                $http.post('http://localhost:3000/usuario/', $scope.user).then(success, error);

                function success(reponse) {
                    console.log('User created!', reponse)
                }
                function error(reponse) {
                    console.log('There is an error', reponse)
                }

            }
    }])

// app.controller('contactForm', function($scope, $location){
//      $scope.greeting = 'Hello'
//     $scope.sendMessage = function(){
//         console.log('redirect');
//         $location.path('contac-success');
//     }
// });

// [+]  <contact-form> cotrol more the DOM
// app.directive('contactForm', [ function() {
//     return {
//         // restrict: 'E',
//         // scope: {
//         //     // [+] '=' Two way binding
//         //     // ninjas: ' = ',
//         //     // title: '='
//         // },
//         templateUrl: './app/contact-form/contact-form.template.html',
//         // transclude: true,
//         // replace: true,
//         // controller: function($scope){
//         //     // $scope.random = Math.floor( Math.random() * 4);
//         // },
//         // link: function() {
//         //     // console.log("Loaded too")
//         //     // console.log(scope.ninjas )
//         // }
//     }
// }]);


// [+]  <contact-form> It's just a HTML Component
// app.component('contactForm', {
//     templateUrl: './app/contact-form/contact-form.template.html',
//     // CONTROLLER IS  LIKE THE CONSTRUCOR
//     controller: function($scope, $location) {
        
//         $scope.greeting = 'Hello'
//         $scope.sendMessage = function(){
//             console.log('redirect');
//             $location.path('contac-success');
//         }
//     }
// });




})(window.angular);
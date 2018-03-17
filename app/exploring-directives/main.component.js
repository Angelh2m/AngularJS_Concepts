'use strict';
(function(angular) {

var app = angular.module('directiveComp', []);

app.component('directiveComp', {
    
        templateUrl:'/app/exploring-directives/main.html',
        // CONTROLLER IS  LIKE THE CONSTRUCOR
        controller: function($scope) {
            console.log('loaded!');
        }
        
    });

// app.controller('directiveComp', function($scope){
//     $scope.message = "Hey all!"
// });


})(window.angular);
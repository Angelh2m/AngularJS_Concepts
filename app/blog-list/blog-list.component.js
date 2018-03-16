'use strict';
(function(angular) {
angular.module('blogList').component('hereName', {
    
        templateUrl:'/app/blog-list/blog-list.template.html',
        // CONTROLLER IS  LIKE THE CONSTRUCOR
        controller: function(Post, $routeParams, $scope, $rootScope, $location) {
            
            // [+] Event attached to the html tag 
            $scope.goToItem = function($value) {
                
                console.log($value);
                console.log('Funcion executing', $value.id);   
                // Router redirect
                $rootScope.$apply(function(){
                    $location.path('/blog/' + $value.id)
                })
            }

            // console.log($routeParams);
            $scope.items = Post.query();

            // ADDS A SCOPE TO THE COMPONENT
            $scope.title = "Hi there";
            $scope.clicks = 0;
            
            $scope.someClickTest = function() {
                console.log("Clicked")
                $scope.title = "Clicked"
                $scope.clicks += 1;
            } 

        }
        
    });
})(window.angular);
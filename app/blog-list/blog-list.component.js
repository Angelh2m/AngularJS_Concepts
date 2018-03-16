'use strict';
(function(angular) {
angular.module('blogList').component('hereName', {
    
        templateUrl:'/app/blog-list/blog-list.template.html',
        controller: function($routeParams, $scope) {

            console.log($routeParams)

            let blogItems = [
                {title: "Some Title 1", id:"1", description:"The description 1"},
                {title: "Some Title 2", id:"2", description:"The description 2"},
                {title: "Some Title 3", id:"3", description:"The description 3"},
                {title: "Some Title 4", id:"4", description:"The description 4"},
                {title: "Some Title 5", id:"5", description:"The description 5"},
                {title: "Some Title 6", id:"6", description:"The description 6"},
            ];

            $scope.items = blogItems;

            // ADDS A SCOPE TO THE COMPONENT
            $scope.title = "Hi there";
            $scope.clicks = 0;
            
            $scope.someClickTest = function() {
                console.log("Clicked")
                $scope.title = "Clicked"
                $scope.clicks += 1;
            } 

            console.log("Hello from component ");
        }
        
    });
})(window.angular);
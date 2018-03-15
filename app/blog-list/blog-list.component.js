'use strict';
(function(angular) {
angular.module('blogList')
    .component('bloglist', {
        template: `        <!-- THIS TAG IS WRAPPED WITHIN THEIR OWN SCOPE -->
                <div class="" >
                    <h4>{{ title }} : {{clicks}} </h4>
                    <button class="btn btn-primary" ng-click="someClickTest()">Click Me!</button>
                </div>
        `,
        controller: function($scope) {
            console.log("Hello from component ")
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
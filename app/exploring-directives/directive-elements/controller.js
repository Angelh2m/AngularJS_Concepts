'use strict';
(function(angular) {

var app = angular.module('directiveController', []);

// <random-ninja> -> template
app.directive('randomNinja', [ function() {
    return {
        restrict: 'E',
        scope: {
            // [+] '=' Two way binding
            ninjas: ' = ',
            title: '='
        },
        templateUrl: './app/exploring-directives/directive-elements/controller.html',
        transclude: true,
        // replace: true,
        controller: function($scope){
            $scope.random = Math.floor( Math.random() * 4);
        },
        link: function() {
            console.log("Loaded too")
            // console.log(scope.ninjas )
        }
    }
}]);

// [ CREATE the SCOPE ] ng-controller="directiveController"
app.controller('directiveController', function($scope){
    $scope.message = "Hey all!"

    $scope.removeNinja = function(ninja){
        var removeNinja = $scope.ninjas.indexOf(ninja);
        console.log(removeNinja)

        $scope.ninjas.splice(removeNinja, 1);

    }

    $scope.addNinja = function() {

        var isValid = false;

        var nameCheck = function(name){
            console.log(name)
            if(name === "Angel"){
                isValid = false;
               return $scope.warning = "You can't choose that name"
            }
            isValid = true;
            return name            
        }

        var newPersonNinja = {
            name: nameCheck($scope.newninja.name),
            belt: $scope.newninja.belt,
            rate: parseInt($scope.newninja.rate),
            available: $scope.newninja.available
        }
        // console.log($scope.newninja)
        if(isValid){
            $scope.ninjas.push(newPersonNinja )
        }
    }

    $scope.ninjas = [
        {
        name: "Yoshi",
        belt: 'Green',
        rate: 50,
        available: true,
        thumb: 'app/img/Avatars/starwars-avatar-5.png'
        },
        {
        name: "Crystal",
        belt: 'Yellow',
        rate: 30,
        available: true,
        thumb: 'app/img/Avatars/starwars-avatar-2.png'
        },
        {
        name: "Ryu",
        belt: 'Orange',
        rate: 10,
        available: true,
        thumb: 'app/img/Avatars/starwars-avatar-3.png'
        },
        {
        name: "Shaun",
        belt: 'Black',
        rate: 1000,
        available: true,
        thumb: 'app/img/Avatars/starwars-avatar-4.png'
        },

    ]
});


})(window.angular);
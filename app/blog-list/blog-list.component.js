'use strict';

angular.module('blogList')
    .controller('BlogListController', function($scope){
        console.log("Hello from component ")
        $scope.title = "Hi there";
    });
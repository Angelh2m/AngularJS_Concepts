'use strict';
(function(angular) {
angular.module('blogDetail').component('blogDetail', {
    
        templateUrl:'/app/blog-detail/blog-detail.template.html',
        //  This is like the contructor
        controller: function(Post, $http, $location, $routeParams, $scope) {
            // http://localhost:4600/app/src/posts.json
        
            console.log(Post.query());
            console.log(Post.get());

            Post.query( function(data) {
                $scope.notFound = true;
                angular.forEach( data, function(blog){
                
                    if(blog.id == $routeParams.id){
                        $scope.post = blog;
                        $scope.notFound = false;
                        console.log(blog)
                    }
    
                });
            })

            if($scope.notFound){
                console.log("Not found");
                // Redirect
                $location.path("/404")
            }

            
        }
        
    });
})(window.angular);
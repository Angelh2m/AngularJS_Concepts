'use strict';
(function(angular) {
angular.module('blogDetail').component('blogDetail', {
    
        templateUrl:'/app/blog-detail/blog-detail.template.html',
        //  This is like the contructor
        controller: function(Post, $http, $location, $routeParams, $scope) {
            // http://localhost:4600/app/src/posts.json
        
            // console.log(Post.query());
            // console.log(Post.get());

            Post.query( function(data) {
                $scope.notFound = true;
                angular.forEach( data, function(blog){
                
                    if(blog.id == $routeParams.id){
                        $scope.notFound = false;
                        $scope.post = blog;
                        console.log(blog)
                        resetReply()
                    }
    
                });
            })

            $scope.deleteComment = function(comment){
                $scope.$apply(
                    $scope.post.comments.splice(comment, 1)
                )
                console.log(comment);
            }

            $scope.addReply = function(){
                console.log($scope.reply);
                $scope.post.comments.push($scope.reply.text);
                resetReply()
            }

            function resetReply() {
                $scope.reply = {
                    "id": $scope.post.comments.length + 1,
                    "text": ' ',
                }
            }

            if($scope.notFound){
                console.log("Not found");
                // Redirect
                $location.path("/404")
            }

            
        }
        
    });
})(window.angular);
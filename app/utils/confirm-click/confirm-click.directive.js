'use strict';

// ==================================================
//       Directive Version 2 
// ==================================================

angular.module('confirmClick')
    .directive('confirmClick', function() {
       return{
            restrict: "A",
            link: function(scope, element, attr) {
                
                var msg = scope.confirmClick || "Are you sure?"
                var clickAction = attr.confirmedClick;

                element.bind("click", function(event) {
                    if(window.confirm(msg) ){
                        // scope.$eval(clickAction)
                    }
                });
            }
        }
    });

// ==================================================
//       DIRECTIVE  version one
// ==================================================

// angular.module('confirmClick')
//     .directive('confirmClick', function($rootScope, $location) {
//        return{
//             scope: {
//                 message: "@message",
//                 eq: "=eq",
//                 post: "=post",
//             },
//             // restrict: "A", // Only the attribuite
//             restrict: "E", // TAG itself
//             template: "<a ng-href='#!/blog/{{post.id}}' > {{post.title}} </a>",
//             link: function(scope, element, attr) {
               
//                 var msg = scope.message || "Are you sure?"

//                 element.bind("click", function(event) {
//                     if(window.confirm(msg)){
//                         console.log('/blog/' + scope.post.id );
//                         // $rootScope.$appy(function() {
//                         //     $location.path('/blog/' + scope.post.id)
//                         // })
//                     }
//                 })

//                 console.log(msg)
//                 // console.log(scope.post);
//                 // console.log(element);
//                 // console.log(attr.confirmClick);
//                 // console.log(attr.post);
//                 // console.log(attr.href);
//             }           
//        } 
//     });
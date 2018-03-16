'use strict';

// ==================================================
//       Directive Version 2 
// ==================================================

angular.module('confirmClick')
    .directive('confirmClick', function() {
       return{
            scope:{
                confirmedClick:'&'
            },
            restrict: "A",
            link: function(scope, element, attr) {
                // [+] scope defined as <confirm-click>
                var msg = scope.confirmClick || "Are you sure?";
                // [+] scope denifed as <confirmed-click>
                var clickAction = attr.confirmedClick;
                // [+] This event will trigger on click'

                element.bind("click", function(event) {
                    // console.log(attr.confirmClick);
                    // console.log(attr.confirmedClick);
                    console.log(clickAction);

                    event.stopImmediatePropagation();
                    event.preventDefault();

                    if(window.confirm(msg) ){
                        // scope.$eval(clickAction)
                        scope.confirmedClick();
                    }else{
                        console.log("Cancelled");
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
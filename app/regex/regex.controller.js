'use strict';
(function(angular) {

var app = angular.module('regex', []);

app.controller('regex', ['$scope',
    function($scope) {
            
       $scope.name = 'Angel';

       var cardNumber = '';
       var cacheCC = '';
       var hashCC = ['', ''];

       $scope.maskIt =  function() {
            var result;
            result = $scope.masked; 
            /* *
            *  Push only number and delete
            */

            var pattern = /(\W)/g;
            cacheCC = result.replace(pattern, '');
            var findBullets = result.replace(/[^\W]/g, '');

            if (findBullets !== '') {
                
                if (cacheCC.length <= 12) {
                    hashCC[0] = '';
                    hashCC[0] = cacheCC;
                }
                if (cacheCC.length >= 12) {
                    hashCC[1] = '';
                    hashCC[1] = cacheCC;
                }
            }
            
   
            console.log('Hash ', hashCC);

            /* *
            *  Trim the elements
            */

            var trimChar = 0;
            if (cardNumber.length >= 12) {
                cardNumber = result;
                trimChar = 6;
            }
            if (cardNumber.length  >= 16) {
                trimChar = 12;
            }
            if (cardNumber.length  >= 15) {
                trimChar = 15;
            }

            /* *
            *  Convert the numbers into bullets
            */

            var digtConvert = /(\d)/g;
            var bullets = '\u2022';
            
            var x = result.substr(0 , trimChar).replace(digtConvert, bullets)
            var y = result.substr(trimChar , result.length);
            
            /* *
            *  TODO: Join the original value from the hash 
            */
            console.log("MAsk", x, y);
            
            $scope.masked = x + y;

       }


       $scope.validator =  function(event) {
           
            var result;
            result = $scope.masked; 

            /* *
            *  On delete
            */
           if (event == 8) {   
                cardNumber = cardNumber.substr(0, cardNumber.length - 1);
                return
            }      
            
            /* *
            *  Word filter
            */
            var wordFilter = /(.\W)?([^0-9])/g; //Filter special characters or letters
            result = result.replace(wordFilter, '');
            // If we have only symbols stop
            if (result == '') {
                console.log("STOP ", $scope.masked = cardNumber);
                return
            }

            /* *
            *  Try to format in bullets on the fly
            */
            var spacersFilter = /([.\W|\d]{0,4})?([.\W|\d]{0,4})?([.\W|\d]{0,4})?([.\W|\d]{0,4})?([.\W|\d]{0,3})?/; 
            var bullet = $scope.masked.replace(/[\s]/g, '').replace(spacersFilter, '$1 $2 $3 $4 $5');     
                cardNumber = cardNumber.replace(/[\s]/g, '').replace(spacersFilter, '$1 $2 $3 $4 $5');     
            
            /* *
            *  New
            */

            var filtered = bullet.split('').filter((el) => {
                 return el !== ' ';
            });

            

            var final = [];
            var newArr = filtered.map( function(el, index) {
                if (index === 4 ) {
                    final.push(' ');
                }
                if (index === 8 ) {
                    final.push(' ');
                }
                if (index === 12 ) {
                    final.push(' ');
                }
                if (index === 16) {
                    final.push(' ');
                }

                    final.push(el);
            })

            bullet = final.join('');
            
            // console.log(newArr);
            

            /* *
            *  Store the real and masked values
            */
            $scope.masked = bullet;
            $scope.cardNumber = result
            cardNumber = result
       }
    }])
})(window.angular);
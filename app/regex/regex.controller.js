'use strict';
(function(angular) {

var app = angular.module('regex', []);

app.controller('regex', ['$scope',
    function($scope) {
            
       $scope.name = 'Angel';

       var cardNumber = '';
       var masked = '';
       var cached = '';
       var digitsVisible = false;


       $scope.reveal = function(){

            // $scope.masked = 
            console.log('%c ', + 'Done' + 'background: #222; color: #bada55')
            
       };

       var cachedCC = '';
       var temp = ['', ''];

       $scope.maskIt =  function() {
            var result;
            result = $scope.masked; 

            var digtConvert = /(\d)/g;
            var bullets = '\u2022';



            /* *
            *  Push only number and delete
            */

            var pattern = /(\W)/g;

            cachedCC = result.replace(pattern, '');
            var findBullets = result.replace(/[^\W]/g, '');
            console.log('bullet', findBullets, cachedCC.length );
            
            if (findBullets !== '') {
                

                if (cachedCC.length <= 12) {
                    temp[0] = '';
                    temp[0] = cachedCC;
                }
                if (cachedCC.length >= 12) {
                    temp[1] = '';
                    temp[1] = cachedCC;
                }

                // first array lengh and // substract to the firstone


            }
            
   
            console.log('bullet2', temp);

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

            console.log("REsult", result , trimChar);
            console.log('Card length', cardNumber.length );
            

            var x = result.substr(0 , trimChar).replace(digtConvert, bullets)
            var y = result.substr(trimChar , result.length);
            
            console.log("MAsk", x, y);
            
            $scope.masked = x + y;

       }


       $scope.validator =  function(event) {
           
            var result;
            result = $scope.masked; 

            console.log(event);


            

            /* *
            *  On delete
            */
           if (event == 8) {   
                // $scope.cardNumber = $scope.cardNumber.substr(0, cardNumber.length);
                // result = result.substr(0, cardNumber.length -1);
                console.log(cardNumber.length);
                
                cardNumber = cardNumber.substr(0, cardNumber.length - 1);
                return
            }      
            
            /* *
            *  Word filter
            */
            var wordFilter = /(.\W)?([^0-9])/g; //No special characters or letters
            result = result.replace(wordFilter, '');
            // If we have only symbols stop
            if (result == '') {
                console.log($scope.masked = cardNumber);
                return
            }

            /* *
            *  Bullet filter 
            */
            var bulletFilter = /[.\W]/g;
            var bullet = masked.replace(bulletFilter, '$1');
            if (bullet !== '' && digitsVisible == false) {
                console.log("There are bullets", bullet);
                $scope.masked = cardNumber;
                digitsVisible = true;
                return
            }


            /* *
            *  Try to format in bullets on the fly
            */
            var spacersFilter = /([.\W|\d]{0,4})?([.\W|\d]{0,4})?([.\W|\d]{0,4})?([.\W|\d]{0,4})?([.\W|\d]{0,3})?/; 
            
            var bullet = $scope.masked.replace(/[\s]/g, '').replace(spacersFilter, '$1 $2 $3 $4 $5');     
                cardNumber = cardNumber.replace(/[\s]/g, '').replace(spacersFilter, '$1 $2 $3 $4 $5');     
            console.log("New Bullet", bullet);
            console.log("New cardnum", cardNumber);
            console.log('On press bullet');

           
            console.log("Number", result);
            console.log("Masked", $scope.masked);
            console.log("MaskedBlur", masked);
            
            
            /* *
            *  Store the real and masked values
            */
            $scope.masked = bullet;
            $scope.cardNumber = result
            cardNumber = result
            console.log('CARD NUMBER', cardNumber);
            

       }
       
    }])
})(window.angular);
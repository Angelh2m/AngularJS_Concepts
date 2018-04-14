'use strict';
(function(angular) {

var app = angular.module('regex', []);

app.controller('regex', ['$scope',
    function($scope) {
            
       $scope.name = 'Angel';

       var cardNumber = '';
       var masked = '';
       var digitsVisible = false;


       $scope.format = function(){

            // $scope.masked = 
       };

       $scope.maskIt =  function() {
        var masking = $scope.cardNumber;
        // digitsVisible == false
        // Already a digit 
        var digtConvert = /(\d)/g;
        var bullets = '\u2022';
        var result = masking;

        if (result !== undefined) {            
            result = result.replace( digtConvert , bullets);
            $scope.cardNumber = result;
        }

        // Bullet checker
        var bulletFilter = /[.\W]/g;
        var bullet = masked.replace(bulletFilter, '$1');        
        if (bullet !== '') {
            digitsVisible = false;
        }

        var trimChar = 0;
        if (cardNumber.length >= 12) {
            trimChar = 6;
        }
        if (cardNumber.length  >= 16) {
            trimChar = 12;
        }
        if (cardNumber.length  >= 15) {
            trimChar = 15;
        }
        console.log("Char==>", trimChar);
        

        var digitsMasked = result.substring(0 , trimChar);
        var digitsUnmasked = cardNumber.substring(trimChar, cardNumber.length);
        var finalMask = digitsMasked + digitsUnmasked
        console.log('Final MAsk ', finalMask);

        /* *
        *  Bullet filter
        */

        var spacersFilter = /([.\W|\d]{0,4})?([.\W|\d]{0,4})?([.\W|\d]{0,4})?([.\W|\d]{0,4})?/; 
        var bullet = finalMask.replace(spacersFilter, '$1 $2 $3 $4');     
        console.log(bullet);
        

        console.log('masked', result);
        $scope.masked = bullet;
        masked = result;

       }

       $scope.validator =  function() {

            var result;
            result = $scope.masked; 
            
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
            console.log(bullet);
            
            if (bullet !== '' && digitsVisible == false) {
                console.log("There are bullets", bullet);
                $scope.masked = cardNumber;
                digitsVisible = true;
                return
            }


            /* *
        //     *  Try to format in bullets on the fly
        //     */

        //    var spacersFilter = /([.\W|\d]{0,4})?([.\W|\d]{0,4})?([.\W|\d]{0,4})?([.\W|\d]{0,4})?/; 
        //    var bullet = $scope.masked.replace(spacersFilter, '$1 $2 $3 $4');     
        //    console.log("New Bullet", bullet);
        //    console.log('On press bullet');
           
            

            console.log("Number", result);
            console.log("Masked", $scope.masked);
            console.log("MaskedBlur", masked);
            
            
            /* *
            *  Store the real and masked values
            */
            $scope.masked = result;
            $scope.cardNumber = result
            cardNumber = result

       }
       
    }])
})(window.angular);
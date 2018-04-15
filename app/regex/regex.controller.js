'use strict';
(function(angular) {

var app = angular.module('regex', []);

app.controller('regex', ['$scope',
    function($scope) {
            
       $scope.name = 'Angel';

       var creditCard = {
        num: '',
        mask: '',
        typing: '',
       };


       $scope.maskIt =  function() {

            creditCard.mask = $scope.masked; 

            /* *
            *  Mask the characters
            */
            var trimChar = 0;
            if (creditCard.mask.length  >= 5 &&  creditCard.mask.length < 10) {
                trimChar = 5;
            }
            if (creditCard.mask.length  >= 10 &&  creditCard.mask.length <= 19) {
                trimChar = 14;
            }
            if (creditCard.mask.length  > 19) {
                trimChar = 18;
            }
            console.log(trimChar);
            console.log(creditCard.mask);

            /* *
            *  Convert the numbers into bullets
            */
            var digtConvert = /(\d)/g;
            var bullets = '\u2022';
            
            var masked = creditCard.mask.substr(0 , trimChar).replace(digtConvert, bullets)
            var unMasked = creditCard.mask.substr(trimChar , creditCard.mask.length);
            
            /* *
            *  Set the scope
            */
            $scope.masked = masked + unMasked;
            creditCard.typing = false;
       }

       $scope.setScope  = function(params) {
            // Set the masking value to the rprevious value before masking 
            $scope.masked = creditCard.mask 
            creditCard.typing = true;
       }


       $scope.validator =  function(event) {
        
            /* *
            *  Prevent adding non digits
            */
            var nonDigits = $scope.masked.match(/[a-zA-Z]/g);
            if (nonDigits) {
                return  $scope.masked = creditCard.num
            }
        
            if(creditCard.typing !== '' && creditCard.typing == false){
                $scope.masked = creditCard.num;
                creditCard.typing = true;
            }
            creditCard.num = $scope.masked; 

            /* *
            *  Word filter
            */
            var wordFilter = /(.\W)?([^0-9])/g; //Filter special characters or letters
            creditCard.num = creditCard.num .replace(wordFilter, '');
 
            var cardDigits = $scope.masked;

            /* *
            *  Separate as **** **** **** ***
            */
            var filtered = cardDigits.split('').filter((el) => {
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

            cardDigits = final.join('');
            
            /* *
            *  Store the real and masked values
            */
            $scope.masked = cardDigits;
       }
    }])
})(window.angular);
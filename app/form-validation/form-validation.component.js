
'use strict';
(function(angular) {
angular.module('formValidation').component('formValidation', {
    
        templateUrl:'/app/form-validation/form-validation.template.html',
        // CONTROLLER IS  LIKE THE CONSTRUCOR
        controller: function( $scope) {

            $scope.hello = 'Hello';
            $scope.theValue = function(){
                console.log($scope.hello )
            }

            $scope.register = function(){
                // console.log($scope.user);
                return $scope.text = "Welcome " + $scope.user.firstname 
            }

            $scope.isCheckboxChecked = true;

            // [+] ++++++++++++++++++++++++++++++
            // [+]  FORM

            $scope.formValues = {
                nombre: '',
                apellido: ''
            }

            
            $scope.validateForm = function(value){
                var name = $scope.formValues.nombre;

                if(name == "Angel"){
                    console.log("Hey Angel!")
                }
                console.log('Sent', $scope.formValues)
            }

            
            // [+] ++++++++++++++++++++++++++++++
            // [+] Input Format

            $scope.car;
            $scope.message;

            var getMessage = function(car){

                var message = 'No car selected';
                switch (car) {
                    case 'jaguar':
                        message = "This is a jaguar";
                        break;
                    case 'bmw':
                        message = "This is a BWM";
                    break;
                    case 'jetta':
                        message = "This is a peugeot";
                    break;
                    default:
                    message = 'Car not found'
                }
                return message;
            }

            $scope.selectCar = function(){
                if($scope.car){
                    console.log($scope.car);
                    console.log($scope.message);
                    $scope.message = getMessage($scope.car);
                }
            }
    
        }
        
    });
})(window.angular);
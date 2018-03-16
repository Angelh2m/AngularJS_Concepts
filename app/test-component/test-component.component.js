

angular.module('testComponent').component('testComponent', {

    templateUrl: 'app/test-component/test-component.template.html',
    controller: ['$routeParams', '$scope',
    
    //  This is like the contructor
    function testComponentFun($routeParams, $scope) {
        var self = this;

        console.log($routeParams)

        $scope.element = 'New element component';

      }
    ]

  });


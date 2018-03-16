

angular.module('testComponent').component('testComponent', {

    templateUrl: 'app/test-component/test-component.template.html',
    controller: ['$routeParams', '$scope',
     
    function testComponentFun($routeParams, $scope) {
        var self = this;

        console.log($routeParams)

        $scope.element = 'New element component';

      }
    ]

  });


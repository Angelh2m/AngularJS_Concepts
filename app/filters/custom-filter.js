
angular.module('customFilter')
    .filter('customFilter', function(){
        
        return function(listing){
            return listing.toUpperCase();
        }

    });
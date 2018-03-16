'use strict';

angular.module('post')
    .factory('Post', function($resource) {
        // This is the service
        var url = 'http://localhost:4600/app/src/posts.json';

        return $resource(url, {}, {
            query: {
                method: "GET",
                params:{},
                isArray: true,
                cache: true,
                // transformResponse
                // interceptor
            },
            get: {
                method: "GET",
                // params:{"id": @id},
                isArray: true,
                cache: true,
            }
        })
    });
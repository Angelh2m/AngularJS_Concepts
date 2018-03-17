'use strict';
// [1] Register the Module
var app = angular.module('postcall', []);


    app.factory('Postcall', function($resource) {
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
            post: {
                method: "POST",
                // params:{"id": @id},
                isArray: true,
                cache: true,
            }
        })
    });
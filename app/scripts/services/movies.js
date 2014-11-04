'use strict';
angular.module('Movieslist.services', [])
.factory('moviesApi', function moviesApi($http) {
  var movies, apikey;

  movies = {};
  apikey = 'e97a2w56mvpe57jnhgpnucsa';

  movies.list = function() {
    return $http({
      method: 'JSONP',
      url: 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies.json?',
      params: {
        apikey: apikey,
        callback: 'JSON_CALLBACK'
      }
    });
  };

  movies.dvds = function() {
    return $http({
      method: 'JSONP',
      url: 'http://api.rottentomatoes.com/api/public/v1.0/lists/dvds/current_releases.json?',
      params: {
        apikey: apikey,
        callback: 'JSON_CALLBACK'
      }
    });
  };

  return movies;
});
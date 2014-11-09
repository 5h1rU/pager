'use strict';
var pagerApp = angular.module('pagerApp');

pagerApp.factory('Movie', function($rootScope) {

    var movie = {} 	

    movie.setMovie = function(movie) {
      this.id = movie;
      $rootScope.$broadcast('movieUpdated');
    };

    return movie;
});
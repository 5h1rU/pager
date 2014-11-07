'use strict';
angular.module('Movieslist.controllers')
  .controller('moviesDetailsController', function moviesDetailsController($scope, moviesApi, $location, Movie) {

    $scope.$on('movieUpdated', function() {
      $scope.movieId = Movie.id;
      getMovie();
    });

    moviesApi.dvds().success(function(response) {
      $scope.movies = response.movies;
    });

    $scope.back = function() {
      //missing implementation
    }

    function getMovie() {
      $scope.currentMovie = _.first(_.filter($scope.movies, {id: $scope.movieId}));
      fixApiCall();
      $location.path('/'+ $scope.currentMovie.id);
    };

    function fixApiCall() {
      var detailed;
      detailed = $scope.currentMovie.posters.detailed.split('_', 3);
      $scope.currentMovie.posters.detailed = _.first(detailed).concat('_det.jpg');
    }


  });
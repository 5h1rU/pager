'use strict';
angular.module('Movieslist.controllers')
  .controller('moviesDetailsController', function moviesDetailsController($scope, moviesApi, $location, Movie, Ismobile) {

    $scope.$on('movieUpdated', function() {
      $scope.movieId = Movie.id;
      getMovie();
    });

    $scope.$on('mobileStatusChanged', function() {
      console.log(Ismobile.status);
      $scope.ismobile = Ismobile.status;
    });

    moviesApi.dvds().success(function(response) {
      $scope.movies = response.movies;
    });

    $scope.back = function() {
      $scope.$watch('isMobile', function() {
        Ismobile.detect(false);
      });
      $scope.currentMovie = null;
    };

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
'use strict';
angular.module('Movieslist.controllers', [])
  .controller('moviesListController', function moviesListController($scope, moviesApi, Movie, Ismobile) {

    $scope.mobile = false;

    moviesApi.dvds().success(function(response) {
      $scope.movies = response.movies;
    });

    $scope.$on('mobileStatusChanged', function() {
      console.log(Ismobile.status);
      $scope.ismobile = Ismobile.status;
    });

    $scope.setMovies = function(id, $index) {

      $scope.$watch('setMovie', function() {
        Movie.setMovie(id);
      });

      $scope.$watch('isMobile', function() {
        Ismobile.detect(true);
      });

      $scope.selectedIndex = $index;
      Movie.setMovie(id);
    }

  });
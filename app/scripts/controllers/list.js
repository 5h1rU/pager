'use strict';
angular.module('Movieslist.controllers', [])
  .controller('moviesListController', function moviesListController($scope, moviesApi, Movie) {

    $scope.mobile = false;

    moviesApi.dvds().success(function(response) {
      $scope.movies = response.movies;
    });

    $scope.setMovies = function(id, $index) {

      $scope.$watch('setMovie', function() {
        Movie.setMovie(id);
      });

      $scope.selectedIndex = $index;
      $scope.mobile = true;
      Movie.setMovie(id);
    }

    $scope.back = function() {
      $location.path('/');
      $scope.master = true;
    }

  });
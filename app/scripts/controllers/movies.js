'use strict';
angular.module('Movieslist.controllers', [])
  .controller('moviesController', function moviesController($scope, moviesApi) {

    moviesApi.dvds().success(function(response) {
      $scope.movies = response.movies;
    });

    $scope.selectMovie = function(id, $index) {
      $scope.currentMovie = _.first(_.filter($scope.movies, {id: id}));
      $scope.selectedIndex = $index;
      fixApiCall();
    };

    function fixApiCall() {
      var detailed;

      detailed = $scope.currentMovie.posters.detailed.split('_', 3);
      $scope.currentMovie.posters.detailed = _.first(detailed).concat('_det.jpg');
    }

  });
'use strict';

/**
 * @ngdoc function
 * @name pagerApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the pagerApp
 */
angular.module('pagerApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

'use strict';

/**
 * @ngdoc function
 * @name pagerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pagerApp
 */
angular.module('pagerApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

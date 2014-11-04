'use strict';

/**
 * @ngdoc overview
 * @name pagerApp
 * @description
 * # pagerApp
 *
 * Main module of the application.
 */
angular
  .module('pagerApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'Movieslist.controllers',
    'Movieslist.services'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'index.html',
        controller: 'moviesController'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

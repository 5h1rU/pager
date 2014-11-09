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
    'Movieslist.services',
    'Mobile.services'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'index.html',
        controller: 'moviesListController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

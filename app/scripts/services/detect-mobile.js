'use strict';
angular.module('Mobile.services', [])
.factory('Ismobile', function($rootScope) {

  var ismobile = {} 	

  ismobile.detect = function(status) {
    this.status = status || false;
    $rootScope.$broadcast('mobileStatusChanged');
  };

  return ismobile;
});
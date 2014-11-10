describe('moviesDetailsController', function() {
  'use strict';

  var $httpBackend, $scope, moviesDetailsController, mockMovies, moviesApi;

  beforeEach(module('pagerApp'));

  beforeEach(inject(function($injector, $rootScope, $controller) {
    $httpBackend = $injector.get('$httpBackend');
    moviesApi = $injector.get('moviesApi');
    $scope = $rootScope.$new();

    mockMovies = {
      movies: [
        {
          id: 1,
          title: 'Heroes',
          synopsis: 'some fancy thing', 
          posters: {
            thumbnail: 'http://content7.flixster.com/movie/11/15/34/11153437_mob.jpg',
            profile: 'http://content7.flixster.com/movie/11/15/34/11153437_pro.jpg',
            detailed: 'http://content7.flixster.com/movie/11/15/34/11153437_det.jpg',
            original: 'http://content7.flixster.com/movie/11/15/34/11153437_ori.jpg'
          }
        },
        {
          id: 2,
          title: 'Mission Impossible',
          synopsis: 'Not a real movie at all',
          posters: {
            thumbnail: 'http://content7.flixster.com/movie/11/15/34/11153437_mob.jpg',
            profile: 'http://content7.flixster.com/movie/11/15/34/11153437_pro.jpg',
            detailed: 'http://content7.flixster.com/movie/11/15/34/11153437_det.jpg',
            original: 'http://content7.flixster.com/movie/11/15/34/11153437_ori.jpg'
          }
        }
      ]
    };

    moviesDetailsController = function() {
      $controller('moviesDetailsController', {
        '$scope': $scope,
        'moviesApi': moviesApi
      });
    };

  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('Can show full movies list', function() {
    $httpBackend.whenJSONP('http://api.rottentomatoes.com/api/public/v1.0/lists/dvds/current_releases.json?&apikey=e97a2w56mvpe57jnhgpnucsa&callback=JSON_CALLBACK').respond(mockMovies);
    moviesDetailsController();
    $httpBackend.flush();

    expect($scope.movies.length).toEqual(2);
  });

  it('Should back to the main list', function() {
    $httpBackend.expectJSONP('http://api.rottentomatoes.com/api/public/v1.0/lists/dvds/current_releases.json?&apikey=e97a2w56mvpe57jnhgpnucsa&callback=JSON_CALLBACK').respond(mockMovies);
    moviesDetailsController();
    $httpBackend.flush();

    $scope.back();

    expect($scope.currentMovie).toBe(null);
  });

});
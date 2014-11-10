describe('moviesListController', function() {
  'use strict';

  var $httpBackend, $scope, moviesListController, mockMovies, moviesApi;

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
    }

        
    moviesListController = function() {
      $controller('moviesListController', {
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
    moviesListController();
    $httpBackend.flush();

    expect($scope.movies.length).toEqual(2);
  });

  it('Should set correctly index', function() {
    $httpBackend.whenJSONP('http://api.rottentomatoes.com/api/public/v1.0/lists/dvds/current_releases.json?&apikey=e97a2w56mvpe57jnhgpnucsa&callback=JSON_CALLBACK').respond(mockMovies);
    moviesListController();
    $httpBackend.flush();
    $scope.setMovies(1,2);

    expect($scope.selectedIndex).toBe(2);
  });

});
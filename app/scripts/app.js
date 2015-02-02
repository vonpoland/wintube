'use strict';

/**
 * @ngdoc overview
 * @name wintubeApp
 * @description
 * # wintubeApp
 *
 * Main module of the application.
 */
angular
  .module('wintubeApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'youtube-embed'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

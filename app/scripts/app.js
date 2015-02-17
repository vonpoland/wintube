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
    'youtube-embed',
    'wintubeApp.ui',
    'wintubeApp.player'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'scripts/player/views/background.html'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

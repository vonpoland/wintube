'use strict';

/**
 * @ngdoc function
 * @name wintubeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the wintubeApp
 */
angular.module('wintubeApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.youtubeUrl = 'https://www.youtube.com/watch?v=18-xvIjH8T4';
  });

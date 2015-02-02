'use strict';

/**
 * @ngdoc function
 * @name wintubeApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the wintubeApp
 */
angular.module('wintubeApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

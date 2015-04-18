'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('wintubeApp.player'));

  var scope;
  var controller;
  var template;
  var playlistService;
  var element

  function timeoutMock() {
  }

  timeoutMock.bind = angular.noop;
  // Initialize the controller and a mock scope
  beforeEach(function () {
    module(function ($provide) {
      $provide.value("$timeout", timeoutMock);
    });

    inject(function ($rootScope, $compile, _playlistService_) {
      element = angular.element("<div data-playlist></div>");
      playlistService = _playlistService_;
      playlistService.addItem({
        name: "test"
      });
      playlistService.addItem({
        name: "test"
      });

      scope = $rootScope.$new();
      template = $compile(element)(scope);
    })
  });

  it('should attach a list of awesomeThings to the scope', function () {
    console.info(playlistService.getPlaylist());
    scope.$digest();
    console.info(element);
    controller = element.controller;
    console.info(controller.items);
  });
});

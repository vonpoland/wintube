'use strict';

(function (window, angular) {
  angular
    .module('wintubeApp.ui', [])
    .directive('draggable', window.modules.ui.draggable)
}(window, window.angular));

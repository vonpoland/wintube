'use strict';

(function (window, angular) {
  angular
    .module('wintubeApp.ui', ['wintubeApp.storage'])
    .value("zIndex", 0)
    .directive('draggable', ['Storage', 'zIndex', window.modules.ui.draggable])
}(window, window.angular));

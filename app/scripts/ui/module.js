'use strict';

(function (window, angular) {
  angular
    .module('wintubeApp.ui', ['wintubeApp.storage'])
    .value('zIndex', 0)
    .directive('resizable', ['Storage', 'zIndex', window.modules.ui.resizable])
    .directive('window', ['$compile', 'Storage', window.modules.ui.window])
    .directive('draggable', ['Storage', 'zIndex', window.modules.ui.draggable]);
}(window, window.angular));

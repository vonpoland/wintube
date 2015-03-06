'use strict';

(function (window, angular, perfectScroll) {
  angular
    .module('wintubeApp.ui', ['wintubeApp.storage'])
    .factory('PerfectScroll', function () {
      if (!perfectScroll) {
        throw new Error('Perfect Scroll not available');
      }
      return perfectScroll;
    })
    .value('zIndex', 0)
    .directive('scrollable', ['Storage', 'PerfectScroll', '$timeout', window.modules.ui.scrollable])
    .directive('resizable', ['Storage', 'zIndex', window.modules.ui.resizable])
    .directive('window', ['$compile', 'Storage', window.modules.ui.window])
    .directive('draggable', ['Storage', 'zIndex', window.modules.ui.draggable]);
}(window, window.angular, window.Ps));

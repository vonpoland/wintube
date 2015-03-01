'use strict';

(function (angular) {
  angular
    .module('wintubeApp.storage', [])
    .factory('Storage', ['$window', function ($window) {
      return {
        save: function (key, item) {
          if (item) {
            $window.localStorage[key] = JSON.stringify(item);

            return;
          }

          $window.localStorage[key] = null;
          delete $window.localStorage[key];
        },
        get: function (key) {
          var item = $window.localStorage[key];

          if (item) {
            try {
              return JSON.parse(item);
            } catch (e) {
              return item;
            }
          }
        }
      };
    }]);
}(window.angular));

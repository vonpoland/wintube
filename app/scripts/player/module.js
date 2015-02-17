'use strict';

(function (window, angular) {
  angular
    .module('wintubeApp.player', ['ngResource', 'wintubeApp.storage'])
    .constant('API_KEY', 'AIzaSyD1SZ-MyjkgEWuFxOH7dL1EkuQjeSuxMFc')
    .constant('SEARCH', {
      timeout: 300,
      minKeys: 2
    })
    .service('playlistService', window.modules.player.playlistService)
    .service('playerService', ['Storage', window.modules.player.playerService])
    .service('searchService', ['$timeout', 'SEARCH', 'YoutubeSearch', window.modules.player.searchService])
    .factory('YoutubeSearch', ['$resource', 'API_KEY', window.modules.player.youtubeResource])
    .directive('searchResults', ['searchService', 'playlistService', window.modules.player.searchResults])
    .directive('search', ['searchService', window.modules.player.searchDirective])
    .directive('player', ['playerService', window.modules.player.playerDirective])
    .directive('playlist', ['playerService', 'playlistService', window.modules.player.playlistDirective]);
}(window, window.angular));

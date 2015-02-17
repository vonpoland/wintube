(function (window, angular) {
  angular
    .module('wintubeApp.player', ['messageBusModule', 'ngResource'])
    .constant("API_KEY", "AIzaSyD1SZ-MyjkgEWuFxOH7dL1EkuQjeSuxMFc")
    .constant("SEARCH", {
      timeout: 300,
      minKeys: 2
    })
    .service("playlistService", window.modules.player.playlistService)
    .service("playerService", window.modules.player.playerService)
    .service("searchService", ['$timeout', 'SEARCH', 'YoutubeSearch', window.modules.player.searchService])
    .factory("YoutubeSearch", ['$resource', 'API_KEY', window.modules.player.youtubeResource])
    .directive("search", ['messagesBusService', 'searchService', window.modules.player.searchDirective])
    .directive("player", ['messagesBusService', 'playerService', window.modules.player.playerDirective])
    .directive("playlist", ['messagesBusService', 'playlistService', window.modules.player.playlistDirective]);
}(window, window.angular));

(function(window, angular) {
  angular
    .module('wintubeApp.player', ['messageBusModule'])
    .service("playerService", window.modules.player.playerService)
    .directive("player", ['messagesBusService', 'playerService', window.modules.player.playerDirective])
    .directive("playlist", ['messagesBusService', window.modules.player.playlistDirective]);
}(window, window.angular));

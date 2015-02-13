window.modules.player.playerDirective = function(messagesBusService, playerService) {
  return {
    restrict: 'E',
    controllerAs: 'Player',
    template: '<div><youtube-video video-url="Player.youtubeUrl"></youtube-video></div>',
    controller: function ($scope) {
      this.youtubeUrl = "";

      function onItemSelected(item) {
        playerService.setItem(item);
        playerService.play.bind(this)();
      }

      $scope.$on("youtube.player.ready", function($event, player) {
        playerService.setPlayer(player);
      });

      messagesBusService.register("itemSelected", {
        name: 'playlist-itemSelected-subscriber',
        handler: onItemSelected.bind(this)
      })
    }
  }
};

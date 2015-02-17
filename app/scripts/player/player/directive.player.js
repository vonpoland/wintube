window.modules.player.playerDirective = function (playerService) {
  return {
    restrict: 'AE',
    controllerAs: 'Player',
    template: '<div><youtube-video video-url="Player.item.video.url"></youtube-video></div>',
    controller: function ($scope) {
      this.item = playerService.getItem();

      $scope.$on("youtube.player.ready", function($event, player) {
        playerService.setPlayer(player);
      });
    }
  }
};

window.modules.player.playlistDirective = function (playerService, playlistService) {
  return {
    restrict: 'E',
    controllerAs: 'Playlist',
    template: '<div data-ng-repeat="item in Playlist.items track by $index"> <div ng-dblclick="Playlist.itemChange(item)">{{item.title}}</div></div>',
    controller: function () {
      this.items = playlistService.getPlaylist();
      this.itemChange = function (item) {
        playerService.setItem(item);
        playerService.play();
      };
    }
  }
};

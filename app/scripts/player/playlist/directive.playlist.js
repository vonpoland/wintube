window.modules.player.playlistDirective = function (playerService, playlistService) {
  return {
    restrict: 'AE',
    controllerAs: 'Playlist',
    template: '<div ng-repeat="item in Playlist.items track by $index"> <div ng-dblclick="Playlist.itemChange(item)">{{item.title}}</div></div>',
    controller: function () {
      this.items = playlistService.getPlaylist();
      this.itemChange = function (item) {
        playerService.setItem(item);
        playerService.play();
      };
    }
  }
};

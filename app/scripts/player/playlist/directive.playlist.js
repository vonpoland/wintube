window.modules.player.playlistDirective = function (playerService, playlistService) {
  return {
    restrict: 'AE',
    controllerAs: 'Playlist',
    template: '<div data-content><search></search><div class="playlistItem" ng-repeat="item in Playlist.items track by $index"><div ng-dblclick="Playlist.itemChange(item)" class="item">{{item.title}}</div><menu><button ng-click="Playlist.removeItem(item)">-</button></menu></div></div>',
    controller: function () {
      this.items = playlistService.getPlaylist();
      this.itemChange = function (item) {
        playerService.setItem(item);
        playerService.play();
      };
      this.removeItem = playlistService.removeItem;
    }
  }
};

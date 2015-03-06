window.modules.player.playlistDirective = function (playerService, playlistService, $timeout) {
  return {
    restrict: 'AE',
    controllerAs: 'Playlist',
    template: '<div data-content><search></search><div ui-sortable="Playlist.sortableOptions" ng-model="Playlist.items"><div class="playlistItem" ng-repeat="item in Playlist.items track by $index"><div ng-dblclick="Playlist.itemChange(item)" class="item pointer">{{item.title}}</div><menu><button ng-click="Playlist.removeItem(item)">-</button></menu></div></div></div>',
    controller: function () {
      this.sortableOptions = {
        update: $timeout.bind(null, playlistService.savePlaylist)
      };
      this.items = playlistService.getPlaylist();
      this.itemChange = function (item) {
        playerService.setItem(item);
        playerService.play();
      };
      this.removeItem = playlistService.removeItem;
    }
  }
};

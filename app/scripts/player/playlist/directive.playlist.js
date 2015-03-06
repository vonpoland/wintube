window.modules.player.playlistDirective = function (playerService, playlistService, $timeout) {
  return {
    restrict: 'AE',
    controllerAs: 'Playlist',
    template: '<div class="frame"><div id="playlist-control-panel">' +
    '<menu><button ng-click="Playlist.removeSelectedItem()">-</button></menu><search></search></div>' +
    '<div data-content>' +
    '<div ui-sortable="Playlist.sortableOptions" ng-model="Playlist.items">' +
    '<div class="playlistItem" ng-repeat="item in Playlist.items track by $index" ng-class="{selected: item.selected}">' +
    '<div ng-click="Playlist.selectItem(item)" ng-dblclick="Playlist.itemChange(item)" class="item pointer">{{item.title}}</div>' +
    '<menu>0:00</menu>' +
    '</div>' +
    '</div><div class="fakeElement"></div>' +
    '</div></div></div>',
    controller: function () {
      this.sortableOptions = {
        update: $timeout.bind(null, playlistService.savePlaylist)
      };
      this.items = playlistService.getPlaylist();
      this.itemChange = function (item) {
        playerService.setItem(item);
        playerService.play();
      };
      this.removeSelectedItem = playlistService.removeItem;
      this.selectItem = playlistService.selectItem;
    }
  }
};

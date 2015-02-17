window.modules.player.playlistDirective = function (messagesBusService, playlistService) {
  return {
    restrict: 'E',
    controllerAs: 'Playlist',
    template: '<div data-ng-repeat="item in Playlist.items"> <div ng-dblclick="Playlist.itemChange(item)">{{item.name}}</div></div>',
    controller: function () {
      this.items = playlistService.getPlaylist();
      this.itemChange = function (item) {
        messagesBusService.publish("itemSelected", item);
      };

      messagesBusService.register("addItemToPlaylist", {
        name: 'playlist-itemSelected-subscriber',
        handler: playlistService.addItem.bind(this)
      })
    }
  }
};

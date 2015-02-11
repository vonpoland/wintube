window.modules.player.playlistDirective = function(messagesBusService) {
  return {
    restrict: 'E',
    controllerAs: 'Playlist',
    template: '<div data-ng-repeat="item in Playlist.items"> <div ng-dblclick="Playlist.itemChange(item)">{{item.name}}</div></div>',
    controller: function () {
      this.items = [
        {
          name: "bla",
          url: "https://www.youtube.com/watch?v=18-xvIjH8T4"
        },
        {
          name: "ATB",
          url: "https://www.youtube.com/watch?v=QKWvUJII0lo&list=RDLwc57BS5UTI&index=22"
        }
      ];

      this.itemChange = function (item) {
        messagesBusService.publish("itemSelected", item);
      }
    }
  }
};

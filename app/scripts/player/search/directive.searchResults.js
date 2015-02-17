window.modules.player.searchResults = function (searchService, playlistService) {
  return {
    restrict: 'E',
    controllerAs: 'SearchResult',
    template: '<div><ul ng-repeat="item in SearchResult.searchResults.results track by $index"><li><div><span>{{item.title}}</span><button ng-click="SearchResult.addToPlaylist(item)">add to playlist</button></div></li></ul></div>',
    controller: function () {
      this.searchResults = searchService.getSearchResults();
      this.addToPlaylist = playlistService.addItem;
    }
  }
};
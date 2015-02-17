window.modules.player.searchDirective = function (messagesBusService, searchService) {
  return {
    restrict: 'E',
    controllerAs: 'Search',
    template: '<div><input type="search" data-ng-change="Search.onSearchChange()" ng-model="Search.searchText"/></div>',
    controller: function () {
      this.searchText = "";
      this.onSearchChange = function () {
        searchService.search(this.searchText);
      }
    }
  }
};

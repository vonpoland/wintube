window.modules.ui.scrollable = function (Storage, PerfectScroll, $timeout) {
  return {
    restrict: 'A',
    controllerAs: 'scrollableCtrl',
    link: function (scope, element) {
      $timeout(function () {
        PerfectScroll.initialize(element.find(".frame")[0]);
      });
    },
    controller: function ($scope, $element) {
      this.update = function () {
        $timeout(function () {
          PerfectScroll.update($element.find(".frame")[0]);
        });
      }
    }
  }
};

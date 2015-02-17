window.modules.ui.draggable = function () {
  return {
    restrict: 'A',
    link: function (scope, element) {
      $(element).draggable();
    }
  }
};

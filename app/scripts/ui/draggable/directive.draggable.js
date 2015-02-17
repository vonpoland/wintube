window.modules.ui.draggable = function (Storage, zIndex) {
  return {
    restrict: 'A',
    link: function (scope, element, attr) {
      element.draggable({
        start: function () {
          element.zIndex(zIndex++);
        },
        stop: function () {
          Storage.save(attr.draggable, element.position());
        }
      });

      var previousPosition = Storage.get(attr.draggable);

      if (previousPosition) {
        element.offset(previousPosition);
      }
    }
  }
};
